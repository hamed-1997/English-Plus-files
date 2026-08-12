/* ===== grammar-home.js: home grid, level groups, tenses, studied, search, continue-learning ===== */
document.getElementById('homeGrammarCard').addEventListener('click', ()=> goTo('grammarHome'));
document.getElementById('homeGrammarCtaIcon').innerHTML = icon('grammar');

function statusLabel(status){
  if(status === GRAMMAR_STATUS.COMPLETED) return t('grammar_status_completed');
  if(status === GRAMMAR_STATUS.LEARNING) return t('grammar_status_learning');
  return t('grammar_status_not_started');
}
function topicTitle(tp){
  const lang = localStorage.getItem('etg_lang') || 'en';
  return (lang === 'fa' ? tp.titleFa : tp.titleEn) || tp.titleFa || tp.titleEn;
}
function statusBadgeClass(status){
  if(status === GRAMMAR_STATUS.COMPLETED) return 'tb-completed';
  if(status === GRAMMAR_STATUS.LEARNING) return 'tb-learning';
  return 'tb-new';
}

/* ---- home grid ---- */
const GRAMMAR_HOME_CARDS = [
  { key:'a', icon:'grammarDoc', tint:'a', titleKey:'grammar_card_a_title', subKey:'grammar_card_a_sub', action:()=>openLevelGroup('A') },
  { key:'b', icon:'grammarDoc', tint:'a', titleKey:'grammar_card_b_title', subKey:'grammar_card_b_sub', action:()=>openLevelGroup('B') },
  { key:'c', icon:'grammarDoc', tint:'a', titleKey:'grammar_card_c_title', subKey:'grammar_card_c_sub', action:()=>openLevelGroup('C') },
  { key:'tenses', icon:'clock', tint:'b', titleKey:'grammar_card_tenses_title', subKey:'grammar_card_tenses_sub', action:()=>goTo('grammarTenses') },
  { key:'test', icon:'testShield', tint:'b', titleKey:'grammar_card_test_title', subKey:'grammar_card_test_sub', action:()=>goTo('grammarAssess') },
  { key:'studied', icon:'bookCheck', tint:'a', titleKey:'grammar_card_studied_title', subKey:'grammar_card_studied_sub', action:()=>goTo('grammarStudied') },
  { key:'verbs', icon:'sortAZ', tint:'b', titleKey:'grammar_card_verbs_title', subKey:'grammar_card_verbs_sub', action:()=>openVerbsModal() },
  { key:'search', icon:'search', tint:'a', titleKey:'grammar_card_search_title', subKey:'grammar_card_search_sub', action:()=>goTo('grammarSearch') }
];
function renderGrammarHome(){
  const wrap = document.getElementById('grammarHomeWrap');
  wrap.innerHTML = `
    <div class="g-grid">
      ${GRAMMAR_HOME_CARDS.map(c=>`
        <button class="g-card tint-${c.tint}" data-gcard="${c.key}">
          <div class="icon-badge">${icon(c.icon)}</div>
          <div><h3>${escapeHtml(t(c.titleKey))}</h3><p>${escapeHtml(t(c.subKey))}</p></div>
        </button>`).join('')}
    </div>
    <div class="section-label">${escapeHtml(t('grammar_continue_label'))}</div>
    <div id="grammarContinueWrap"></div>
  `;
  GRAMMAR_HOME_CARDS.forEach(c=>{
    wrap.querySelector(`[data-gcard="${c.key}"]`).addEventListener('click', c.action);
  });
  renderContinueLearning();
}
function renderContinueLearning(){
  const wrap = document.getElementById('grammarContinueWrap');
  const cont = getContinueLearning();
  const tp = cont && GRAMMAR_TOPICS.find(x=>x.id===cont.topicId);
  if(!tp){
    wrap.innerHTML = `<div class="card empty"><div class="big">${escapeHtml(t('grammar_continue_empty_title'))}</div>${escapeHtml(t('grammar_continue_empty_sub'))}</div>`;
    return;
  }
  const status = getGrammarStatus(tp.id);
  const pct = status === GRAMMAR_STATUS.COMPLETED ? 100 : status === GRAMMAR_STATUS.LEARNING ? 55 : 8;
  wrap.innerHTML = `
    <div class="continue-card" id="continueCard">
      <div class="continue-avatar">${icon('grammarDoc')}</div>
      <div class="continue-body">
        <h3>${escapeHtml(topicTitle(tp))}</h3>
        <div class="meta">${escapeHtml(tp.level)} · ${escapeHtml(statusLabel(status))}</div>
        <div class="continue-progress"><div class="continue-progress-fill" style="width:${pct}%"></div></div>
      </div>
      <button class="continue-pill">${escapeHtml(t('grammar_continue_btn'))} ←</button>
    </div>`;
  document.getElementById('continueCard').addEventListener('click', ()=> openGrammarTopic(tp.id));
}

