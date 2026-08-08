/* ===== grammar-lesson.js: AI lesson generation + exercises ===== */
let currentGrammarTopic = null, exerciseIndex = 0, exerciseCorrectCount = 0;
function grammarLessonCacheKey(id){ return 'etg_grammar_lesson_' + id; }
function buildGrammarLessonPrompt(topic){
  return `تو یک مدرس حرفه‌ای گرامر زبان انگلیسی، طراح دوره آموزشی و نویسنده کتاب‌های آموزشی هستی.

هر زمان نام یک مبحث گرامر انگلیسی را به تو دادم (مانند Present Perfect، Passive Voice، Adverbs، Relative Clauses و ...)، باید یک درس‌نامه کامل، دقیق، حرفه‌ای و قابل فهم تولید کنی.

هدف فقط توضیح قانون نیست؛ هدف این است که زبان‌آموز واقعاً مبحث را بفهمد و بتواند از آن در مکالمه و نوشتار استفاده کند.

---------------------------------------
قوانین مهم
---------------------------------------
• تمام توضیحات به زبان فارسی روان و آموزشی باشد.
• مثال‌ها همیشه انگلیسی باشند.
• زیر هر مثال ترجمه طبیعی فارسی نوشته شود.
• هر مثال یک توضیح کوتاه درباره دلیل استفاده از آن گرامر داشته باشد.
• مطالب از ساده به سخت آموزش داده شوند.
• از حفظ کردن صرف قوانین خودداری کن و مفهوم را آموزش بده.
• اگر لازم بود از مثال، تشبیه یا تصویر ذهنی استفاده کن.
• درس کاملاً مستقل باشد؛ یعنی کاربر بدون نیاز به منبع دیگر آن مبحث را یاد بگیرد.

---------------------------------------
ساختار درس
---------------------------------------
# عنوان درس
- نام گرامر
- سطح CEFR
- زمان تقریبی مطالعه
---
# 🎯 هدف درس
در پایان این درس کاربر چه چیزهایی یاد می‌گیرد؟
---
# 🧠 مفهوم اصلی
مهم‌ترین بخش درس. توضیح بده: این گرامر چرا وجود دارد؟ چه مفهومی منتقل می‌کند؟ چه زمانی ذهن انگلیسی‌زبان از این گرامر استفاده می‌کند؟ اگر این گرامر نبود چه مشکلی ایجاد می‌شد؟ از مثال‌های ساده و تشبیه برای جا افتادن مفهوم استفاده کن.
---
# 📌 کاربردها
تمام کاربردهای اصلی را جداگانه توضیح بده. برای هر کاربرد: توضیح فارسی، چه زمانی استفاده می‌شود، چه زمانی استفاده نمی‌شود، حداقل ۵ مثال انگلیسی، ترجمه فارسی، توضیح کوتاه.
---
# ❌ مواردی که نباید استفاده شود
اشتباهات رایج در انتخاب این گرامر.
---
# 🏗 ساختار
فرمول مثبت، فرمول منفی، فرمول سوالی، پاسخ کوتاه، WH Questions (در صورت نیاز). تمام ساختارها داخل جدول باشند.
---
# 📍 جایگاه کلمات
جای صحیح اجزای جمله را توضیح بده. اگر تغییر جای کلمات باعث تغییر معنی می‌شود، مثال بزن.
---
# 💬 مثال‌های فراوان
حداقل ۲۰ مثال از ساده تا پیشرفته. برای هر مثال: جمله انگلیسی، ترجمه فارسی، توضیح.
---
# 📚 کلمات و عبارت‌های رایج
تمام Signal Words، کلمات کلیدی، Collocations، عبارت‌های رایج، به همراه معنی و مثال.
---
# 🔄 مقایسه با گرامرهای مشابه
جدول مقایسه، تفاوت‌ها، شباهت‌ها، زمان استفاده از هر کدام.
---
# ⚠️ اشتباهات رایج
حداقل ۱۵ اشتباه رایج. برای هر مورد: ❌ جمله اشتباه، ✅ جمله صحیح، دلیل اشتباه، روش جلوگیری از تکرار آن.
---
# 💡 نکات مهم
استثناها، افعال یا ساختارهای خاص، تفاوت انگلیسی آمریکایی و بریتانیایی، نکات رسمی و غیررسمی، نکات امتحانی.
---
# 🗣 کاربرد در مکالمه واقعی
چند مکالمه طبیعی طراحی کن (دوستان، محل کار، خرید، سفر، رستوران، مصاحبه، تماس تلفنی، روزمره). تمام مکالمه‌ها همراه ترجمه فارسی باشند.
---
# 🎬 زبان واقعی انگلیسی
توضیح بده افراد بومی چگونه از این گرامر استفاده می‌کنند. اگر در گفتار از شکل کوتاه‌تر یا طبیعی‌تر استفاده می‌کنند توضیح بده.
---
# 📝 خلاصه درس
تمام نکات مهم را در یک صفحه خلاصه کن.
---
# 🗺 نقشه ذهنی
یک Mind Map متنی طراحی کن.
---
# 🧠 روش حفظ کردن
یک تکنیک یا تصویر ذهنی برای ماندگاری مطلب ارائه بده.
---
# 🏋️ تمرین مرحله‌ای
۱. تشخیص ۲. چند گزینه‌ای ۳. جای خالی ۴. مرتب کردن کلمات ۵. اصلاح اشتباه ۶. ترجمه ۷. جمله‌سازی ۸. نوشتن متن کوتاه ۹. مکالمه ۱۰. سوالات چالشی
---
# ✅ آزمون نهایی
۲۰ سوال ترکیبی طراحی کن. در انتها: پاسخ صحیح، توضیح پاسخ، نمره‌دهی.
---
# 📖 واژگان مهم درس
کلمات جدید، تلفظ، معنی، مثال.
---
# 🚀 برگه مرور سریع
در پایان یک Cheat Sheet بساز که شامل کاربرد، ساختار، کلمات کلیدی، اشتباهات رایج، ترفند حفظ کردن باشد.

---------------------------------------
قوانین نگارشی
---------------------------------------
- متن کاملاً Markdown باشد.
- از جدول استفاده کن.
- از تیترهای واضح استفاده کن.
- درس طولانی اما خسته‌کننده نباشد.
- هر بخش مثال کافی داشته باشد.
- هیچ قسمت مهمی حذف نشود.
- تمام مثال‌های انگلیسی ترجمه فارسی داشته باشند.
- هدف، آموزش عمیق و قابل فهم است، نه فقط معرفی قوانین.

مبحث گرامری که باید طبق این دستور برایش درس‌نامه کامل بسازی: «${topic.titleFa}» (سطح ${topic.level}).
فقط خودِ درس‌نامه‌ی مارک‌داون را برگردان، بدون هیچ توضیح اضافه یا مقدمه‌ی خارج از ساختار خواسته‌شده.`;
}
function openGrammarTopic(id){
  currentGrammarTopic = GRAMMAR_TOPICS.find(t=>t.id===id);
  exerciseIndex = 0; exerciseCorrectCount = 0;
  document.getElementById('grammarTopicHeading').textContent = currentGrammarTopic.titleFa;
  goTo('grammarTopic');
  renderGrammarTopicIntro();
}
async function renderGrammarTopicIntro(){
  const tp = currentGrammarTopic;
  const wrap = document.getElementById('grammarTopicWrap');
  const cacheKey = grammarLessonCacheKey(tp.id);
  const cached = localStorage.getItem(cacheKey);
  if(cached){ renderLessonContent(cached); return; }
  wrap.innerHTML = `
    <div class="loading-row" style="justify-content:center;padding:40px 0;text-align:center">
      <div class="spin"></div>
      <span>در حال ساختن درس کامل این مبحث توسط هوش مصنوعی… ممکنه کمی طول بکشه</span>
    </div>`;
  try{
    const md = await callAIText(buildGrammarLessonPrompt(tp));
    localStorage.setItem(cacheKey, md);
    renderLessonContent(md);
  }catch(e){
    wrap.innerHTML = `
      <div class="warn-box" style="margin-bottom:14px">تولید درس با مشکل مواجه شد: ${escapeHtml(e.message || 'خطای نامشخص')}</div>
      <button class="primary-btn" id="retryLessonBtn">تلاش دوباره</button>`;
    document.getElementById('retryLessonBtn').addEventListener('click', renderGrammarTopicIntro);
  }
}
function renderLessonContent(md){
  const tp = currentGrammarTopic;
  const wrap = document.getElementById('grammarTopicWrap');
  const html = (typeof marked !== 'undefined') ? marked.parse(md) : `<pre style="white-space:pre-wrap">${escapeHtml(md)}</pre>`;
  wrap.innerHTML = `
    <div class="lesson-content">${html}</div>
    <div class="row" style="margin-top:18px">
      <button class="ghost-btn" id="regenLessonBtn">بازتولید درس</button>
      <button class="primary-btn" style="width:auto" id="startExercisesBtn">شروع تمرین (${tp.exercises.length} سؤال)</button>
    </div>`;
  document.getElementById('startExercisesBtn').addEventListener('click', ()=>{ exerciseIndex=0; exerciseCorrectCount=0; renderGrammarExercise(); });
  document.getElementById('regenLessonBtn').addEventListener('click', ()=>{
    localStorage.removeItem(grammarLessonCacheKey(tp.id));
    renderGrammarTopicIntro();
  });
}
function renderGrammarExercise(){
  const tp = currentGrammarTopic;
  const wrap = document.getElementById('grammarTopicWrap');
  if(exerciseIndex >= tp.exercises.length){
    const p = grammarProgress();
    const correct = exerciseCorrectCount >= Math.ceil(tp.exercises.length*0.6);
    scheduleGrammarTopic(p, tp.id, correct);
    wrap.innerHTML = `
      <div class="card" style="text-align:center;padding:26px 20px">
        <h3 style="margin:0 0 8px">${exerciseCorrectCount} از ${tp.exercises.length} درست 👏</h3>
        <p class="hint" style="margin-bottom:18px">${correct? 'وضعیت این مبحث به‌روزرسانی شد و برای مرور بعدی زمان‌بندی شد.' : 'این مبحث زودتر برای مرور دوباره میاد جلو.'}</p>
        <button class="primary-btn" id="backToGrammarHomeBtn" style="width:auto">بازگشت به نقشه راه</button>
      </div>`;
    document.getElementById('backToGrammarHomeBtn').addEventListener('click', ()=> goToRoot('grammarHome'));
    return;
  }
  const ex = tp.exercises[exerciseIndex];
  wrap.innerHTML = `
    <div class="hint" style="margin-bottom:10px">${exerciseIndex+1} / ${tp.exercises.length}</div>
    <div class="card">
      <p style="font-size:15.5px;font-weight:600;margin:0 0 14px">${escapeHtml(ex.q)}</p>
      <div id="exOptions"></div>
    </div>`;
  const opts = document.getElementById('exOptions');
  ex.options.forEach((opt,i)=>{
    const b = document.createElement('button');
    b.className = 'quiz-option'; b.textContent = opt;
    b.addEventListener('click', ()=>{
      document.querySelectorAll('#exOptions .quiz-option').forEach(x=>x.disabled=true);
      const correct = i===ex.answer;
      b.classList.add(correct?'correct':'wrong');
      if(!correct){ opts.children[ex.answer].classList.add('correct'); }
      if(correct) exerciseCorrectCount++;
      setTimeout(()=>{ exerciseIndex++; renderGrammarExercise(); }, 700);
    });
    opts.appendChild(b);
  });
}
