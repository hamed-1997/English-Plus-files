/* ===== generate-forms.js: the 3 generation modes (topic / words / auto) ===== */
/* ================= MODE 1: topic form ================= */
document.querySelectorAll('#topicChips .chip').forEach(chip=>{
  chip.addEventListener('click', ()=>{
    document.querySelectorAll('#topicChips .chip').forEach(c=>c.classList.remove('on'));
    chip.classList.add('on');
    document.getElementById('topicInput').value = chip.dataset.topic;
  });
});
document.getElementById('topicInput').addEventListener('input', ()=>{
  document.querySelectorAll('#topicChips .chip').forEach(c=>c.classList.remove('on'));
});
function readTopicSettings(){
  return {
    mode:'topic',
    grammarLevel: document.getElementById('grammarLevel').value,
    vocabUsage: document.getElementById('vocabUsage').value,
    textLength: document.getElementById('textLength').value,
    textType: document.getElementById('textType').value,
    grammarFocus: document.getElementById('grammarFocus').value,
    difficulty: document.getElementById('difficulty').value,
    topic: document.getElementById('topicInput').value.trim() || 'Random'
  };
}
function applyTopicSettings(s){
  document.getElementById('grammarLevel').value = s.grammarLevel || 'B1';
  document.getElementById('vocabUsage').value = s.vocabUsage || (s.strictness==='relaxed' ? 'high' : s.strictness==='balanced' ? 'medium' : 'low');
  document.getElementById('textLength').value = s.textLength || 'medium';
  document.getElementById('textType').value = s.textType;
  document.getElementById('grammarFocus').value = s.grammarFocus;
  document.getElementById('difficulty').value = s.difficulty;
  document.getElementById('topicInput').value = s.topic;
}
const TEXT_LENGTH_TEXT = {
  short: 'Short text: roughly 5 to 8 sentences total.',
  medium: 'Medium-length text: roughly 10 to 15 sentences total.',
  long: 'Long text: roughly 20 to 30 sentences total.',
  xlong: 'Very long text: roughly 35 to 50 sentences total.'
};
const vocabUsageText = {
  low: 'Use almost entirely simple, common words the learner already knows at this level. Introduce very few, if any, new or unfamiliar words.',
  medium: 'Use mostly familiar words for this level, but naturally include a moderate number of new or slightly more advanced words to expand vocabulary.',
  high: 'Deliberately introduce a good number of new, richer, or more advanced words beyond the base level, while keeping the text understandable overall.'
};
function buildTopicPrompt(s){
  return `You are a CEFR-aligned English text generator for language learners. Generate ONE learning text that strictly follows these constraints:

- Overall level (CEFR): ${s.grammarLevel} — ${CEFR_DESCRIPTORS[s.grammarLevel] || ''}
- New vocabulary usage: ${vocabUsageText[s.vocabUsage] || vocabUsageText.medium}
- Text length: ${TEXT_LENGTH_TEXT[s.textLength] || TEXT_LENGTH_TEXT.medium}
- Topic: ${s.topic}
- Text type: ${s.textType}
- Grammar focus: ${s.grammarFocus}
- Difficulty: ${s.difficulty}
${s.textType === 'Conversation' ? '- This is a two-person conversation. Also provide a "dialogueLines" array: each item is {"speaker":"name","gender":"male" or "female","line":"the dialogue text only, no speaker name inside it"}, covering the whole conversation in order.' : ''}

Rules:
- Grammar structures must match the ${s.grammarLevel} level and emphasize ${s.grammarFocus}.
- Do not include a header like "Title:" inside the text body.
- Output must be natural and coherent, not a disjointed list of sentences.

Respond with ONLY valid JSON (no markdown fences, no commentary) in exactly this shape:
{
  "title": "short title for the text",
  "text": "the full generated text",
  "estimatedCEFR": "your honest estimate of the resulting CEFR level, e.g. B1",
  "vocabNote": "one short sentence describing the vocabulary distribution",
  "dialogueLines": []
}`;
}
const CEFR_DESCRIPTORS = {
  A1: 'Beginner: only present simple and very basic verb "to be", simple connectors (and, but), everyday vocabulary of roughly 500-700 of the most common words, short simple sentences (usually under 8 words).',
  A2: 'Elementary: simple past and present tenses, basic future with "going to", common vocabulary of roughly 1000-1500 words, short sentences with basic conjunctions (because, so, when).',
  B1: 'Intermediate: present perfect, past continuous, first conditional, common modal verbs, vocabulary of roughly 2000-3000 words, moderately complex sentences with subordinate clauses.',
  B2: 'Upper-intermediate: passive voice, second and third conditionals, reported speech, a wider range of connectors, vocabulary of roughly 4000-5000 words, longer and more complex sentences.',
  C1: 'Advanced: complex grammar including inversion and advanced conditionals, nuanced vocabulary of roughly 8000+ words, sophisticated sentence structures with multiple clauses.',
  C2: 'Mastery: near-native complexity, idiomatic expressions, subtle grammar distinctions, very wide vocabulary, long and intricate sentences.'
};
function buildVerifyPrompt(text, targetLevel){
  return `You are a strict CEFR level checker for English learner texts.

Target overall level: ${targetLevel} — ${CEFR_DESCRIPTORS[targetLevel] || ''}

TEXT:
"""${text}"""

Check whether the grammar complexity and vocabulary genuinely match the target level description above — not just the label, but the actual grammar structures and word difficulty. If they match well, return the text unchanged. If not (too easy or too hard for this level), rewrite it so it precisely matches the target level's grammar and vocabulary range, while preserving meaning, topic, and approximate length.

Respond with ONLY valid JSON (no markdown fences) in exactly this shape:
{"matched": true or false, "verifiedCEFR": "your honest estimate", "text": "the final text", "note": "one short sentence"}`;
}

