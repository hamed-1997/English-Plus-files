/* ===== grammar-assessment.js: placement test ===== */
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
function startPlacementTest(){
  placementQueue = getPlacementQuestions();
  placementIdx = 0;
  placementScores = {};
  goTo('grammarAssess');
  renderPlacementQuestion();
}
function renderPlacementQuestion(){
  const wrap = document.getElementById('grammarAssessWrap');
  if(placementIdx >= placementQueue.length){ finishPlacement(); return; }
  const q = placementQueue[placementIdx];
  wrap.innerHTML = `
    <div class="hint" style="margin-bottom:10px">${placementIdx+1} / ${placementQueue.length} · ${q.level}</div>
    <div class="card">
      <p style="font-size:15.5px;font-weight:600;margin:0 0 14px">${escapeHtml(q.q)}</p>
      <div id="placementOptions"></div>
    </div>`;
  const opts = document.getElementById('placementOptions');
  q.options.forEach((opt,i)=>{
    const b = document.createElement('button');
    b.className = 'quiz-option'; b.textContent = opt;
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
  const p = grammarProgress();
  GRAMMAR_LEVELS.forEach(level=>{
    const sc = placementScores[level];
    if(sc && sc.correct/sc.total >= 0.75){
      GRAMMAR_TOPICS.filter(tp=>tp.level===level).forEach(tp=>{
        const st = topicState(p, tp.id);
        if(st.box < 3){
          st.box = 3; st.longMastery = false;
          const d = new Date(); d.setDate(d.getDate()+3);
          st.nextReview = d.toISOString().slice(0,10);
          p.topics[tp.id] = st;
        }
      });
    }
  });
  p.setupDone = true; p.mode = 'placement';
  saveGrammarProgress(p);
  const wrap = document.getElementById('grammarAssessWrap');
  wrap.innerHTML = `
    <div class="card" style="text-align:center;padding:26px 20px">
      <h3 style="margin:0 0 8px">آزمون تموم شد! 🎉</h3>
      <p class="hint" style="margin-bottom:18px">مباحثی که بلد بودی تیک خوردن. نقشه راهت آماده‌ست.</p>
      <button class="primary-btn" id="finishAssessBtn" style="width:auto">مشاهده نقشه راه</button>
    </div>`;
  document.getElementById('finishAssessBtn').addEventListener('click', ()=> goToRoot('grammarHome'));
}

