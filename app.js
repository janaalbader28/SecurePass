/* ---------------- Icons ---------------- */
const icons = {
  shield:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3l7 3v6.2c0 4.1-2.9 7.9-7 8.8-4.1-1-7-4.7-7-8.8V6l7-3z" stroke="currentColor" stroke-width="1.6" fill="none"/><path d="M9.5 12.2l2.1 2.1 4-4.1" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  sun:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.6"/><path d="M12 2v3M12 19v3M4.9 4.9l2.1 2.1M16.9 16.9l2.2 2.2M2 12h3M19 12h3M4.9 19.1l2.1-2.2M16.9 7l2.2-2.1" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  moon:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 13.2A8.5 8.5 0 1 1 10.8 3a7 7 0 1 0 10.2 10.2z" stroke="currentColor" stroke-width="1.6" fill="none"/></svg>`,
  copy:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="8" width="10" height="12" rx="2" stroke="currentColor" stroke-width="1.6"/><rect x="4" y="4" width="10" height="12" rx="2" stroke="currentColor" stroke-width="1.6" opacity=".5"/></svg>`,
  eye:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6z" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.6"/></svg>`,
  eyeOff:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 3l18 18" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M21.5 12s-3.5 6-9.5 6c-1.3 0-2.5-.2-3.6-.6" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round"/><path d="M5.1 15.2C3.5 13.9 2.5 12 2.5 12s3.5-6 9.5-6c1.2 0 2.4.2 3.5.5" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round"/><path d="M9.9 9.9A3 3 0 0 0 12 15a3 3 0 0 0 2.1-.9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  check:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  warn:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3l9 16H3l9-16z" stroke="currentColor" stroke-width="1.6" fill="none"/><path d="M12 9v5m0 3h.01" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  key:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8.5" cy="12.5" r="3.5" stroke="currentColor" stroke-width="1.6"/><path d="M12 12.5h8M17 12.5v3m3-3v3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  lock:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="10" width="16" height="10" rx="3" stroke="currentColor" stroke-width="1.6"/><path d="M8 10V8a4 4 0 1 1 8 0v2" stroke="currentColor" stroke-width="1.6"/></svg>`,
  mail:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M3 7l9 6 9-6" stroke="currentColor" stroke-width="1.6" fill="none"/></svg>`,
  refresh:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 12a8 8 0 1 1-2.3-5.7" stroke="currentColor" stroke-width="1.6" fill="none"/><path d="M20 5v4h-4" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round"/></svg>`,
  wifi:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 8a16 16 0 0 1 20 0M5 11a11 11 0 0 1 14 0M8 14a6 6 0 0 1 8 0" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round"/><circle cx="12" cy="18" r="1.5" fill="currentColor"/></svg>`,
  cloud:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 18h10a4 4 0 0 0 0-8 6 6 0 0 0-11.3-1.9A4.5 4.5 0 0 0 7 18z" stroke="currentColor" stroke-width="1.6" fill="none"/></svg>`
};

/* Replace ${fn()} placeholders with SVGs */
function replaceTokens(){
  document.body.innerHTML = document.body.innerHTML
    .replaceAll('${shield()}', icons.shield)
    .replaceAll('${sun()}', icons.sun)
    .replaceAll('${moon()}', icons.moon)
    .replaceAll('${copy()}', icons.copy)
    .replaceAll('${eye()}', icons.eye)
    .replaceAll('${eyeOff()}', icons.eyeOff)
    .replaceAll('${check()}', icons.check)
    .replaceAll('${warn()}', icons.warn)
    .replaceAll('${keyIcon()}', icons.key)
    .replaceAll('${lockIcon()}', icons.lock);
}

/* ================= Theme toggle ================= */
function applyStoredTheme(){
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = stored || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
  const btn = document.querySelector('.mode-toggle');
  if (btn) btn.innerHTML = theme === 'dark' ? icons.moon : icons.sun;
}
document.addEventListener('click', (e)=>{
  const btn = e.target.closest('.mode-toggle');
  if(!btn) return;
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  const next = current === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  btn.innerHTML = next === 'dark' ? icons.moon : icons.sun;
});

