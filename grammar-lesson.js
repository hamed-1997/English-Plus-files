/* ===== grammar-lesson.js: AI lesson generation (structured JSON) + short lesson + collapsible "more" ===== */
let currentGrammarTopic = null;
function grammarLessonCacheKey(id){ return 'etg_grammar_lesson2_' + id; }

function buildGrammarLessonPrompt(topic){
  return `You are an expert English grammar teacher writing a SHORT, focused lesson for a Persian-speaking learner.

Grammar topic: ${topic.titleEn} (${topic.titleFa})
CEFR level: ${topic.level}

The learner should be able to read the core lesson in about 1-2 mobile screens and fully understand the point. Keep the main lesson short and practical; put deeper nuance, exceptions, and edge cases only in "moreExplanation".

Rules:
- All explanations must be in natural, simple, fluent Persian (فارسی).
- All example sentences must be in English, each with a natural Persian translation.
- Respect the ${topic.level} CEFR level — don't over-explain or under-explain for this level.
- Use real, natural example sentences — never strange, robotic, or artificial ones.
- Do not include information that is factually wrong.
- Keep the core lesson concise and fast to read; save depth for moreExplanation.
- Do NOT return HTML or Markdown — plain text only inside the JSON string values.

Respond with ONLY valid JSON (no markdown fences, no commentary) in exactly this shape:
{
  "summary": "1-2 sentence plain-Persian explanation of what this grammar point is",
  "usage": "short Persian explanation of when and why this grammar is used",
  "structure": "the sentence formula in English, e.g. Subject + have/has + Past Participle",
  "examples": [ {"en":"English example sentence", "fa":"Persian translation"} ],
  "notes": ["short important note in Persian"],
  "mistakes": [ {"wrong":"incorrect English sentence", "right":"corrected English sentence", "note":"short Persian note on why"} ],
  "moreExplanation": {
    "details": "longer Persian explanation with more nuance",
    "differences": "Persian explanation of how this differs from similar/confusable grammar points, if relevant (empty string if not relevant)",
    "exceptions": "Persian explanation of exceptions, if any (empty string if none)",
    "advancedExamples": [ {"en":"English sentence", "fa":"Persian translation"} ]
  }
}
Include 4 to 6 examples, 3 to 5 notes, and 3 to 4 common mistakes. Include 2 to 3 advancedExamples.`;
}

