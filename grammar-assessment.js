/* ===== grammar-assessment.js: adaptive placement test (A -> B -> C), 3-state result ===== */
function getPlacementQuestions(){
  const list = [];
  GRAMMAR_LEVELS.forEach(level=>{
    GRAMMAR_TOPICS.filter(tp=>tp.level===level).slice(0, PLACEMENT_SAMPLE_SIZE).forEach(tp=>{
      list.push({ level, topicId: tp.id, q: tp.diag.q, options: tp.diag.options, answer: tp.diag.answer });
    });
  });
  return list;
}
let placementQueue = [], placementIdx = 0, placementScores = {};

function renderGrammarAssessIntro(){
  const wrap = document.getElementById('grammarAssessWrap');
  wrap.innerHTML = `
    <div class="card" style="text-align:center;padding:26px 20px">
      <div class="icon-badge tint-a" style="width:56px;height:56px;border-radius:16px;margin:0 auto 14px;background:var(--teal-tint);color:var(--teal-dark);display:flex;align-items:center;justify-content:center">${icon('testShield')}</div>
      <h3 style="margin:0 0 8px">${escapeHtml(t('grammar_assess_title'))}</h3>
      <p class="hint" style="margin-bottom:4px">${escapeHtml(t('grammar_assess_disclaimer'))}</p>
      <button class="primary-btn" id="startPlacementBtn" style="width:auto;margin-top:14px">${escapeHtml(t('grammar_card_test_sub'))}</button>
    </div>`;
  const btn = document.getElementById('startPlacementBtn');
  if(btn) btn.addEventListener('click', ()=>startPlacementTest());
}

function startPlacementTest(){
  placementQueue = getPlacementQuestions();
  placementIdx = 0;
  placementScores = {};
  renderPlacementQuestion();
}
function renderPlacementQuestion(){
  const wrap = document.getElementById('grammarAssessWrap');
  if(placementIdx >= placementQueue.length){ finishPlacement(); return; }
  const q = placementQueue[placementIdx];
  wrap.innerHTML = `
    <div class="hint" style="margin-bottom:10px">${placementIdx+1} / ${placementQueue.length} · ${q.level}</div>
    <div class="card">
      <p class="ltr-block" style="font-size:15.5px;font-weight:600;margin:0 0 14px">${escapeHtml(q.q)}</p>
      <div id="placementOptions"></div>
    </div>`;
  const opts = document.getElementById('placementOptions');
  q.options.forEach((opt,i)=>{
    const b = document.createElement('button');
    b.className = 'quiz-option ltr-block'; b.textContent = opt;
    b.addEventListener('click', ()=>{
      document.querySelectorAll('#placementOptions .quiz-option').forEach(x=>x.disabled=true);
      const correct = i===q.answer;
      b.classList.add(correct?'correct':'wrong');
      if(!placementScores[q.level]) placementScores[q.level] = {correct:0,total:0};
      placementScores[q.level].total++;
      if(correct) placementScores[q.level].correct++;
      setTimeout(()=>{
        placementIdx++;
        const nextQ = placementQueue[placementIdx];
        const justFinishedLevel = !nextQ || nextQ.level !== q.level;
        if(justFinishedLevel){
          const sc = placementScores[q.level];
          if(sc.correct/sc.total < 0.75){ finishPlacement(); return; }
        }
        renderPlacementQuestion();
      }, 550);
    });
    opts.appendChild(b);
  });
}
function finishPlacement(){
  const passedLevels = [];
  let weakLevel = null;
  GRAMMAR_LEVELS.forEach(level=>{
    const sc = placementScores[level];
    if(sc && sc.correct/sc.total >= 0.75){
      passedLevels.push(level);
      GRAMMAR_TOPICS.filter(tp=>tp.level===level).forEach(tp=> setGrammarStatus(tp.id, GRAMMAR_STATUS.COMPLETED));
    } else if(sc && weakLevel===null){
      weakLevel = level;
      GRAMMAR_TOPICS.filter(tp=>tp.level===level).forEach(tp=>{
        if(getGrammarStatus(tp.id) === GRAMMAR_STATUS.NOT_STARTED) setGrammarStatus(tp.id, GRAMMAR_STATUS.LEARNING);
      });
    }
  });
  const estimatedLevel = passedLevels.length ? passedLevels[passedLevels.length-1] : (GRAMMAR_LEVELS[0]);
  const rangeText = weakLevel ? `${estimatedLevel}–${weakLevel}` : estimatedLevel;
  const wrap = document.getElementById('grammarAssessWrap');
  wrap.innerHTML = `
    <div class="card" style="text-align:center;padding:26px 20px">
      <div style="font-size:12px;color:var(--muted);font-weight:700;text-transform:uppercase;margin-bottom:6px">${escapeHtml(t('grammar_assess_result_title'))}</div>
      <h3 style="margin:0 0 4px;font-size:28px;font-family:'Fraunces',serif">${escapeHtml(estimatedLevel)}</h3>
      <div class="hint" style="margin-bottom:16px">${escapeHtml(t('grammar_assess_range'))}: ${escapeHtml(rangeText)}</div>
      ${passedLevels.length ? `<div class="hint" style="margin-bottom:6px">${escapeHtml(t('grammar_assess_strong'))}: ${passedLevels.map(l=>escapeHtml(l)).join(', ')}</div>` : ''}
      ${weakLevel ? `<div class="hint" style="margin-bottom:6px">${escapeHtml(t('grammar_assess_weak'))}: ${escapeHtml(weakLevel)}</div>` : ''}
      <div class="hint" style="margin-bottom:16px">${escapeHtml(t('grammar_assess_suggest'))}: <b>${escapeHtml(weakLevel || estimatedLevel)}</b></div>
      <p class="hint" style="font-size:11px;margin-bottom:16px">${escapeHtml(t('grammar_assess_disclaimer'))}</p>
      <button class="primary-btn" id="finishAssessBtn" style="width:auto">${escapeHtml(t('grammar_continue_btn'))}</button>
    </div>`;
  document.getElementById('finishAssessBtn').addEventListener('click', ()=> goToRoot('grammarHome'));
}