/* ---- level group (A / B / C) ---- */
let currentGrammarGroup = 'A';
function openLevelGroup(group){
  currentGrammarGroup = group;
  goTo('grammarLevelGroup');
}
function renderGrammarLevelGroup(){
  const group = currentGrammarGroup;
  document.getElementById('grammarLevelGroupHeading').textContent = t('grammar_card_' + group.toLowerCase() + '_title');
  const wrap = document.getElementById('grammarLevelGroupWrap');
  const topics = topicsInGroup(group);
  wrap.innerHTML = topics.map(tp=>{
    const status = getGrammarStatus(tp.id);
    return `<div class="topic-row" data-topicrow="${tp.id}">
      <div><div class="tr-title">${escapeHtml(topicTitle(tp))}</div><div class="tr-level">${escapeHtml(tp.level)}</div></div>
      <span class="topic-badge ${statusBadgeClass(status)}">${status===GRAMMAR_STATUS.COMPLETED ? icon('check') : escapeHtml(statusLabel(status))}</span>
    </div>`;
  }).join('');
  wrap.querySelectorAll('[data-topicrow]').forEach(el=>{
    el.addEventListener('click', ()=> openGrammarTopic(el.dataset.topicrow));
  });
}

/* ---- tenses ---- */
function renderGrammarTenses(){
  const wrap = document.getElementById('grammarTensesWrap');
  const active = tenseTopics();
  const passive = passiveTopics();
  const rowsHtml = (list) => list.map(tp=>{
    const status = getGrammarStatus(tp.id);
    return `<div class="topic-row" data-topicrow="${tp.id}">
      <div><div class="tr-title">${escapeHtml(topicTitle(tp))}</div><div class="tr-level">${escapeHtml(tp.level)}</div></div>
      <span class="topic-badge ${statusBadgeClass(status)}">${status===GRAMMAR_STATUS.COMPLETED ? icon('check') : escapeHtml(statusLabel(status))}</span>
    </div>`;
  }).join('');
  wrap.innerHTML = `
    <div class="section-label">${escapeHtml(t('grammar_tenses_timeline'))}</div>
    <div class="timeline-wrap">
      <div class="timeline-line"></div>
      <div class="timeline-items">
        ${active.map(tp=>`<div class="timeline-item" data-topicrow="${tp.id}"><div class="timeline-dot"></div><div class="tt-name">${escapeHtml(topicTitle(tp))}</div></div>`).join('')}
      </div>
    </div>
    <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--muted);margin:2px 4px 20px">
      <span>${escapeHtml(t('grammar_tenses_past'))}</span><span>${escapeHtml(t('grammar_tenses_now'))}</span><span>${escapeHtml(t('grammar_tenses_future'))}</span>
    </div>

    <div class="section-label">${escapeHtml(t('grammar_tenses_active'))}</div>
    <div class="tense-list">${rowsHtml(active)}</div>

    <div class="section-label">${escapeHtml(t('grammar_tenses_passive'))}</div>
    <div class="tense-list">${rowsHtml(passive)}</div>

    <div class="section-label">${escapeHtml(t('grammar_tenses_compare'))}</div>
    <div id="compareWrap"></div>
  `;
  wrap.querySelectorAll('[data-topicrow]').forEach(el=>{
    el.addEventListener('click', ()=> openGrammarTopic(el.dataset.topicrow));
  });
  const compareWrap = document.getElementById('compareWrap');
  compareWrap.innerHTML = TENSE_COMPARE_PAIRS.map(([id1,id2])=>{
    const t1 = GRAMMAR_TOPICS.find(x=>x.id===id1), t2 = GRAMMAR_TOPICS.find(x=>x.id===id2);
    if(!t1 || !t2) return '';
    return `<div class="compare-block" data-compare1="${id1}" data-compare2="${id2}">
      <div style="font-weight:700;font-size:13.5px">${escapeHtml(topicTitle(t1))}</div>
      <div class="compare-vs">vs</div>
      <div style="font-weight:700;font-size:13.5px">${escapeHtml(topicTitle(t2))}</div>
    </div>`;
  }).join('');
  compareWrap.querySelectorAll('[data-compare1]').forEach(el=>{
    el.addEventListener('click', ()=> openGrammarTopic(el.dataset.compare1));
  });
}

