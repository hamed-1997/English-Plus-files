/* ===== history-more.js: history, templates, usage-time stats (the "More" tab) ===== */
/* ---- usage time tracking ---- */
function addUsageSeconds(sec){
  const usage = LS.get('etg_usage', {});
  const key = todayISO();
  usage[key] = (usage[key] || 0) + sec;
  LS.set('etg_usage', usage);
}
setInterval(()=>{
  if(document.visibilityState === 'visible') addUsageSeconds(30);
}, 30000);
function getUsageStats(){
  const usage = LS.get('etg_usage', {});
  const today = usage[todayISO()] || 0;
  let week = 0;
  for(let i=0;i<7;i++){
    const d = new Date(); d.setDate(d.getDate()-i);
    week += usage[d.toISOString().slice(0,10)] || 0;
  }
  return { todaySec: today, weekSec: week };
}
function formatDuration(sec){
  const totalMin = Math.round(sec/60);
  if(totalMin < 60) return totalMin + ' min';
  const h = Math.floor(totalMin/60), m = totalMin % 60;
  return h + 'h' + (m ? ' ' + m + 'm' : '');
}
function renderUsageStats(){
  const { todaySec, weekSec } = getUsageStats();
  document.getElementById('usageTodayVal').textContent = formatDuration(todaySec);
  document.getElementById('usageWeekVal').textContent = formatDuration(weekSec);
  const goalSec = 30 * 60;
  const pct = Math.min(100, Math.round((todaySec/goalSec)*100));
  document.getElementById('usageFill').style.width = pct + '%';
}

/* ================= history ================= */
function renderHistory(){
  const q = (document.getElementById('historySearch').value || '').toLowerCase();
  const list = document.getElementById('historyList');
  const history = LS.get('etg_history', []);
  const items = history.filter(h => h.title.toLowerCase().includes(q) || (h.text||'').toLowerCase().includes(q));
  if(items.length===0){ list.innerHTML = `<div class="empty"><div class="big">No texts yet</div>Generated texts will show up here.</div>`; return; }
  list.innerHTML = items.map(h => `
    <div class="list-item">
      <div><h3>${escapeHtml(h.title)}</h3><div class="meta">${escapeHtml(h.settings.mode||'topic')} · ${h.sentCount} sentences · ${new Date(h.createdAt).toLocaleDateString()}</div></div>
      <div class="actions">
        <button class="star ${h.fav?'on':''}" data-fav="${h.id}">★</button>
        <button class="small-btn" data-open="${h.id}">Open</button>
        <button class="small-btn danger" data-del="${h.id}">Delete</button>
      </div>
    </div>`).join('');
  list.querySelectorAll('[data-fav]').forEach(b=>b.addEventListener('click', ()=>{
    const h2 = LS.get('etg_history', []); const h = h2.find(x=>x.id===b.dataset.fav); h.fav = !h.fav;
    LS.set('etg_history', h2); renderHistory();
  }));
  list.querySelectorAll('[data-open]').forEach(b=>b.addEventListener('click', ()=>{
    const h = LS.get('etg_history', []).find(x=>x.id===b.dataset.open);
    currentResult = h; renderOutput(h); goTo('generateResult');
  }));
  list.querySelectorAll('[data-del]').forEach(b=>b.addEventListener('click', ()=>{
    LS.set('etg_history', LS.get('etg_history', []).filter(x=>x.id!==b.dataset.del));
    renderHistory();
  }));
}
document.getElementById('historySearch').addEventListener('input', renderHistory);


/* ================= templates ================= */
function saveTemplate(settings){
  const templates = LS.get('etg_templates', []);
  const label = settings.mode==='words' ? ('Words: ' + settings.words.slice(0,3).join(', '))
    : settings.mode==='auto' ? ('Auto ' + settings.grammarLevel)
    : (settings.grammarLevel + ' · ' + settings.topic);
  templates.unshift({ id: Date.now(), name: label, settings });
  LS.set('etg_templates', templates);
  toast('Template saved');
}
function renderTemplates(){
  const templates = LS.get('etg_templates', []);
  const list = document.getElementById('templateList');
  if(templates.length===0){ list.innerHTML = `<div class="empty"><div class="big">No templates yet</div>Tick "save as template" when generating.</div>`; return; }
  list.innerHTML = templates.map(t => `
    <div class="list-item">
      <div><h3>${escapeHtml(t.name)}</h3><div class="meta">${escapeHtml(t.settings.mode||'topic')}</div></div>
      <div class="actions">
        <button class="small-btn" data-use="${t.id}">Use</button>
        <button class="small-btn danger" data-deltpl="${t.id}">Delete</button>
      </div>
    </div>`).join('');
  list.querySelectorAll('[data-use]').forEach(b=>b.addEventListener('click', ()=>{
    const tpl = LS.get('etg_templates', []).find(x=>x.id==b.dataset.use);
    const s = tpl.settings;
    if(s.mode==='words'){ applyWordsSettings(s); goTo('generateWords'); }
    else if(s.mode==='auto'){ document.getElementById('autoLevel').value = s.grammarLevel; goTo('generateAuto'); }
    else { applyTopicSettings(s); goTo('generateTopic'); }
    toast('Template loaded');
  }));
  list.querySelectorAll('[data-deltpl]').forEach(b=>b.addEventListener('click', ()=>{
    LS.set('etg_templates', LS.get('etg_templates', []).filter(x=>x.id!=b.dataset.deltpl));
    renderTemplates();
  }));
}
