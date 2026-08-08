/* ===== player.js: floating audio player ===== */
function renderPlayerPanel(){
  return `<div class="player-panel" id="playerPanel">
    <div class="player-controls">
      <button id="seekBackBtn">${icon('seekBack')}<span class="n">10</span></button>
      <button class="play-btn" id="playPauseBtn">${icon('play')}</button>
      <button id="seekFwdBtn">${icon('seekFwd')}<span class="n">10</span></button>
      <div class="speed-pill" id="speedPill">1x</div>
      <button class="player-close" id="playerCloseBtn">${icon('close')}</button>
    </div>
    <div class="p-timeline">
      <div class="t" id="pTimeElapsed">0:00</div>
      <div class="p-track" id="pTrack"><div class="fill" id="pFill"></div><div class="knob" id="pKnob"></div></div>
      <div class="t end" id="pTimeTotal">0:00</div>
    </div>
  </div>`;
}
const SPEED_STEPS = [0.5, 0.75, 1, 1.25, 1.5, 2];
function formatTime(sec){
  sec = Math.max(0, Math.round(sec));
  const m = Math.floor(sec/60), s = sec%60;
  return m + ':' + String(s).padStart(2,'0');
}
const TTSPlayer = {
  segments: [], index: 0, rate: 1, playing: false, wordsBefore: 0, segStart: 0, timerId: null, totalWords: 0,
  build(r){
    this.segments = [];
    if(r.dialogueLines && r.dialogueLines.length){
      const maleV = pickVoiceByGender('male'), femaleV = pickVoiceByGender('female');
      r.dialogueLines.forEach(d=> this.segments.push({ text:d.line, voice: d.gender==='female' ? femaleV : maleV }));
    } else {
      const voice = pickDefaultVoice();
      splitSentences(r.text).forEach(s=> this.segments.push({ text:s, voice }));
    }
    this.index = 0;
    this.totalWords = this.segments.reduce((s,seg)=> s + (seg.text.match(/\S+/g)||[]).length, 0);
    this.recomputeWordsBefore();
  },
  wps(){ return 2.3 * this.rate; },
  totalSeconds(){ return this.totalWords / this.wps(); },
  recomputeWordsBefore(){
    this.wordsBefore = this.segments.slice(0, this.index).reduce((s,seg)=> s + (seg.text.match(/\S+/g)||[]).length, 0);
  },
  elapsedSeconds(){
    const seg = this.segments[this.index];
    const segWords = seg ? (seg.text.match(/\S+/g)||[]).length : 0;
    const within = this.playing ? Math.min((Date.now()-this.segStart)/1000, segWords/this.wps()) : 0;
    return this.wordsBefore/this.wps() + within;
  },
  play(){
    if(this.segments.length===0) return;
    this.playing = true; this.speakCurrent(); this.startTimer();
  },
  speakCurrent(){
    if(this.index >= this.segments.length){ this.stop(); return; }
    const seg = this.segments[this.index];
    speechSynthesis.cancel();
    this.recomputeWordsBefore();
    this.segStart = Date.now();
    const u = new SpeechSynthesisUtterance(seg.text);
    u.lang = 'en-US'; u.rate = this.rate;
    if(seg.voice) u.voice = seg.voice;
    u.onend = ()=>{ if(this.playing){ this.index++; this.speakCurrent(); } };
    u.onboundary = (e)=> highlightWithinSegment(this.index, e.charIndex);
    highlightSegment(this.index);
    speechSynthesis.speak(u);
    updatePlayerUI();
  },
  pause(){ this.playing=false; speechSynthesis.cancel(); this.stopTimer(); updatePlayerUI(); },
  stop(){
    this.playing=false; this.index=0; this.wordsBefore=0;
    speechSynthesis.cancel(); this.stopTimer(); clearHighlight(); updatePlayerUI();
  },
  seekSeconds(amount){
    let remaining = amount, i = this.index;
    const wps = this.wps();
    if(amount > 0){
      while(remaining > 0 && i < this.segments.length - 1){
        const words = (this.segments[i].text.match(/\S+/g)||[]).length;
        remaining -= words / wps;
        i++;
      }
    } else {
      while(remaining < 0 && i > 0){
        i--;
        const words = (this.segments[i].text.match(/\S+/g)||[]).length;
        remaining += words / wps;
      }
    }
    i = Math.min(Math.max(0,i), this.segments.length-1);
    this.index = i;
    speechSynthesis.cancel();
    if(this.playing) this.speakCurrent(); else { this.recomputeWordsBefore(); highlightSegment(this.index); updatePlayerUI(); }
  },
  setRate(r){ this.rate = r; if(this.playing) this.speakCurrent(); else updatePlayerUI(); },
  startTimer(){ this.stopTimer(); this.timerId = setInterval(updatePlayerUI, 250); },
  stopTimer(){ if(this.timerId){ clearInterval(this.timerId); this.timerId = null; } }
};
function updatePlayerUI(){
  const playBtn = document.getElementById('playPauseBtn');
  const fill = document.getElementById('pFill'), knob = document.getElementById('pKnob');
  const elapsedEl = document.getElementById('pTimeElapsed'), totalEl = document.getElementById('pTimeTotal');
  if(!playBtn) return;
  playBtn.innerHTML = TTSPlayer.playing ? icon('pause') : icon('play');
  const total = TTSPlayer.totalSeconds() || 1;
  const elapsed = TTSPlayer.elapsedSeconds();
  const pct = Math.min(100, Math.max(0, (elapsed/total)*100));
  fill.style.width = pct + '%';
  knob.style.left = pct + '%';
  elapsedEl.textContent = formatTime(elapsed);
  totalEl.textContent = formatTime(total);
}
function highlightSegment(i){
  document.querySelectorAll('.hl.active').forEach(el=>el.classList.remove('active'));
  const el = document.querySelector(`.hl[data-seg="${i}"]`);
  if(el) el.classList.add('active');
}
function highlightWithinSegment(segIdx, charIndex){
  if(highlightMode!=='word') return;
  const seg = TTSPlayer.segments[segIdx];
  if(!seg) return;
  const before = seg.text.slice(0, charIndex);
  const wordIdx = (before.match(/\S+/g)||[]).length;
  document.querySelectorAll('.tap-word.active').forEach(el=>el.classList.remove('active'));
  const el = document.querySelector(`.tap-word[data-seg="${segIdx}"][data-w="${wordIdx}"]`);
  if(el) el.classList.add('active');
}
function clearHighlight(){
  document.querySelectorAll('.hl.active,.tap-word.active').forEach(el=>el.classList.remove('active'));
}
function wirePlayerControls(r){
  document.getElementById('playPauseBtn').addEventListener('click', ()=>{
    if(TTSPlayer.playing){ TTSPlayer.pause(); }
    else{ if(TTSPlayer.segments.length===0) TTSPlayer.build(r); TTSPlayer.play(); }
  });
  document.getElementById('seekBackBtn').addEventListener('click', ()=>{ if(TTSPlayer.segments.length===0) TTSPlayer.build(r); TTSPlayer.seekSeconds(-10); });
  document.getElementById('seekFwdBtn').addEventListener('click', ()=>{ if(TTSPlayer.segments.length===0) TTSPlayer.build(r); TTSPlayer.seekSeconds(10); });
  document.getElementById('speedPill').addEventListener('click', ()=>{
    const i = SPEED_STEPS.indexOf(TTSPlayer.rate);
    const next = SPEED_STEPS[(i+1) % SPEED_STEPS.length];
    TTSPlayer.setRate(next);
    document.getElementById('speedPill').textContent = next + 'x';
  });
  document.getElementById('playerCloseBtn').addEventListener('click', ()=>{
    TTSPlayer.stop();
    document.getElementById('playerPanel').classList.remove('open');
  });
  if(TTSPlayer.segments.length) updatePlayerUI();
}