/* ---- studied grammar ---- */
function renderGrammarStudied(){
  const wrap = document.getElementById('grammarStudiedWrap');
  const map = getGrammarStatusMap();
  const doneIds = Object.keys(map).filter(id => map[id] === GRAMMAR_STATUS.COMPLETED);
  const topics = doneIds.map(id => GRAMMAR_TOPICS.find(x=>x.id===id)).filter(Boolean);
  if(!topics.length){
    wrap.innerHTML = `<div class="empty"><div class="big">${escapeHtml(t('grammar_studied_title'))}</div>${escapeHtml(t('grammar_studied_empty'))}</div>`;
    return;
  }
  wrap.innerHTML = topics.map(tp=>`
    <div class="topic-row" data-topicrow="${tp.id}">
      <div><div class="tr-title">${escapeHtml(topicTitle(tp))}</div><div class="tr-level">${escapeHtml(tp.level)}</div></div>
      <span class="topic-badge tb-completed">${icon('check')}</span>
    </div>`).join('');
  wrap.querySelectorAll('[data-topicrow]').forEach(el=>{
    el.addEventListener('click', ()=> openGrammarTopic(el.dataset.topicrow));
  });
}

/* ---- search grammar ---- */
function renderGrammarSearch(){
  document.getElementById('grammarSearchInput').value = '';
  document.getElementById('grammarSearchResults').innerHTML = '';
}
document.getElementById('grammarSearchInput').addEventListener('input', (e)=>{
  const q = e.target.value.trim().toLowerCase();
  const results = document.getElementById('grammarSearchResults');
  if(!q){ results.innerHTML = ''; return; }
  const matches = GRAMMAR_TOPICS.filter(tp =>
    (tp.titleFa||'').toLowerCase().includes(q) || (tp.titleEn||'').toLowerCase().includes(q)
  );
  if(!matches.length){ results.innerHTML = `<div class="empty"><div class="big">${escapeHtml(t('grammar_search_empty'))}</div></div>`; return; }
  results.innerHTML = matches.map(tp=>{
    const status = getGrammarStatus(tp.id);
    return `<div class="topic-row" data-topicrow="${tp.id}">
      <div><div class="tr-title">${escapeHtml(topicTitle(tp))}</div><div class="tr-level">${escapeHtml(tp.level)}</div></div>
      <span class="topic-badge ${statusBadgeClass(status)}">${status===GRAMMAR_STATUS.COMPLETED ? icon('check') : escapeHtml(statusLabel(status))}</span>
    </div>`;
  }).join('');
  results.querySelectorAll('[data-topicrow]').forEach(el=>{
    el.addEventListener('click', ()=> openGrammarTopic(el.dataset.topicrow));
  });
});

/* ---- irregular verbs modal ---- */
function openVerbsModal(){
  document.getElementById('verbsModal').classList.add('open');
  document.getElementById('verbSearchInput').value = '';
  document.getElementById('verbSearchResult').innerHTML = '';
  renderAllVerbsList();
}
document.getElementById('closeVerbsModal').addEventListener('click', ()=>{
  document.getElementById('verbsModal').classList.remove('open');
});
