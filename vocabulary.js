/* ===== vocabulary.js: save word, add-word modal, vocab list ===== */
/* ================= vocabulary ================= */
function addVocabWord(w, topic){
  if(!w || !w.word) return false;
  const vocab = LS.get('etg_vocab', []);
  if(vocab.find(v=>v.word.toLowerCase()===w.word.toLowerCase())){ toast('Already saved'); return false; }
  vocab.unshift({
    id: 'v_' + Date.now() + Math.random().toString(36).slice(2,6),
    word: w.word, meaningEn: w.meaningEn||'', meaningFa: w.meaningFa||'', example: w.example||'',
    ipa: w.ipa||'', phoneticFa: w.phoneticFa||'', cefr: w.cefr||'', topic: topic||'General',
    addedAt: new Date().toISOString(),
    box: 1, nextReview: todayISO()
  });
  LS.set('etg_vocab', vocab);
  toast('Word saved');
  return true;
}

/* ---- manual add-word modal (auto-detect Persian/English) ---- */
const addWordModal = document.getElementById('addWordModal');
let awResult = null, awDebounce = null;
function detectPersian(text){ return /[\u0600-\u06FF]/.test(text); }
document.getElementById('addWordBtn').addEventListener('click', ()=>{
  document.getElementById('awInput').value = '';
  document.getElementById('awPreview').innerHTML = '';
  document.getElementById('saveAddWord').disabled = true;
  awResult = null;
  addWordModal.classList.add('open');
});
document.getElementById('closeAddWord').addEventListener('click', ()=> addWordModal.classList.remove('open'));
document.getElementById('awInput').addEventListener('input', ()=>{
  clearTimeout(awDebounce);
  const val = document.getElementById('awInput').value.trim();
  document.getElementById('saveAddWord').disabled = true;
  awResult = null;
  if(!val){ document.getElementById('awPreview').innerHTML = ''; return; }
  document.getElementById('awPreview').innerHTML = `<div class="loading-row"><div class="spin"></div> …</div>`;
  awDebounce = setTimeout(()=> lookupAddWord(val), 550);
});
async function lookupAddWord(val){
  const isFa = detectPersian(val);
  try{
    const prompt = isFa
      ? `Given the Persian word or phrase "${val}", find its best English equivalent.
Respond with ONLY valid JSON (no markdown fences) in exactly this shape:
{"word":"the English equivalent word","meaningEn":"short English definition","meaningFa":"Persian meaning (فارسی)","example":"one example sentence in English","ipa":"IPA transcription","phoneticFa":"simplified Persian-readable pronunciation","cefr":"CEFR level"}`
      : `Give dictionary information for the English word or short phrase: "${val}".
Respond with ONLY valid JSON (no markdown fences) in exactly this shape:
{"word":"${val}","meaningEn":"clear English definition","meaningFa":"Persian translation (فارسی)","example":"one example sentence","ipa":"IPA transcription","phoneticFa":"simplified Persian-readable pronunciation","cefr":"CEFR level"}`;
    const data = await callAI(prompt);
    awResult = {
      word: data.word || (isFa ? '' : val),
      meaningEn: data.meaningEn || '', meaningFa: data.meaningFa || '', example: data.example || '',
      ipa: data.ipa || '', phoneticFa: data.phoneticFa || '', cefr: data.cefr || ''
    };
    if(!awResult.word){
      document.getElementById('awPreview').innerHTML = `<div class="hint" style="color:var(--danger)">Could not find an equivalent.</div>`;
      return;
    }
    document.getElementById('awPreview').innerHTML = `
      <div class="kv-item" style="margin-top:6px">
        <div class="kv-head"><span class="kv-word">${escapeHtml(awResult.word)}</span><span class="kv-ipa">${escapeHtml(awResult.ipa)}</span></div>
        <div class="kv-meaning">${escapeHtml(awResult.meaningEn)}</div>
        ${awResult.meaningFa ? `<div class="kv-fa">${escapeHtml(awResult.meaningFa)}</div>` : ''}
        ${awResult.example ? `<div class="kv-example">"${escapeHtml(awResult.example)}"</div>` : ''}
      </div>`;
    document.getElementById('saveAddWord').disabled = false;
  }catch(e){
    document.getElementById('awPreview').innerHTML = `<div class="hint" style="color:var(--danger)">Lookup failed.</div>`;
  }
}
document.getElementById('saveAddWord').addEventListener('click', ()=>{
  if(!awResult) return;
  const added = addVocabWord(awResult, 'Manual');
  if(added){
    addWordModal.classList.remove('open');
    renderVocabTab();
  }
});
document.getElementById('vocabPillFa').addEventListener('click', ()=>{
  const p = LS.get('etg_vocab_prefs', {showFa:true, showPhon:true});
  p.showFa = !(p.showFa!==false); LS.set('etg_vocab_prefs', p); renderVocabTab();
});
document.getElementById('vocabPillPhon').addEventListener('click', ()=>{
  const p = LS.get('etg_vocab_prefs', {showFa:true, showPhon:true});
  p.showPhon = !(p.showPhon!==false); LS.set('etg_vocab_prefs', p); renderVocabTab();
});
document.getElementById('vocabSearch').addEventListener('input', renderVocabTab);
document.getElementById('startReviewBtn').addEventListener('click', ()=>startVocabReview());
document.getElementById('exportMenuBtn').addEventListener('click', (e)=>{
  e.stopPropagation();
  document.getElementById('exportMenu').classList.toggle('open');
});
document.addEventListener('click', ()=> document.getElementById('exportMenu').classList.remove('open'));
document.querySelectorAll('#exportMenu button').forEach(b=>{
  b.addEventListener('click', (e)=>{
    e.stopPropagation();
    const vocab = LS.get('etg_vocab', []).slice().sort((a,b)=>a.word.localeCompare(b.word));
    if(vocab.length===0){ toast('No words to export'); return; }
    if(b.dataset.fmt==='csv') exportVocabCsv(vocab);
    if(b.dataset.fmt==='word') exportVocabWord(vocab);
    if(b.dataset.fmt==='pdf') exportVocabPdf(vocab);
    document.getElementById('exportMenu').classList.remove('open');
  });
});
function exportVocabCsv(vocab){
  const rows = [['word','meaningEn','meaningFa','example','ipa','phoneticFa','cefr','topic','addedAt']];
  vocab.forEach(v=>rows.push([v.word,v.meaningEn,v.meaningFa,v.example,v.ipa,v.phoneticFa,v.cefr,v.topic,v.addedAt]));
  const csv = rows.map(r=>r.map(c=>'"'+String(c||'').replace(/"/g,'""')+'"').join(',')).join('\n');
  downloadBlob(csv, 'vocabulary.csv', 'text/csv');
}
function exportVocabWord(vocab){
  const rows = vocab.map(v=>`<tr><td>${escapeHtml(v.word)}</td><td>${escapeHtml(v.meaningEn)}</td><td>${escapeHtml(v.meaningFa)}</td><td>${escapeHtml(v.example)}</td></tr>`).join('');
  const html = `<html><head><meta charset="utf-8"></head><body><h2>Vocabulary List</h2>
    <table border="1" cellpadding="6" style="border-collapse:collapse"><tr><th>Word</th><th>Meaning</th><th>Persian</th><th>Example</th></tr>${rows}</table></body></html>`;
  const blob = new Blob(['\ufeff', html], {type:'application/msword'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href=url; a.download='vocabulary.doc'; a.click();
  URL.revokeObjectURL(url);
}
function exportVocabPdf(vocab){
  const rows = vocab.map(v=>`<tr><td>${escapeHtml(v.word)}</td><td>${escapeHtml(v.meaningEn)}</td><td>${escapeHtml(v.meaningFa)}</td><td>${escapeHtml(v.example)}</td></tr>`).join('');
  const w = window.open('', '_blank');
  w.document.write(`<html><head><title>Vocabulary</title><style>body{font-family:sans-serif}table{border-collapse:collapse;width:100%}td,th{border:1px solid #ccc;padding:8px;font-size:13px}</style></head>
  <body><h2>Vocabulary List</h2><table><tr><th>Word</th><th>Meaning</th><th>Persian</th><th>Example</th></tr>${rows}</table></body></html>`);
  w.document.close(); w.focus(); w.print();
}
function renderVocabTab(){
  const prefs = LS.get('etg_vocab_prefs', {showFa:true, showPhon:true});
  document.getElementById('vocabPillFa').classList.toggle('on', prefs.showFa!==false);
  document.getElementById('vocabPillPhon').classList.toggle('on', prefs.showPhon!==false);
  const q = (document.getElementById('vocabSearch').value || '').toLowerCase();
  const vocab = LS.get('etg_vocab', []).filter(v=>v.word.toLowerCase().includes(q)).sort((a,b)=>a.word.localeCompare(b.word));
  const list = document.getElementById('vocabList');
  if(vocab.length===0){ list.innerHTML = `<div class="empty"><div class="big">No words yet</div>Add words from a generated text.</div>`; return; }
  list.innerHTML = vocab.map(v=>`
    <div class="word-card">
      <div class="w-top">
        <div><span class="w-name">${escapeHtml(v.word)}</span> ${prefs.showPhon!==false && v.ipa ? `<span class="kv-ipa" style="margin-left:8px">${escapeHtml(v.ipa)}</span>` : ''}</div>
        <div style="display:flex;gap:6px">
          ${ttsSupported ? `<button class="tts-btn" data-speakv="${escapeHtml(v.word)}">${icon('speaker')}</button>` : ''}
          <button class="small-btn danger" data-delv="${v.id}">✕</button>
        </div>
      </div>
      <div class="kv-meaning">${escapeHtml(v.meaningEn)}</div>
      ${prefs.showFa!==false && v.meaningFa ? `<div class="kv-fa">${escapeHtml(v.meaningFa)}</div>` : ''}
      ${prefs.showPhon!==false && v.phoneticFa ? `<div class="kv-fa">${escapeHtml(v.phoneticFa)}</div>` : ''}
      ${v.example ? `<div class="kv-example">"${escapeHtml(v.example)}"</div>` : ''}
    </div>`).join('');
  list.querySelectorAll('[data-delv]').forEach(b=>b.addEventListener('click', ()=>{
    LS.set('etg_vocab', LS.get('etg_vocab', []).filter(x=>x.id!==b.dataset.delv));
    renderVocabTab();
  }));
  if(ttsSupported){
    list.querySelectorAll('[data-speakv]').forEach(b=>b.addEventListener('click', ()=>{
      speechSynthesis.cancel(); const u=new SpeechSynthesisUtterance(b.dataset.speakv); u.lang='en-US'; speechSynthesis.speak(u);
    }));
  }
}

