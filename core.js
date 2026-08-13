/**
 * Core Language Learning Engine (V2 - Full Production Refactor)
 * Includes: Router, Settings Modal, Puter Neural TTS, Streaming AI, 
 * CEFR Analytics, i18n System, Theme & Font Management.
 */

// ==========================================
// ۱. مدیریت وضعیت و تنظیمات (State & Settings)
// ==========================================
const AppState = {
    lang: localStorage.getItem('app_lang') || 'fa',
    theme: localStorage.getItem('app_theme') || 'dark',
    fontSize: localStorage.getItem('app_font_size') || 'medium', // small, medium, large
    aiProvider: localStorage.getItem('ai_provider') || 'puter', // 'puter' | 'gemini'
    geminiApiKey: localStorage.getItem('gemini_api_key') || '',
    geminiModel: localStorage.getItem('gemini_model') || 'gemini-1.5-flash',
    currentAudio: null,
    isGenerating: false,
    navStack: ['home']
};

// ==========================================
// ۲. دیکشنری دو زبانه (i18n System)
// ==========================================
const I18N = {
    fa: {
        dir: 'rtl',
        appName: 'اپلیکیشن آموزش زبان',
        settingsTitle: 'تنظیمات برنامه',
        aiProviderLabel: 'سرویس هوش مصنوعی:',
        themeLabel: 'تم ظاهری:',
        fontSizeLabel: 'اندازه فونت:',
        apiKeyLabel: 'کلید API جمنی:',
        saveBtn: 'ذخیره تنظیمات',
        resetBtn: 'بازنشانی کامل داده‌ها',
        loadingText: 'در حال نوشتن کلمه‌به‌کلمه...',
        speakingText: 'در حال خواندن متن...',
        errorAI: 'خطا در برقراری ارتباط با هوش مصنوعی.'
    },
    en: {
        dir: 'ltr',
        appName: 'Language Learning App',
        settingsTitle: 'Settings',
        aiProviderLabel: 'AI Provider:',
        themeLabel: 'Theme:',
        fontSizeLabel: 'Font Size:',
        apiKeyLabel: 'Gemini API Key:',
        saveBtn: 'Save Settings',
        resetBtn: 'Reset All Data',
        loadingText: 'Generating word by word...',
        speakingText: 'Playing natural audio...',
        errorAI: 'Error connecting to AI service.'
    }
};

// ==========================================
// ۳. ابزارهای تحلیل متن و تخمین سطح (CEFR Helpers)
// ==========================================
const TextAnalytics = {
    countSyllables(word) {
        word = word.toLowerCase();
        if (word.length <= 3) return 1;
        word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
        word = word.replace(/^y/, '');
        const matches = word.match(/[aeiouy]{1,2}/g);
        return matches ? matches.length : 1;
    },

    calculateCEFR(text) {
        if (!text || text.trim().length === 0) return 'A1';

        const words = text.trim().split(/\s+/);
        const sentences = text.split(/[.!?]+/).filter(Boolean);

        const totalWords = words.length;
        const totalSentences = sentences.length || 1;
        let totalSyllables = 0;

        words.forEach(w => totalSyllables += this.countSyllables(w));

        // فرمول تخمینی Flesch-Kincaid Grade Level
        const fkgl = 0.39 * (totalWords / totalSentences) + 11.8 * (totalSyllables / totalWords) - 15.59;

        if (fkgl <= 3) return 'A1';
        if (fkgl <= 5) return 'A2';
        if (fkgl <= 7) return 'B1';
        if (fkgl <= 9) return 'B2';
        if (fkgl <= 12) return 'C1';
        return 'C2';
    }
};

// ==========================================
// ۴. موتور هوش مصنوعی و صوت روانی (Puter / Gemini Engine)
// ==========================================
class AIEngine {

