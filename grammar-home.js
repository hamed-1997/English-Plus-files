/* ===== grammar-home.js: roadmap, badges, progress, scheduling ===== */

function grammarProgress(){ return LS.get('etg_grammar_progress', { topics:{}, setupDone:false, mode:null }); }
function saveGrammarProgress(p){ LS.set('etg_grammar_progress', p); }
function topicState(p, id){ return p.topics[id] || { box:0, nextReview:null, attempts:0, correct:0, longMastery:false }; }
function topicBadge(st){
  if(!st || st.box===0) return {cls:'tb-new', label:'شروع نشده'};
  if(st.longMastery) return {cls:'tb-long', label:'تسلط پایدار'};
  if(st.box>=2) return {cls:'tb-short', label:'تسلط اولیه'};
  return {cls:'tb-learning', label:'در حال یادگیری'};
}
function scheduleGrammarTopic(p, id, correct){
  const st = topicState(p, id);
  st.attempts++;
  if(correct){
    st.correct++;
    st.box = Math.min((st.box||0)+1, 5);
    if(st.box>=4) st.longMastery = true;
  } else {
    st.box = Math.max((st.box||1)-1, 1);
    st.longMastery = false;
  }
  const days = LEITNER_INTERVALS[st.box] ?? 0;
  const d = new Date(); d.setDate(d.getDate()+days);
  st.nextReview = d.toISOString().slice(0,10);
  p.topics[id] = st;
  saveGrammarProgress(p);
}
function dueTopicsCount(p){
  const today = todayISO();
  return GRAMMAR_TOPICS.filter(tp=>{
    const st = p.topics[tp.id];
    return st && st.box>0 && st.nextReview && st.nextReview<=today;
  }).length;
}

document.getElementById('homeGrammarCtaIcon').innerHTML = icon('grammar');
document.getElementById('homeGrammarCard').addEventListener('click', ()=>goTo('grammarHome'));

function renderGrammarHome(){
  const p = grammarProgress();
  const wrap = document.getElementById('grammarHomeWrap');
  if(!p.setupDone){
    wrap.innerHTML = `
      <button class="topic-row" id="openVerbToolBtn" style="margin-bottom:18px">
        <span class="t-name">🔤 جست‌وجوی صرف افعال بی‌قاعده</span><span style="color:var(--muted)">›</span>
      </button>
      <div class="card" style="margin-bottom:14px">
        <h3 style="margin:0 0 8px">آموزش از ابتدا</h3>
        <p class="hint" style="margin-bottom:14px">نقشه راه کامل گرامر رو از پایه شروع کن، قدم‌به‌قدم، بدون آزمون.</p>
        <button class="primary-btn" id="startScratchBtn" style="width:auto">شروع از ابتدا</button>
      </div>
      <div class="card">
        <h3 style="margin:0 0 8px">آموزش بر اساس سطح</h3>
        <p class="hint" style="margin-bottom:14px">یه آزمون کوتاه (حداکثر ۲۰ سؤال) بزن؛ مباحثی که بلدی خودکار تیک می‌خورن، بقیه رو قدم‌به‌قدم یاد می‌گیری.</p>
        <button class="primary-btn" id="startPlacementBtn" style="width:auto">شروع آزمون تعیین سطح</button>
      </div>`;
    document.getElementById('openVerbToolBtn').addEventListener('click', ()=>{ goTo('grammarVerbs'); renderAllVerbsList(); });
    document.getElementById('startScratchBtn').addEventListener('click', ()=>{
      const p2 = grammarProgress(); p2.setupDone = true; p2.mode = 'scratch'; saveGrammarProgress(p2); renderGrammarHome();
    });
    document.getElementById('startPlacementBtn').addEventListener('click', ()=>startPlacementTest());
    return;
  }
  const due = dueTopicsCount(p);
  let html = `<button class="topic-row" id="openVerbToolBtn2" style="margin-bottom:16px">
      <span class="t-name">🔤 جست‌وجوی صرف افعال بی‌قاعده</span><span style="color:var(--muted)">›</span>
    </button>`;
  if(due>0) html += `<div class="warn-box" style="margin-bottom:16px">🔁 ${due} مبحث امروز برای مرور آماده‌ست</div>`;
  GRAMMAR_LEVELS.forEach(level=>{
    const topics = GRAMMAR_TOPICS.filter(tp=>tp.level===level);
    if(!topics.length) return;
    const masteredCount = topics.filter(tp=> (p.topics[tp.id]||{}).longMastery).length;
    html += `<div class="level-block"><h3>${level} · ${masteredCount}/${topics.length}</h3>`;
    html += `<div class="progress-bar-outer" style="margin-bottom:10px"><div class="progress-bar-inner" style="width:${Math.round(masteredCount/topics.length*100)}%"></div></div>`;
    topics.forEach(tp=>{
      const st = p.topics[tp.id];
      const badge = topicBadge(st);
      const isDue = st && st.box>0 && st.nextReview && st.nextReview<=todayISO();
      html += `<button class="topic-row" data-topic="${tp.id}">
        <span class="t-name">${escapeHtml(tp.titleFa)}${isDue?' 🔁':''}</span>
        <span class="topic-badge ${badge.cls}">${badge.label}</span>
      </button>`;
    });
    html += `</div>`;
  });
  html += `<button class="ghost-btn" id="retakeAssessBtn" style="width:100%;margin-top:6px">آزمون تعیین سطح رو دوباره بزن</button>`;
  wrap.innerHTML = html;
  wrap.querySelectorAll('[data-topic]').forEach(b=> b.addEventListener('click', ()=> openGrammarTopic(b.dataset.topic)));
  document.getElementById('openVerbToolBtn2').addEventListener('click', ()=>{ goTo('grammarVerbs'); renderAllVerbsList(); });
  document.getElementById('retakeAssessBtn').addEventListener('click', ()=>{
    const p2 = grammarProgress(); p2.setupDone = false; saveGrammarProgress(p2); renderGrammarHome();
  });
}

