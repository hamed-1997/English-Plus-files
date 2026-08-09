/* ===== result-page.js: tabs, text rendering, tap-word popup, translation ===== */
/* ================= OUTPUT RENDERING ================= */
let currentResult = null;
function renderKeyVocabList(list){
  return list.map((w,i)=>`
    <div class="kv-item">
      <div class="kv-head">
        <span class="kv-word">${escapeHtml(w.word)}</span>
        ${ttsSupported ? `<button class="tts-btn" data-speakkv="${escapeHtml(w.word)}">${icon('speaker')}</button>` : ''}
        <span class="kv-ipa">${escapeHtml(w.ipa||'')}</span>
      </div>
      <div class="kv-meaning">${escapeHtml(w.meaningEn||'')}</div>
      ${w.meaningFa ? `<div class="kv-fa">${escapeHtml(w.meaningFa)}</div>` : ''}
      ${w.example ? `<div class="kv-example">"${escapeHtml(w.example)}"</div>` : ''}
      <button class="small-btn" data-addkv="${i}" style="margin-top:8px">+ Add to vocabulary</button>
    </div>`).join('');
}
function renderGenTextHTML(r){
  if(r.dialogueLines && r.dialogueLines.length){
    return r.dialogueLines.map((d,i)=> `<div class="seg-line hl" data-seg="${i}"><strong>${escapeHtml(d.speaker)}:</strong> ${wrapWordsHtml(d.line, i)}</div>`).join('');
  }
  const sentences = splitSentences(r.text);
  return sentences.map((s,i)=> `<span class="hl" data-seg="${i}">${wrapWordsHtml(s, i)} </span>`).join('');
}
function wrapWordsHtml(text, segIdx){
  const tokens = text.split(/(\s+)/);
  let wi = 0;
  return tokens.map(tok=>{
    if(/\S/.test(tok)){
      const cleanWord = tok.replace(/[^A-Za-z']/g,'');
      const html = `<span class="tap-word" data-seg="${segIdx}" data-w="${wi}" data-word="${escapeHtml(cleanWord)}">${escapeHtml(tok)}</span>`;
      wi++; return html;
    }
    return escapeHtml(tok);
  }).join('');
}
function renderOutput(r){
  const wrap = document.getElementById('outputWrap');
  const kv = r.keyVocabulary || [];
  wrap.innerHTML = `
    <div class="card output-card">
      <div class="output-head">
        <h2 class="output-title">${escapeHtml(r.title)}</h2>
        <div class="output-head-actions">
          ${ttsSupported ? `<button class="tts-btn" id="speakToggleBtn" title="Listen">${icon('speaker')}</button>` : ''}
          <button class="tts-btn" id="translateToggleBtn" title="Translate">${icon('globe')}</button>
          <button class="star ${r.fav?'on':''}" id="favBtn">★</button>
        </div>
      </div>
      <div class="stat-row">
        <span class="stat">${r.sentCount} sentences</span>
        <span class="stat">${r.wordCount} words</span>
        <span class="stat">~${r.readMin} min read</span>
        ${r.estimatedCEFR ? `<span class="stat">${r.estimatedCEFR} verified</span><span class="stat">${r.localCEFR} local</span>` : `<span class="stat">${r.localCEFR} estimated</span>`}
      </div>
      <div class="result-tabs">
        <button class="result-tab active" data-rtab="text">Text</button>
        <button class="result-tab" data-rtab="vocab">Vocabulary${kv.length ? ' ('+kv.length+')' : ''}</button>
        <button class="result-tab" data-rtab="exercises">Exercises</button>
      </div>
      <div class="result-tab-panel active" id="rtab-text">
        ${ttsSupported ? renderPlayerPanel() : ''}
        <div id="translationArea" style="display:none"></div>
        <div class="gen-text" id="genTextBlock">${renderGenTextHTML(r)}</div>
        ${r.vocabNote ? `<div class="hint" style="margin-top:12px">${escapeHtml(r.vocabNote)}</div>` : ''}
        ${r.mismatch ? `<div class="warn-box">⚠ The local estimate and the AI check disagree noticeably on this text's level; it may not exactly match your chosen level.</div>` : ''}
        <div class="export-row">
          <button class="small-btn" id="copyBtn">Copy</button>
          <button class="small-btn" id="txtBtn">Download .txt</button>
          <button class="small-btn" id="pdfBtn">Print / PDF</button>
        </div>
      </div>
      <div class="result-tab-panel" id="rtab-vocab">
        ${kv.length ? renderKeyVocabList(kv) : `<div class="empty"><div class="big">No flagged words</div>This text didn't surface new vocabulary beyond what you've already saved.</div>`}
      </div>
      <div class="result-tab-panel" id="rtab-exercises">
        <div id="exercisesArea"></div>
      </div>
    </div>`;

  document.querySelectorAll('.result-tab').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      document.querySelectorAll('.result-tab').forEach(b=>b.classList.toggle('active', b===btn));
      document.querySelectorAll('.result-tab-panel').forEach(p=>p.classList.remove('active'));
      document.getElementById('rtab-'+btn.dataset.rtab).classList.add('active');
      if(btn.dataset.rtab === 'exercises') loadExercises(r);
    });
  });

  document.getElementById('favBtn').addEventListener('click', ()=>{
    r.fav = !r.fav;
    const history = LS.get('etg_history', []);
    const h = history.find(x=>x.id===r.id); if(h) h.fav = r.fav;
    LS.set('etg_history', history);
    renderOutput(r);
  });
  document.getElementById('copyBtn').addEventListener('click', ()=>{
    navigator.clipboard.writeText(r.title + '\n\n' + r.displayText).then(()=>toast('Copied'));
  });
  document.getElementById('txtBtn').addEventListener('click', ()=>downloadBlob(`${r.title}\n\n${r.displayText}`, r.title+'.txt', 'text/plain'));
  document.getElementById('pdfBtn').addEventListener('click', ()=>printText(r));
  document.getElementById('translateToggleBtn').addEventListener('click', ()=>toggleTranslation(r));
  if(ttsSupported){
    document.getElementById('speakToggleBtn').addEventListener('click', ()=>{
      const panel = document.getElementById('playerPanel');
      const opening = !panel.classList.contains('open');
      panel.classList.toggle('open');
      if(opening){ if(TTSPlayer.segments.length===0) TTSPlayer.build(r); updatePlayerUI(); }
    });
    wirePlayerControls(r);
  }
  const vocabPanel = document.getElementById('rtab-vocab');
  vocabPanel.querySelectorAll('[data-addkv]').forEach(btn=>{
    btn.addEventListener('click', ()=>{ addVocabWord(kv[Number(btn.dataset.addkv)], r.settings.topic || r.settings.mode); });
  });
  vocabPanel.querySelectorAll('[data-speakkv]').forEach(btn=>{
    btn.addEventListener('click', ()=>{ speechSynthesis.cancel(); const u=new SpeechSynthesisUtterance(btn.dataset.speakkv); u.lang='en-US'; speechSynthesis.speak(u); });
  });
  wireWordTapPopup();
}
function printText(r){
  const w = window.open('', '_blank');
  w.document.write(`<html><head><title>${escapeHtml(r.title)}</title>
    <style>body{font-family:Georgia,serif;max-width:640px;margin:40px auto;line-height:1.8;font-size:16px}h1{font-family:sans-serif}small{color:#666}</style></head>
    <body><h1>${escapeHtml(r.title)}</h1><small>${r.sentCount} sentences · ${r.wordCount} words · ~${r.readMin} min</small>
    <p>${escapeHtml(r.displayText).replace(/\n/g,'<br>')}</p></body></html>`);
  w.document.close(); w.focus(); w.print();
}

/* ---- tap-word popup (translate / copy / add) — long-press to open ---- */
let currentTappedWord = null;
let pressTimer = null, pressStartX = 0, pressStartY = 0, pressWord = null;
const LONG_PRESS_MS = 550;
const MOVE_CANCEL_PX = 10;
function wireWordTapPopup(){
  const block = document.getElementById('genTextBlock');
  if(!block) return;
  block.addEventListener('pointerdown', (e)=>{
    const el = e.target.closest('.tap-word');
    if(!el || !el.dataset.word) return;
    pressWord = el.dataset.word;
    pressStartX = e.clientX; pressStartY = e.clientY;
    clearTimeout(pressTimer);
    pressTimer = setTimeout(()=>{
      if(pressWord){ openWordPopup(pressWord); pressWord = null; }
    }, LONG_PRESS_MS);
  });
  block.addEventListener('pointermove', (e)=>{
    if(!pressWord) return;
    if(Math.abs(e.clientX-pressStartX) > MOVE_CANCEL_PX || Math.abs(e.clientY-pressStartY) > MOVE_CANCEL_PX){
      clearTimeout(pressTimer); pressWord = null;
    }
  });
  const cancelPress = ()=>{ clearTimeout(pressTimer); pressWord = null; };
  block.addEventListener('pointerup', cancelPress);
  block.addEventListener('pointercancel', cancelPress);
  block.addEventListener('pointerleave', cancelPress);
}
async function openWordPopup(word){
  currentTappedWord = { word, meaningEn:'', meaningFa:'', example:'', ipa:'', phoneticFa:'', cefr:'' };
  document.getElementById('wpWord').textContent = word;
  document.getElementById('wpBody').innerHTML = `<div class="loading-row" style="justify-content:center"><div class="spin"></div> Translating…</div>`;
  document.getElementById('wordPopupModal').classList.add('open');
  try{
    const prompt = `Give dictionary information for the English word: "${word}".
Respond with ONLY valid JSON (no markdown fences) in exactly this shape:
{"meaningEn":"clear English definition","meaningFa":"Persian translation (فارسی)","example":"one example sentence","ipa":"IPA transcription","phoneticFa":"simplified Persian-readable pronunciation","cefr":"CEFR level"}`;
    const data = await callAI(prompt);
    Object.assign(currentTappedWord, {
      meaningEn: data.meaningEn || '', meaningFa: data.meaningFa || '', example: data.example || '',
      ipa: data.ipa || '', phoneticFa: data.phoneticFa || '', cefr: data.cefr || ''
    });
    document.getElementById('wpBody').innerHTML = `<div class="kv-fa" style="font-size:15px">${escapeHtml(currentTappedWord.meaningFa || currentTappedWord.meaningEn)}</div>`;
  }catch(e){
    document.getElementById('wpBody').innerHTML = `<div class="hint" style="color:var(--danger)">Lookup failed.</div>`;
  }
}
document.getElementById('wpCloseBtn').addEventListener('click', ()=> document.getElementById('wordPopupModal').classList.remove('open'));
document.getElementById('wordPopupModal').addEventListener('click', (e)=>{
  if(e.target.id === 'wordPopupModal') e.currentTarget.classList.remove('open');
});
document.getElementById('wpCopyBtn').addEventListener('click', ()=>{
  if(!currentTappedWord) return;
  navigator.clipboard.writeText(currentTappedWord.word).then(()=>toast('Copied'));
});
document.getElementById('wpAddBtn').addEventListener('click', ()=>{
  if(!currentTappedWord || !currentTappedWord.meaningEn){ toast('Still looking up…'); return; }
  const added = addVocabWord(currentTappedWord, 'Manual');
  if(added) document.getElementById('wordPopupModal').classList.remove('open');
});

/* ---- translation ---- */
function saveResultUpdate(r){
  const history = LS.get('etg_history', []);
  const h = history.find(x=>x.id===r.id);
  if(h){ h.translations = r.translations; h.exercises = r.exercises; }
  LS.set('etg_history', history);
}
/* ---- comprehension exercises ---- */
async function loadExercises(r){
  const area = document.getElementById('exercisesArea');
  if(r.exercises){ renderExercises(r); return; }
  area.innerHTML = `<div class="loading-row"><div class="spin"></div> Building exercises…</div>`;
  try{
    const prompt = `Based on the following English text, write 3 to 4 short multiple-choice reading comprehension questions that check understanding of the text's content (not grammar/vocabulary trivia).

TEXT:
"""${r.text}"""

Respond with ONLY valid JSON (no markdown fences) in exactly this shape:
{"questions":[{"question":"...", "options":["...","...","...","..."], "correctIndex":0}]}`;
    const data = await callAI(prompt);
    r.exercises = data.questions || [];
    saveResultUpdate(r);
    renderExercises(r);
  }catch(e){
    area.innerHTML = `<div class="hint" style="color:var(--danger)">Could not build exercises.</div>`;
  }
}
function renderExercises(r){
  const area = document.getElementById('exercisesArea');
  const qs = r.exercises || [];
  if(!qs.length){ area.innerHTML = `<div class="empty"><div class="big">No exercises</div>Could not generate exercises for this text.</div>`; return; }
  area.innerHTML = qs.map((q,i)=>`
    <div style="margin-bottom:18px">
      <div style="font-size:14px;font-weight:600;margin-bottom:8px">${i+1}. ${escapeHtml(q.question)}</div>
      ${(q.options||[]).map((opt,idx)=>`<button class="quiz-option" data-eq="${i}" data-idx="${idx}">${escapeHtml(opt)}</button>`).join('')}
    </div>`).join('') + `<div class="hint" id="exerciseScoreLine" style="margin-top:6px"></div>`;
  let answered = 0, correct = 0;
  qs.forEach((q,i)=>{
    area.querySelectorAll(`.quiz-option[data-eq="${i}"]`).forEach(btn=>{
      btn.addEventListener('click', ()=>{
        if(area.querySelector(`.quiz-option[data-eq="${i}"].correct, .quiz-option[data-eq="${i}"].wrong`)) return;
        const idx = Number(btn.dataset.idx);
        area.querySelectorAll(`.quiz-option[data-eq="${i}"]`).forEach(b=>{
          b.disabled = true;
          if(Number(b.dataset.idx) === q.correctIndex) b.classList.add('correct');
          else if(b === btn) b.classList.add('wrong');
        });
        answered++;
        if(idx === q.correctIndex) correct++;
        if(answered === qs.length){
          document.getElementById('exerciseScoreLine').textContent = `Score: ${correct} / ${qs.length}`;
        }
      });
    });
  });
}
async function toggleTranslation(r){
  const area = document.getElementById('translationArea');
  const btn = document.getElementById('translateToggleBtn');
  const genBlock = document.getElementById('genTextBlock');
  if(area.style.display === 'block'){ area.style.display='none'; btn.classList.remove('on'); genBlock.style.display='block'; return; }
  area.style.display = 'block'; btn.classList.add('on'); genBlock.style.display='none';
  if(r.translations){ area.innerHTML = r.translations.map(x=>`<div class="bi-line"><div class="bi-en">${escapeHtml(x.en)}</div><div class="bi-fa">${escapeHtml(x.fa)}</div></div>`).join(''); return; }
  area.innerHTML = `<div class="loading-row"><div class="spin"></div> Translating…</div>`;
  try{
    const prompt = `Translate the following English text to Persian, sentence by sentence, preserving the original order and meaning.

TEXT:
"""${r.text}"""

Respond with ONLY valid JSON (no markdown fences) in exactly this shape:
{"translations":[{"en":"sentence in English","fa":"همون جمله به فارسی"}]}`;
    const data = await callAI(prompt);
    r.translations = data.translations || [];
    saveResultUpdate(r);
    area.innerHTML = r.translations.map(x=>`<div class="bi-line"><div class="bi-en">${escapeHtml(x.en)}</div><div class="bi-fa">${escapeHtml(x.fa)}</div></div>`).join('');
  }catch(e){
    area.innerHTML = `<div class="hint" style="color:var(--danger)">Translation failed.</div>`;
  }
}

/* ---- audio player ---- */
