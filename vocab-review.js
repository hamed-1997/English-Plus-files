/* ===== vocab-review.js: 5-box Leitner review session ===== */
function ensureLeitnerFields(v){
  if(!v.box) v.box = 1;
  if(!v.nextReview) v.nextReview = todayISO();
  return v;
}
function startVocabReview(){
  let vocab = LS.get('etg_vocab', []);
  if(vocab.length===0){ toast('No words to review'); return; }
  vocab = vocab.map(ensureLeitnerFields);
  LS.set('etg_vocab', vocab);
  goTo('vocabReview');
  renderLeitnerIntro(vocab);
}
function renderLeitnerIntro(vocab){
  const area = document.getElementById('reviewCardArea');
  const counts = {1:0,2:0,3:0,4:0,5:0};
  vocab.forEach(v=> counts[v.box||1] = (counts[v.box||1]||0) + 1);
  const today = todayISO();
  const dueCount = vocab.filter(v=> (v.nextReview||today) <= today).length;
  area.innerHTML = `
    <div class="card">
      <h3 style="margin-top:0;font-size:15px">Leitner boxes</h3>
      <div class="leitner-grid">
        ${[1,2,3,4,5].map(b=>`<div class="leitner-box"><div class="lb-num">${counts[b]||0}</div><div class="lb-label">Box ${b}</div></div>`).join('')}
      </div>
      <div class="hint" style="margin:14px 0">${dueCount} word(s) due for review today.</div>
      <button class="primary-btn" id="beginReviewBtn" ${dueCount===0?'disabled':''}>Start Review${dueCount>0?' ('+dueCount+')':''}</button>
    </div>`;
  const btn = document.getElementById('beginReviewBtn');
  if(btn) btn.addEventListener('click', ()=> beginReviewSession(vocab));
}
let reviewDeck = [], reviewIndex = 0, reviewResults = {correct:0, incorrect:0};
function beginReviewSession(vocab){
  const today = todayISO();
  reviewDeck = vocab.filter(v=> (v.nextReview||today) <= today).sort(()=>Math.random()-0.5);
  reviewIndex = 0; reviewResults = {correct:0, incorrect:0};
  renderReviewCard();
}
function scheduleLeitner(v, correct){
  v.box = correct ? Math.min(5, (v.box||1)+1) : 1;
  const interval = LEITNER_INTERVALS[v.box] || 0;
  const next = new Date(); next.setDate(next.getDate() + interval);
  v.nextReview = next.toISOString().slice(0,10);
  const all = LS.get('etg_vocab', []);
  const idx = all.findIndex(x=>x.id===v.id);
  if(idx>-1){ all[idx] = v; LS.set('etg_vocab', all); }
}
function renderReviewCard(){
  const area = document.getElementById('reviewCardArea');
  if(reviewIndex >= reviewDeck.length){
    area.innerHTML = `<div class="card empty"><div class="big">Done</div>Correct: ${reviewResults.correct} · Incorrect: ${reviewResults.incorrect}</div>`;
    return;
  }
  const w = reviewDeck[reviewIndex];
  let flipped = false;
  area.innerHTML = `
    <div class="hint" style="margin-bottom:8px;text-align:center">${reviewIndex+1} / ${reviewDeck.length} · Box ${w.box||1}</div>
    <div class="card">
      <div class="flashcard" id="rc"><div class="word">${escapeHtml(w.word)}</div><div class="hint">Tap to reveal</div></div>
      <div class="rate-row" id="reviewRateRow" style="display:none">
        <button class="rate-btn rate-again" data-know="0">Incorrect</button>
        <button class="rate-btn rate-good" data-know="1">Correct</button>
      </div>
    </div>`;
  document.getElementById('rc').addEventListener('click', ()=>{
    if(flipped) return; flipped = true;
    document.getElementById('rc').innerHTML = `
      <div class="word">${escapeHtml(w.word)}</div>
      <div class="meaning">${escapeHtml(w.meaningEn)}</div>
      ${w.meaningFa ? `<div class="persian">${escapeHtml(w.meaningFa)}</div>` : ''}
      ${w.example ? `<div class="example">"${escapeHtml(w.example)}"</div>` : ''}`;
    document.getElementById('reviewRateRow').style.display = 'grid';
  });
  document.querySelectorAll('#reviewRateRow .rate-btn').forEach(b=>b.addEventListener('click', ()=>{
    const correct = b.dataset.know==='1';
    scheduleLeitner(w, correct);
    if(correct) reviewResults.correct++; else reviewResults.incorrect++;
    reviewIndex++; renderReviewCard();
  }));
}