async function openGrammarTopic(topicId){
  const tp = GRAMMAR_TOPICS.find(x=>x.id===topicId);
  if(!tp) return;
  currentGrammarTopic = tp;
  setContinueLearning(tp.id);
  if(getGrammarStatus(tp.id) === GRAMMAR_STATUS.NOT_STARTED) setGrammarStatus(tp.id, GRAMMAR_STATUS.LEARNING);
  document.getElementById('grammarTopicHeading').textContent = topicTitle(tp);
  goTo('grammarTopic');
}
async function renderGrammarTopicPage(){
  const tp = currentGrammarTopic;
  if(!tp) return;
  const wrap = document.getElementById('grammarTopicWrap');
  wrap.innerHTML = `<div class="loading-row"><div class="spin"></div> ${escapeHtml(t('grammar_loading'))}</div>`;
  let lesson = null;
  const cached = localStorage.getItem(grammarLessonCacheKey(tp.id));
  if(cached){
    try{ lesson = JSON.parse(cached); }catch(e){ lesson = null; }
  }
  if(!lesson){
    wrap.innerHTML = `<div class="loading-row"><div class="spin"></div> ${escapeHtml(t('grammar_generating'))}</div>`;
    try{
      lesson = await callAI(buildGrammarLessonPrompt(tp));
      localStorage.setItem(grammarLessonCacheKey(tp.id), JSON.stringify(lesson));
    }catch(e){
      wrap.innerHTML = `<div class="hint" style="color:var(--danger)">Could not build this lesson. Try again.</div>`;
      return;
    }
  }
  renderLessonContent(lesson);
}
function renderLessonContent(lesson){
  const tp = currentGrammarTopic;
  const wrap = document.getElementById('grammarTopicWrap');
  const status = getGrammarStatus(tp.id);
  wrap.innerHTML = `
    <div class="lesson-section">
      <div class="rtl-block" style="font-size:15px;line-height:1.9">${escapeHtml(lesson.summary||'')}</div>
    </div>
    <div class="lesson-section">
      <h4>${escapeHtml(t('grammar_lesson_usage'))}</h4>
      <div class="rtl-block" style="font-size:14px;line-height:1.9">${escapeHtml(lesson.usage||'')}</div>
    </div>
    ${lesson.structure ? `<div class="lesson-section"><h4>${escapeHtml(t('grammar_lesson_structure'))}</h4><div class="lesson-formula">${escapeHtml(lesson.structure)}</div></div>` : ''}
    <div class="lesson-section">
      <h4>${escapeHtml(t('grammar_lesson_examples'))}</h4>
      ${(lesson.examples||[]).map(ex=>`<div class="lesson-example"><div class="en ltr-block">${escapeHtml(ex.en)}</div><div class="fa">${escapeHtml(ex.fa)}</div></div>`).join('')}
    </div>
    ${(lesson.notes && lesson.notes.length) ? `<div class="lesson-section"><h4>${escapeHtml(t('grammar_lesson_notes'))}</h4><ul class="rtl-block" style="padding-inline-start:20px;margin:0;font-size:13.5px;line-height:2">${lesson.notes.map(n=>`<li>${escapeHtml(n)}</li>`).join('')}</ul></div>` : ''}
    ${(lesson.mistakes && lesson.mistakes.length) ? `<div class="lesson-section"><h4>${escapeHtml(t('grammar_lesson_mistakes'))}</h4>${lesson.mistakes.map(m=>`<div class="mistake-pair"><div class="mistake-wrong ltr-block">✗ ${escapeHtml(m.wrong)}</div><div class="mistake-right ltr-block">✓ ${escapeHtml(m.right)}</div>${m.note ? `<div class="rtl-block hint" style="margin-top:2px">${escapeHtml(m.note)}</div>` : ''}</div>`).join('')}</div>` : ''}
    <button class="more-toggle" id="moreToggleBtn">${escapeHtml(t('grammar_lesson_more'))} ▾</button>
    <div id="moreExplanationArea" style="display:none;margin-top:14px"></div>
    <div class="status-row">
      <button class="ghost-btn" id="markLearningBtn" ${status===GRAMMAR_STATUS.LEARNING ? 'disabled' : ''}>${escapeHtml(t('grammar_mark_learning'))}</button>
      <button class="primary-btn" id="markCompletedBtn" ${status===GRAMMAR_STATUS.COMPLETED ? 'disabled' : ''}>${status===GRAMMAR_STATUS.COMPLETED ? escapeHtml(t('grammar_mark_done')) : escapeHtml(t('grammar_mark_completed'))}</button>
    </div>
  `;
  document.getElementById('moreToggleBtn').addEventListener('click', ()=>{
    const area = document.getElementById('moreExplanationArea');
    const opening = area.style.display === 'none';
    if(opening && !area.dataset.filled){
      const more = lesson.moreExplanation || {};
      area.innerHTML = `
        ${more.details ? `<div class="lesson-section"><div class="rtl-block" style="font-size:13.5px;line-height:1.9">${escapeHtml(more.details)}</div></div>` : ''}
        ${more.differences ? `<div class="lesson-section"><h4>${escapeHtml(t('grammar_lesson_notes'))}</h4><div class="rtl-block" style="font-size:13.5px;line-height:1.9">${escapeHtml(more.differences)}</div></div>` : ''}
        ${more.exceptions ? `<div class="lesson-section"><div class="rtl-block hint" style="font-size:13px;line-height:1.9">${escapeHtml(more.exceptions)}</div></div>` : ''}
        ${(more.advancedExamples||[]).map(ex=>`<div class="lesson-example"><div class="en ltr-block">${escapeHtml(ex.en)}</div><div class="fa">${escapeHtml(ex.fa)}</div></div>`).join('')}
      `;
      area.dataset.filled = '1';
    }
    area.style.display = opening ? 'block' : 'none';
    document.getElementById('moreToggleBtn').textContent = t('grammar_lesson_more') + (opening ? ' ▴' : ' ▾');
  });
  document.getElementById('markLearningBtn').addEventListener('click', ()=>{
    setGrammarStatus(tp.id, GRAMMAR_STATUS.LEARNING);
    renderLessonContent(lesson);
  });
  document.getElementById('markCompletedBtn').addEventListener('click', ()=>{
    setGrammarStatus(tp.id, GRAMMAR_STATUS.COMPLETED);
    renderLessonContent(lesson);
  });
}
