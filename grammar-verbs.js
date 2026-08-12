/* ===== grammar-verbs.js: irregular verb search tool ===== */
function normalizeVerb(s){ return s.trim().toLowerCase(); }
function findVerb(query){
  const q = normalizeVerb(query);
  let v = IRREGULAR_VERBS.find(x=> x.base===q);
  if(v) return v;
  v = IRREGULAR_VERBS.find(x=> x.past.split('/').map(s=>s.trim()).includes(q));
  if(v) return v;
  v = IRREGULAR_VERBS.find(x=> x.pp.split('/').map(s=>s.trim()).includes(q));
  return v || null;
}
function renderVerbSearchResult(){
  const q = document.getElementById('verbSearchInput').value;
  const box = document.getElementById('verbSearchResult');
  if(!q.trim()){ box.innerHTML=''; return; }
  const v = findVerb(q);
  if(!v){
    box.innerHTML = `<div class="warn-box">${escapeHtml(t('grammar_verb_not_found'))}</div>`;
    return;
  }
  box.innerHTML = `
    <div class="word-card">
      <div class="w-top"><span class="w-name ltr-block">${escapeHtml(v.base)}</span></div>
      <div class="kv-meaning">${escapeHtml(t('grammar_verb_past'))}: <b class="ltr-block" style="display:inline">${escapeHtml(v.past)}</b></div>
      <div class="kv-meaning">${escapeHtml(t('grammar_verb_pp'))}: <b class="ltr-block" style="display:inline">${escapeHtml(v.pp)}</b></div>
    </div>`;
}
document.getElementById('verbSearchBtn').addEventListener('click', renderVerbSearchResult);
document.getElementById('verbSearchInput').addEventListener('keydown', e=>{ if(e.key==='Enter') renderVerbSearchResult(); });
function renderAllVerbsList(){
  const wrap = document.getElementById('verbListAll');
  wrap.innerHTML = IRREGULAR_VERBS.map(v=>`
    <div class="topic-row" style="cursor:default">
      <span class="t-name ltr-block">${escapeHtml(v.base)}</span>
      <span class="hint ltr-block">${escapeHtml(v.past)} · ${escapeHtml(v.pp)}</span>
    </div>`).join('');
}