document.getElementById('generateTopicBtn').addEventListener('click', ()=>{
  const s = readTopicSettings();
  if(document.getElementById('saveTplTopic').checked) saveTemplate(s);
  runFullGeneration(s, 'loadingRowTopic', 'generateTopicBtn');
});

async function generateFromSettings(s, onProgress){
  if(onProgress) onProgress('Generating your text…');
  if(s.mode === 'words'){
    const result = await callAI(buildWordsPrompt(s));
    return { result, finalText: result.text || '', verifiedCEFR: '', everMatched: false };
  }
  const result = await callAI(buildTopicPrompt(s));
  let finalText = result.text || '';
  let verifiedCEFR = result.estimatedCEFR || '';
  let everMatched = false;
  if(onProgress) onProgress('Checking the actual level…');
  try{
    const verify = await callAI(buildVerifyPrompt(finalText, s.grammarLevel));
    if(verify && verify.text){ finalText = verify.text; verifiedCEFR = verify.verifiedCEFR || verifiedCEFR; }
    if(verify && verify.matched) everMatched = true;
  }catch(e){ /* verification is best-effort */ }
  return { result, finalText, verifiedCEFR, everMatched };
}

async function runFullGeneration(s, loadingId, btnId){
  if(typeof TTSPlayer !== 'undefined') TTSPlayer.stop();
  const btn = document.getElementById(btnId);
  btn.disabled = true;
  const row = document.getElementById(loadingId);
  row.style.display = 'flex';
  try{
    const { result, finalText, verifiedCEFR, everMatched } = await generateFromSettings(s, (msg)=>{ row.querySelector('.ll').textContent = msg; });
    finalizeResult(result, finalText, verifiedCEFR, s, everMatched);
  }catch(err){
    toast(err.message);
  }finally{
    btn.disabled = false;
    row.style.display = 'none';
  }
}
function buildKeyVocabPrompt(text, level, explicitWords){
  if(explicitWords && explicitWords.length){
    return `Give dictionary information for each of these English words or short phrases, in this exact order: ${explicitWords.join(', ')}.

Respond with ONLY valid JSON (no markdown fences) in exactly this shape:
{
  "keyVocabulary": [
    {"word":"...", "meaningEn":"short English definition", "meaningFa":"Persian translation (فارسی)", "example":"one example sentence", "ipa":"IPA transcription", "phoneticFa":"simplified Persian-readable pronunciation", "cefr":"CEFR level of this word"}
  ]
}`;
  }
  const known = LS.get('etg_vocab', []).map(v=>v.word);
  return `From the following text, find EVERY word or short phrase that a learner at the ${level} level is genuinely likely to NOT already know — not just a few "important" words, but a thorough list of the harder, less common, or topic-specific words in the text. Skip only the most basic, everyday words. Aim for a complete list rather than a short curated sample (this can be anywhere from a handful to 20+ words depending on the text).
${known.length ? 'Do NOT include any of these words the learner has already saved, even if they appear in the text: ' + known.join(', ') + '.' : ''}

TEXT:
"""${text}"""

Respond with ONLY valid JSON (no markdown fences) in exactly this shape:
{
  "keyVocabulary": [
    {"word":"...", "meaningEn":"short English definition", "meaningFa":"Persian translation (فارسی)", "example":"one example sentence", "ipa":"IPA transcription", "phoneticFa":"simplified Persian-readable pronunciation", "cefr":"CEFR level of this word"}
  ]
}`;
}
function finalizeResult(result, finalText, verifiedCEFR, s, everMatched){
  const dialogueLines = result.dialogueLines || [];
  let displayText = finalText;
  if(dialogueLines.length){ displayText = dialogueLines.map(d=>`${d.speaker}: ${d.line}`).join('\n'); }
  const localCEFR = estimateLocalCEFR(finalText);
  const wordCount = countWords(finalText);
  const sentCount = countSentences(finalText);
  const readMin = Math.max(1, Math.round(wordCount / 130));
  const targetLevel = s.grammarLevel;
  const bigLocalGap = targetLevel ? Math.abs(cefrIndex(localCEFR) - cefrIndex(targetLevel)) >= 2 : false;
  const mismatch = targetLevel ? (!everMatched && bigLocalGap) : false;
  currentResult = {
    id: 't_' + Date.now(),
    title: result.title || 'Untitled',
    text: finalText, displayText,
    dialogueLines,
    estimatedCEFR: verifiedCEFR, localCEFR, mismatch,
    vocabNote: result.vocabNote || '',
    keyVocabulary: null,
    wordCount, sentCount, readMin,
    settings: s, fav: false, translations: null, exercises: null,
    createdAt: new Date().toISOString()
  };
  const history = LS.get('etg_history', []);
  history.unshift(currentResult);
  LS.set('etg_history', history);
  renderOutput(currentResult);
  goTo('generateResult');
}