/* ================= Password, copy, toggle, language ================= */
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".icon-btn");
  if (!btn) return;

  const input = document.querySelector("#pwd");
  const action = btn.dataset.action;

  if (action === "copy") {
    navigator.clipboard.writeText(input?.value || "").then(() => {
      btn.classList.add("copied");
      setTimeout(() => btn.classList.remove("copied"), 250);
    });
  }

  if (action === "toggle" && input) {
    const show = input.type === "password";
    input.type = show ? "text" : "password";
    btn.setAttribute("aria-label", show ? "Hide password" : "Show password");
    btn.innerHTML = show ? (icons.eyeOff || icons.eye) : icons.eye;
  }

  if (action === "lang") {
    const body = document.body;
    let lang;
    if (body.dir === "rtl") {
      body.dir = "ltr";
      btn.textContent = "العربية";
      lang = "en";
    } else {
      body.dir = "rtl";
      btn.textContent = "English";
      lang = "ar";
    }

    // swap texts
    document.querySelectorAll("[data-en][data-ar]").forEach(el => {
      el.textContent = el.dataset[lang];
    });
    // swap placeholders
    document.querySelectorAll("input[data-en][data-ar]").forEach(inp => {
      inp.placeholder = inp.dataset[lang];
    });
    // score label
    const scoreLabel = document.getElementById('scoreLabel');
    if (scoreLabel) scoreLabel.textContent = scoreLabel.dataset[lang];

    const pwdVal = document.querySelector('#pwd')?.value || '';
    if (!pwdVal) resetStrengthUI();
  }
});

/* Evaluate while typing */
document.addEventListener('input', (e) => {
  if (e.target.id === 'pwd') {
    evaluatePassword(e.target.value);
  }
});

/* ================= Strength rules & helpers ================= */
const rules = [
  { id: 'len', label: 'At least 8 characters', improve: 'Use 8 or more characters', test: (s) => s.length >= 8 },
  { id: 'upper', label: 'Contains an uppercase letter', improve: 'Add at least one uppercase letter (A–Z)', test: (s) => /[A-Z]/.test(s) },
  { id: 'num', label: 'Contains a number', improve: 'Add at least one number (0–9)', test: (s) => /[0-9]/.test(s) },
  { id: 'special', label: 'Contains a special character', improve: 'Add a special character (e.g. !@#$%^&*)', test: (s) => /[^A-Za-z0-9]/.test(s) }
];

const meterFill  = () => document.getElementById('meterFill');
const meterLabel = () => document.getElementById('meterLabel');
const scoreEl    = () => document.getElementById('score');
const strengthUL = () => document.querySelector('.points-list.ok');
const improveUL  = () => document.querySelector('.points-list.warn');

function liHTMLOK(text){ return `<li><span class="li-icon" style="color:var(--green)">${icons.check}</span>${text}</li>`; }
function liHTMLWarn(text){ return `<li><span class="li-icon" style="color:var(--orange)">${icons.warn}</span>${text}</li>`; }

function setMeterClasses(level){
  const fill = meterFill();
  const pillEl = meterLabel()?.parentElement; // .pill
  if(!fill || !pillEl) return;

  fill.classList.remove('meter--weak','meter--fair','meter--good','meter--strong');
  pillEl.classList.remove('pill--weak','pill--fair','pill--strong');

  if(level === 'weak'){ fill.classList.add('meter--weak'); pillEl.classList.add('pill--weak'); }
  else if(level === 'fair'){ fill.classList.add('meter--fair'); pillEl.classList.add('pill--fair'); }
  else { fill.classList.add('meter--strong'); pillEl.classList.add('pill--strong'); }
}

function translateRule(id){
  const map = {
    len:   { label: '8 أحرف على الأقل', improve: 'استخدم 8 أحرف أو أكثر' },
    upper: { label: 'يحتوي على حرف كبير', improve: 'أضف حرفًا كبيرًا على الأقل (A–Z)' },
    num:   { label: 'يحتوي على رقم', improve: 'أضف رقمًا واحدًا على الأقل (0–9)' },
    special:{label: 'يحتوي على رمز خاص', improve: 'أضف رمزًا خاصًا (مثل !@#$%^&*)'}
  };
  return map[id] || {label:'', improve:''};
}

function resetStrengthUI(){
  if (meterFill()) meterFill().style.width = '0%';
  setMeterClasses('weak');
  const lang = document.body.dir === 'rtl' ? 'ar' : 'en';
  const weakText = lang === 'ar' ? 'ضعيف' : 'Weak';
  if (meterLabel()) meterLabel().textContent = weakText;
  if (scoreEl()) scoreEl().textContent = '0';
  const scoreLabel = document.getElementById('scoreLabel');
  if (scoreLabel) scoreLabel.textContent = lang === 'ar' ? 'النقاط:' : 'Score:';

  if (strengthUL()){
    strengthUL().innerHTML = liHTMLOK(lang === 'ar'
      ? 'ابدأ الكتابة لرؤية نقاط القوة'
      : 'Start typing to see strengths');
  }
  if (improveUL()){
    const items = rules.map(r => lang === 'ar' ? translateRule(r.id).improve : r.improve)
                       .map(liHTMLWarn).join('');
    improveUL().innerHTML = items;
  }
}