    /**
     * تبدیل متن به صوت یکپارچه، بدون تیکه‌تیکه شدن (Puter Neural TTS)
     */
    static async speak(text, onStart, onEnd) {
        if (!text || text.trim() === "") return;

        try {
            if (AppState.currentAudio) {
                AppState.currentAudio.pause();
                AppState.currentAudio.currentTime = 0;
            }

            if (onStart) onStart();

            // استفاده از موتور Neural پوتِر
            const audio = await puter.ai.txt2speech(text, {
                provider: 'aws-polly',
                engine: 'neural',
                language: 'en-US',
                voice: 'Joanna'
            });

            AppState.currentAudio = audio;
            audio.play();
            audio.onended = () => { if (onEnd) onEnd(); };

        } catch (error) {
            console.error("Puter TTS Error, falling back to browser synthesis:", error);
            // Fallback در صورت قطعی اینترنت
            const fallback = new SpeechSynthesisUtterance(text);
            fallback.lang = 'en-US';
            fallback.onend = () => { if (onEnd) onEnd(); };
            window.speechSynthesis.speak(fallback);
        }
    }

    /**
     * تولید متن استریم‌شده (کلمه‌به‌کلمه) با پرامپت صمیمی
     */
    static async streamResponse(prompt, outputElement) {
        if (AppState.isGenerating) return;
        AppState.isGenerating = true;

        const langConfig = I18N[AppState.lang];
        outputElement.innerHTML = `<div class="loading-spinner">⚡ ${langConfig.loadingText}</div>`;

        const systemPrompt = `
تو یک دوست و مدرس زبان انگلیسی بسیار صمیمی و جذابی.
قوانین پاسخ‌دهی:
۱. گرامر و نکات را خیلی ساده، کوتاه و عامیانه بگو.
۲. حتما ساختار را با معادل‌های عامیانه در زبان فارسی مقایسه کن (مثلا: "این یعنی همون 'داشتم میرفتم' خودمان").
۳. از کلمات خشک گرامری پرهیز کن.
۴. حدکثر ۳ جمله توضیح + ۲ مثال کوتاه و ملموس بده.
`;

        try {
            if (AppState.aiProvider === 'puter') {
                const responseStream = await puter.ai.chat(
                    `${systemPrompt}\n\nکاربر: ${prompt}`,
                    { stream: true }
                );

                outputElement.innerHTML = "";
                for await (const part of responseStream) {
                    if (part?.text) {
                        outputElement.innerHTML += part.text.replace(/\n/g, '<br>');
                        outputElement.scrollTop = outputElement.scrollHeight;
                    }
                }
            } else {
                // فل‌بک به Gemini API اگر کاربر API Key خودش را زده بود
                await this.callGeminiAPI(systemPrompt, prompt, outputElement);
            }
        } catch (error) {
            console.error("AI Stream Error:", error);
            outputElement.innerHTML = `<span class="error">${langConfig.errorAI}</span>`;
        } finally {
            AppState.isGenerating = false;
        }
    }