/* ================= MODE 2: words form ================= */
let wordChips = [];
function renderWordChipBox(){
  const box = document.getElementById('wordChipBox');
  box.innerHTML = `<textarea id="wordFreeText" style="width:100%;min-height:70px;border:none;background:none;outline:none;font-size:13.5px" placeholder="apple, run, beautiful, ...">${escapeHtml(wordChips.join(', '))}</textarea>`;
}
function collectWords(){
  const raw = document.getElementById('wordFreeText').value;
  return raw.split(/[,\n]+/).map(w=>w.trim()).filter(Boolean);
}
renderWordChipBox();

function readWordsSettings(){
  return {
    mode:'words', words: collectWords(),
    sentenceCount: document.getElementById('wordsSentenceRange').value,
    sentenceLength: document.getElementById('wordsSentenceLength').value,
    textType: document.getElementById('wordsTextType').value,
    difficulty: document.getElementById('wordsDifficulty').value
  };
}
function applyWordsSettings(s){
  wordChips = s.words || [];
  renderWordChipBox();
  document.getElementById('wordsSentenceRange').value = s.sentenceCount;
  document.getElementById('wordsSentenceLength').value = s.sentenceLength || 'default';
  document.getElementById('wordsTextType').value = s.textType;
  document.getElementById('wordsDifficulty').value = s.difficulty;
}
function buildWordsPrompt(s){
  return `You are an English text generator for language learners. Write ONE natural, coherent English text of the requested type that naturally incorporates ALL of the following words or short phrases, used correctly and NOT simplified or replaced with easier synonyms:

Words to include: ${s.words.join(', ')}

- Sentence count: exactly ${s.sentenceCount} sentences
${s.sentenceLength && s.sentenceLength!=='default' ? '- Sentence length: ' + sentenceLengthText[s.sentenceLength] : ''}
- Text type: ${s.textType}
- Difficulty: ${s.difficulty}
${s.textType === 'Conversation' ? '- This is a two-person conversation. Also provide a "dialogueLines" array: each item is {"speaker":"name","gender":"male" or "female","line":"dialogue text only"}.' : ''}

Rules:
- Every given word/phrase must appear in the text, used naturally and correctly.
- Do not include a header like "Title:" inside the text body.

Respond with ONLY valid JSON (no markdown fences) in exactly this shape:
{
  "title": "short title",
  "text": "the full generated text",
  "dialogueLines": []
}`;
}
document.getElementById('generateWordsBtn').addEventListener('click', ()=>{
  const s = readWordsSettings();
  if(!s.words.length){ toast('حداقل یک کلمه وارد کن'); return; }
  if(document.getElementById('saveTplWords').checked) saveTemplate(s);
  runFullGeneration(s, 'loadingRowWords', 'generateWordsBtn');
});

/* ================= MODE 3: auto form ================= */
function randomPick(arr){ return arr[Math.floor(Math.random()*arr.length)]; }
const RANDOM_TOPICS = ['Daily Life','Travel','Business','Health','Technology','Education','Shopping','Food','Sports','Work','Relationships'];
const RANDOM_TYPES = ['Story','Conversation','Article','News','Diary','Interview','Biography','Email','Essay'];
const RANDOM_FOCUS = ['Mixed Grammar','Present Simple','Past Simple','Present Perfect','Future','Passive Voice','Conditionals','Modal Verbs'];
function buildAutoSettings(level){
  return {
    mode:'auto', grammarLevel: level,
    vocabUsage: randomPick(['low','medium','high']),
    textLength: randomPick(['short','medium','long']),
    textType: randomPick(RANDOM_TYPES), grammarFocus: randomPick(RANDOM_FOCUS),
    difficulty:'Standard', topic: randomPick(RANDOM_TOPICS)
  };
}
document.getElementById('generateAutoBtn').addEventListener('click', ()=>{
  const level = document.getElementById('autoLevel').value;
  const s = buildAutoSettings(level);
  if(document.getElementById('saveTplAuto').checked) saveTemplate({mode:'auto', grammarLevel: level});
  runFullGeneration(s, 'loadingRowAuto', 'generateAutoBtn');
});