/* ===== Common password detection (policy-compliant) =====
   References:
   - NordPass corporate/common lists (methodology + corp section)
   - TechRadar summary showing policy-compliant industry examples like "P@ssw0rd", "Ramada@123", "Reservations2021!"
   These formats appear frequently in breaches (season+year+symbol, Welcome/Admin/Qwerty + digits + symbol, etc.).
*/

/* A seed of known, cited examples that already meet complexity */
const COMMON_COMPLEX_EXACT = new Set([
  'p@ssw0rd',          // TechRadar / industry reporting
  'p@ssw0rd!',         // variant
  'password1!',        // policy-compliant variant seen widely
  'welcome1!',         // common default-style
  'welcome@123',       // industry style
  'admin@123',         // industry style
  'qwerty123!',        // industry style
  'ramada@123',        // TechRadar (hospitality industry examples)
  'reservations2021!'  // TechRadar article example (corrected spelling of the concept)
].map(s => s.toLowerCase()));

/* Regex patterns for top “policy-compliant” formats frequently seen in corp environments */
const COMMON_COMPLEX_PATTERNS = [
  // Season + year + symbol (e.g., Spring2025!)
  /^(spring|summer|autumn|fall|winter)(19|20)\d{2}[!@#?$%]$/i,
  // Month + year + optional symbol (e.g., Oct2024!, March2025!)
  /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)(19|20)\d{2}[!@#?$%]?$/i,
  // Word + digits + symbol (classic policy “pass+digit+special” variants)
  /^password\d{1,4}[!@#?$%]$/i,
  /^welcome\d{1,4}([!@#?$%]|@123)?$/i,
  /^admin\d{0,4}([!@#?$%]|@123)?$/i,
  /^qwerty\d{1,4}[!@#?$%]?$/i,
  // Company/user defaults
  /^[a-z]{3,12}[@!]123$/i,         // e.g., Company@123, User!123
  /^(changeme|changeit)[@!]?\d{0,4}$/i,
  /^temp[@!]?\d{1,4}$/i,
  /^default[@!]?\d{0,4}$/i
];

function normalizePwd(s){
  return (s || '')
    .toLowerCase()
    .replace(/[@]/g,'@') // keep '@' (used in patterns)
    .replace(/[0]/g,'0')
    .replace(/[1!|]/g,'1') // for quick normalization checks (we still rely on regex above)
    .replace(/[^a-z0-9@!#?$%]/g, ''); // strip odd chars but keep typical specials
}

function isCommonPolicyCompliant(pwd){
  const n = normalizePwd(pwd);
  if (COMMON_COMPLEX_EXACT.has(n)) return true;
  return COMMON_COMPLEX_PATTERNS.some(re => re.test(pwd));
}

/* ================= Evaluate Password ================= */
function evaluatePassword(pwd){
  const lang = document.body.dir === 'rtl' ? 'ar' : 'en';

  // empty/space-only => reset + warn
  if (!pwd || pwd.trim() === '') {
    resetStrengthUI();
    const input = document.querySelector("#pwd");
    if (input) input.dir = 'ltr';
    if (improveUL()) {
      const msg = lang === 'ar' 
        ? 'لا يمكن ترك الحقل فارغًا أو إدخال مسافات فقط' 
        : 'Cannot leave empty or use spaces only';
      improveUL().innerHTML = liHTMLWarn(msg);
    }
    return;
  }

  // spaces not allowed inside
  if (/\s/.test(pwd)) {
    if (improveUL()) {
      const msg = lang === 'ar' 
        ? 'كلمة المرور لا يمكن أن تحتوي على مسافات' 
        : 'Password cannot contain spaces';
      improveUL().innerHTML = liHTMLWarn(msg);
    }
  }

  const results = rules.map(r => ({
    id: r.id,
    ok: r.test(pwd),
    label: lang === 'ar' ? translateRule(r.id).label : r.label,
    improve: lang === 'ar' ? translateRule(r.id).improve : r.improve
  }));

  const passed = results.filter(r => r.ok).length;

  // Detect “common but policy-compliant” passwords
  const commonComplex = isCommonPolicyCompliant(pwd);

  // Score: base on rules, but cap if commonComplex
  let pct = Math.round((passed / rules.length) * 100);
  if (commonComplex) pct = Math.min(pct, 60); // never allow 100

  if (meterFill()) meterFill().style.width = `${pct}%`;

  // Label & class
  let label = lang === 'ar' ? 'ضعيف' : 'Weak';
  let level = 'weak';
  if (passed === 2){ label = lang === 'ar' ? 'متوسط' : 'Fair'; level = 'fair'; }
  if (passed >= 3){ label = lang === 'ar' ? 'قوي' : 'Strong'; level = 'strong'; }
  if (commonComplex){
    label = lang === 'ar' ? 'شائعة وفق السياسة' : 'Common (Policy-Compliant)';
    // keep level at least 'fair' visually to reflect complexity, but not green-strong
    level = (passed >= 3) ? 'fair' : 'weak';
  }
  if (meterLabel()) meterLabel().textContent = label;
  setMeterClasses(level);

  if (scoreEl()) scoreEl().textContent = String(pct);

  // Strengths
  if (strengthUL()){
    const okItems = results.filter(r => r.ok).map(r => liHTMLOK(r.label));
    strengthUL().innerHTML = okItems.length ? okItems.join('') :
      liHTMLOK(lang === 'ar' ? 'ابدأ الكتابة لرؤية نقاط القوة' : 'Start typing to see strengths');
  }

  // Improvements
  if (improveUL()){
    const needItems = results.filter(r => !r.ok).map(r => liHTMLWarn(r.improve));

    if (commonComplex) {
      const msg = lang === 'ar'
        ? 'تنبيه: كلمة مرور شائعة رغم استيفاء الشروط — يُنصح بتغييرها (اختر عبارة فريدة أو 3 كلمات عشوائية).'
        : 'Warning: Common password even though it meets policy — change it (use a unique passphrase or three random words).';
      needItems.unshift(liHTMLWarn(msg));
    }

    improveUL().innerHTML = needItems.length ? needItems.join('') :
      liHTMLOK(lang === 'ar' ? 'جميع القواعد الأساسية متوفرة 🎉' : 'All core rules satisfied 🎉');
  }

  // auto direction if Arabic characters used
  const input = document.querySelector("#pwd");
  if (input) {
    const arabicPattern = /[\u0600-\u06FF]/;
    input.dir = arabicPattern.test(pwd) ? 'rtl' : 'ltr';
  }
}

/* ================= Password Generator ================= */
function generatePassword(length = 16) {
  const lower   = 'abcdefghijklmnopqrstuvwxyz';
  const upper   = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';
  const all = lower + upper + numbers + symbols;

  let pwd = '';
  // ensure at least one of each
  pwd += upper[Math.floor(Math.random() * upper.length)];
  pwd += numbers[Math.floor(Math.random() * numbers.length)];
  pwd += symbols[Math.floor(Math.random() * symbols.length)];

  for (let i = pwd.length; i < length; i++) {
    pwd += all[Math.floor(Math.random() * all.length)];
  }
  return pwd.split('').sort(() => 0.5 - Math.random()).join('');
}

/* Generate button */
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.btn');
  if (!btn) return;
  const input = document.querySelector('#pwd');
  if (!input) return;
  const newPwd = generatePassword(16);
  input.value = newPwd;
  evaluatePassword(newPwd);
});

/* ================= Tips: data & rotation ================= */
const tips = [
  {title:"Unique Passwords", title_ar:"كلمات مرور فريدة", 
   type:"PASSWORD SECURITY", type_ar:"أمن كلمة المرور", 
   icon:"lock", 
   desc:"Avoid using the same password across multiple accounts. Each account should have its own unique, strong password.", 
   desc_ar:"تجنب استخدام نفس كلمة المرور في حسابات متعددة. يجب أن يكون لكل حساب كلمة مرور قوية وفريدة."},
  {title:"Two-Factor Authentication", title_ar:"المصادقة الثنائية", 
   type:"ACCOUNT SECURITY", type_ar:"أمن الحساب", 
   icon:"shield", 
   desc:"Turn on two-factor authentication (2FA) whenever possible. It adds an extra layer of security to your accounts.", 
   desc_ar:"قم بتفعيل المصادقة الثنائية (2FA) كلما أمكن. تضيف طبقة أمان إضافية لحساباتك."},
  {title:"Password Manager", title_ar:"مدير كلمات المرور", 
   type:"PASSWORD SECURITY", type_ar:"أمن كلمة المرور", 
   icon:"key", 
   desc:"Use a reputable password manager to generate and store strong passwords securely.", 
   desc_ar:"استخدم مدير كلمات مرور موثوق لإنشاء وتخزين كلمات مرور قوية بأمان."},
  {title:"Beware of Phishing", title_ar:"احذر التصيد الاحتيالي", 
   type:"EMAIL & MESSAGES", type_ar:"البريد والرسائل", 
   icon:"mail", 
   desc:"Don’t click suspicious links or attachments. Verify the sender and URL before signing in.", 
   desc_ar:"لا تضغط على روابط أو مرفقات مشبوهة. تحقق من المرسل والرابط قبل تسجيل الدخول."},
  {title:"Keep Software Updated", title_ar:"حافظ على تحديث البرامج", 
   type:"DEVICE SECURITY", type_ar:"أمن الجهاز", 
   icon:"refresh", 
   desc:"Enable automatic updates for your OS, browser, and apps to patch known vulnerabilities.", 
   desc_ar:"قم بتمكين التحديثات التلقائية لنظام التشغيل والمتصفح والتطبيقات لسد الثغرات المعروفة."},
  {title:"Use Secure Networks", title_ar:"استخدم شبكات آمنة", 
   type:"NETWORK SAFETY", type_ar:"سلامة الشبكة", 
   icon:"wifi", 
   desc:"Avoid logging in on public Wi-Fi. If necessary, use a trusted VPN to encrypt your traffic.", 
   desc_ar:"تجنب تسجيل الدخول على شبكات واي فاي عامة. إذا لزم الأمر، استخدم VPN موثوق لتشفير البيانات."},
  {title:"Review Account Activity", title_ar:"راجع نشاط الحساب", 
   type:"MONITORING", type_ar:"المراقبة", 
   icon:"bell", 
   desc:"Check security dashboards for unusual logins and enable alerts where available.", 
   desc_ar:"تحقق من لوحات الأمان للنشاطات الغير عادية وفعل التنبيهات إذا كانت متاحة."},
  {title:"Backup Important Data", title_ar:"نسخ احتياطي للبيانات المهمة", 
   type:"RECOVERY", type_ar:"الاستعادة", 
   icon:"cloud", 
   desc:"Maintain encrypted backups of critical files so you can recover from loss or ransomware.", 
   desc_ar:"احتفظ بنسخ مشفرة من الملفات الهامة لتتمكن من الاستعادة في حالة الفقد أو هجمات الفدية."}
];

/* helper to get SVG icon */
function getIcon(name) { return icons[name] || ''; }

/* Tips rotation + dots */
document.addEventListener('DOMContentLoaded', ()=>{
  replaceTokens();
  applyStoredTheme();

  const tipTitle    = document.getElementById("tipTitle");
  const tipType     = document.getElementById("tipType");
  const tipDesc     = document.getElementById("tipDesc");
  const tipIcon     = document.getElementById("tipIcon");
  const tipCounter  = document.getElementById("tipCounter");
  const tipProgress = document.getElementById("tipProgress");
  const tipDots     = document.getElementById("tipDots");

  if (!tipTitle || !tipType || !tipDesc || !tipIcon || !tipCounter || !tipProgress || !tipDots) return;

  tips.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.dataset.index = i;
    tipDots.appendChild(dot);
  });

  let currentTip = 0;
  let progress = 0;
  const duration = 15;  // seconds per tip
  const interval = 100; // ms
  let rotationInterval;

  function startRotation() {
    rotationInterval = setInterval(() => {
      progress += (100 / (duration * 1000 / interval));
      if (progress >= 100) {
        progress = 0;
        currentTip = (currentTip + 1) % tips.length;
        showTip(currentTip);
      }
      tipProgress.style.width = progress + "%";
    }, interval);
  }

  function resetRotation() {
    clearInterval(rotationInterval);
    progress = 0;
    tipProgress.style.width = "0%";
    startRotation();
  }

  function showTip(index) {
    const tip = tips[index];
    const isArabic = document.body.dir === "rtl";

    tipTitle.textContent = isArabic ? tip.title_ar : tip.title;
    tipType.textContent  = isArabic ? tip.type_ar  : tip.type;
    tipDesc.textContent  = isArabic ? tip.desc_ar  : tip.desc;
    tipIcon.innerHTML    = getIcon(tip.icon);

    tipCounter.textContent = isArabic
      ? `النصيحة ${index + 1} من ${tips.length}`
      : `Tip ${index + 1} of ${tips.length}`;

    document.querySelectorAll("#tipDots .dot").forEach((d, i) => {
      d.classList.toggle("active", i === index);
    });

    currentTip = index;
  }

  tipDots.addEventListener("click", (e) => {
    const dot = e.target.closest(".dot");
    if (!dot) return;
    const index = parseInt(dot.dataset.index, 10);
    if (Number.isInteger(index)) {
      showTip(index);
      resetRotation();
    }
  });

  showTip(currentTip);
  startRotation();

  // initial reset for strength UI (if input empty)
  resetStrengthUI();
});