    static async callGeminiAPI(systemPrompt, userPrompt, outputElement) {
        if (!AppState.geminiApiKey) {
            outputElement.innerHTML = "❌ لطفا ابتدا API Key جمنی را در بخش تنظیمات وارد کنید.";
            return;
        }
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${AppState.geminiModel}:generateContent?key=${AppState.geminiApiKey}`;
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: `${systemPrompt}\n\n${userPrompt}` }] }]
            })
        });
        const data = await response.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "پاسخی دریافت نشد.";
        outputElement.innerHTML = text.replace(/\n/g, '<br>');
    }
}

// ==========================================
// ۵. مدیریت مسیریابی و صفحات (Router & Navigation)
// ==========================================
const Router = {
    init() {
        window.addEventListener('hashchange', () => this.handleRouteChange());
        this.handleRouteChange();
    },

    navigate(viewId) {
        window.location.hash = viewId;
    },

    handleRouteChange() {
        const hash = window.location.hash.replace('#', '') || 'home';
        const views = document.querySelectorAll('.app-view');
        
        views.forEach(view => {
            if (view.id === `view-${hash}`) {
                view.classList.add('active');
                view.style.display = 'block';
            } else {
                view.classList.remove('active');
                view.style.display = 'none';
            }
        });

        AppState.navStack.push(hash);
    }
};

// ==========================================
// ۶. مدیریت مدال تنظیمات و رابط کاربری (Settings & UI)
// ==========================================
const UIController = {
    init() {
        this.applyTheme(AppState.theme);
        this.applyLanguage(AppState.lang);
        this.applyFontSize(AppState.fontSize);
        this.bindEvents();
        Router.init();
        console.log("App Ready with Full V2 Core Integration!");
    },

    applyTheme(theme) {
        AppState.theme = theme;
        localStorage.setItem('app_theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
    },

    applyLanguage(lang) {
        AppState.lang = lang;
        localStorage.setItem('app_lang', lang);
        const config = I18N[lang] || I18N.fa;
        document.documentElement.dir = config.dir;
        document.documentElement.lang = lang;

        // به روزرسانی متون UI با دیکشنری
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (config[key]) el.textContent = config[key];
        });
    },

    applyFontSize(size) {
        AppState.fontSize = size;
        localStorage.setItem('app_font_size', size);
        document.documentElement.setAttribute('data-font-size', size);
    },

    bindEvents() {
        // مدیریت مدال تنظیمات
        const settingsModal = document.getElementById('settings-modal');
        const openSettingsBtn = document.getElementById('open-settings-btn');
        const closeSettingsBtn = document.getElementById('close-settings-btn');
        const saveSettingsBtn = document.getElementById('save-settings-btn');
        const resetDataBtn = document.getElementById('reset-data-btn');

        if (openSettingsBtn) {
            openSettingsBtn.onclick = () => settingsModal?.classList.add('open');
        }
        if (closeSettingsBtn) {
            closeSettingsBtn.onclick = () => settingsModal?.classList.remove('open');
        }

        if (saveSettingsBtn) {
            saveSettingsBtn.onclick = () => {
                const providerSelect = document.getElementById('setting-provider');
                const apiKeyInput = document.getElementById('setting-api-key');
                const themeSelect = document.getElementById('setting-theme');
                const fontSelect = document.getElementById('setting-font-size');
                const langSelect = document.getElementById('setting-lang');

                if (providerSelect) AppState.aiProvider = providerSelect.value;
                if (apiKeyInput) AppState.geminiApiKey = apiKeyInput.value.trim();
                if (themeSelect) this.applyTheme(themeSelect.value);
                if (fontSelect) this.applyFontSize(fontSelect.value);
                if (langSelect) this.applyLanguage(langSelect.value);

                localStorage.setItem('ai_provider', AppState.aiProvider);
                localStorage.setItem('gemini_api_key', AppState.geminiApiKey);

                settingsModal?.classList.remove('open');
                alert(AppState.lang === 'fa' ? 'تنظیمات با موفقیت ذخیره شد.' : 'Settings saved successfully.');
            };
        }

        if (resetDataBtn) {
            resetDataBtn.onclick = () => {
                if (confirm(AppState.lang === 'fa' ? 'آیا از پاک کردن تمامی داده‌ها اطمینان دارید؟' : 'Reset all settings?')) {
                    localStorage.clear();
                    location.reload();
                }
            };
        }
    },

    // تابع عمومی خواندن متن متصل به دکمه بلندگو
    playSpeech(text, btnElement) {
        AIEngine.speak(
            text,
            () => btnElement?.classList.add('playing'),
            () => btnElement?.classList.remove('playing')
        );
    },

    // تابع ترجمه و توضیح گرامر به صورت آنلاین
    explainTopic(promptText, targetContainerId) {
        const container = document.getElementById(targetContainerId);
        if (container) {
            AIEngine.streamResponse(promptText, container);
        }
    }
};

// اجرای کامل موتور پس از لود شدن صفحه
document.addEventListener('DOMContentLoaded', () => UIController.init());
                  
