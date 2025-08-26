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
  bell:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9a6 6 0 1 1 12 0v4l2 3H4l2-3V9" stroke="currentColor" stroke-width="1.6" fill="none"/><path d="M10 19a2 2 0 0 0 4 0" stroke="currentColor" stroke-width="1.6" fill="none"/></svg>`,
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

/* Dummies so placeholders exist pre-replacement */
function shield(){} function sun(){} function moon(){} function copy(){} function eye(){} function eyeOff(){} function check(){} function warn(){} function keyIcon(){} function lockIcon(){}

/* Theme toggle */
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

/* Password: copy + show/hide */
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".icon-btn");
  if (!btn) return;

  const input = document.querySelector("#pwd");
  if (!input) return;

  const action = btn.dataset.action;

  if (action === "copy") {
    navigator.clipboard.writeText(input.value || "").then(() => {
      btn.classList.add("copied");
      setTimeout(() => btn.classList.remove("copied"), 250);
    });
  }

  if (action === "toggle") {
    const show = input.type === "password";
    input.type = show ? "text" : "password";
    btn.setAttribute("aria-label", show ? "Hide password" : "Show password");
    btn.innerHTML = show ? (icons.eyeOff || icons.eye) : icons.eye;
  }
});

/* Tips: 8 cards, auto-rotate with per-tip icon */
const tips = [
  {title:"Unique Passwords",         type:"PASSWORD SECURITY", icon:"lock",    desc:"Avoid using the same password across multiple accounts. Each account should have its own unique, strong password."},
  {title:"Two-Factor Authentication",type:"ACCOUNT SECURITY",  icon:"shield",  desc:"Turn on two-factor authentication (2FA) whenever possible. It adds an extra layer of security to your accounts."},
  {title:"Password Manager",        type:"PASSWORD SECURITY",  icon:"key",     desc:"Use a reputable password manager to generate and store strong passwords securely."},
  {title:"Beware of Phishing",      type:"EMAIL & MESSAGES",   icon:"mail",    desc:"Don’t click suspicious links or attachments. Verify the sender and URL before signing in."},
  {title:"Keep Software Updated",   type:"DEVICE SECURITY",    icon:"refresh", desc:"Enable automatic updates for your OS, browser, and apps to patch known vulnerabilities."},
  {title:"Use Secure Networks",     type:"NETWORK SAFETY",     icon:"wifi",    desc:"Avoid logging in on public Wi-Fi. If necessary, use a trusted VPN to encrypt your traffic."},
  {title:"Review Account Activity", type:"MONITORING",         icon:"bell",    desc:"Check security dashboards for unusual logins and enable alerts where available."},
  {title:"Backup Important Data",   type:"RECOVERY",           icon:"cloud",   desc:"Maintain encrypted backups of critical files so you can recover from loss or ransomware."}
];

let tipIndex = 0, tipTimer, progress = 0, progressEl;

function iconHTML(name){ return icons[name] || icons.lock; }
function renderDots(){
  const dots = document.getElementById('tipDots');
  dots.innerHTML = tips.map((_,i)=>`<span class="dot ${i===0?'active':''}"></span>`).join('');
}
function setActiveDot(i){
  const dots = document.querySelectorAll('#tipDots .dot');
  dots.forEach((d,idx)=>d.classList.toggle('active', idx===i));
}
function showTip(i){
  const t = tips[i];
  document.getElementById('tipIcon').innerHTML = iconHTML(t.icon);
  document.getElementById('tipTitle').textContent = t.title;
  document.getElementById('tipType').textContent  = t.type;
  document.getElementById('tipDesc').textContent  = t.desc;
  document.getElementById('tipCounter').textContent = `Tip ${i+1} of ${tips.length}`;
  setActiveDot(i);
  progress = 0;
  if (!progressEl) progressEl = document.getElementById('tipProgress');
  progressEl.style.width = '0%';
}
function startRotation(){
  clearInterval(tipTimer);
  tipTimer = setInterval(()=>{
    progress += 5;               // ~4s per tip
    if (!progressEl) progressEl = document.getElementById('tipProgress');
    progressEl.style.width = Math.min(progress,100) + '%';
    if (progress >= 100){
      tipIndex = (tipIndex + 1) % tips.length;
      showTip(tipIndex);
    }
  }, 200);
}

/* Boot */
replaceTokens();
applyStoredTheme();
renderDots();
showTip(tipIndex);
startRotation();

/* Allow clicking dots to jump */
document.getElementById('tipDots').addEventListener('click', e=>{
  const nodes = Array.from(document.querySelectorAll('#tipDots .dot'));
  const i = nodes.indexOf(e.target);
  if (i >= 0){ tipIndex = i; showTip(i); }
});
