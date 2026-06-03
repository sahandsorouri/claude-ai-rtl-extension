// Claude RTL Fix v8 - Final

const FA = /[\u0600-\u06FF]/;

function fixEl(el) {
  if (el._rtlDone) return;
  const text = el.innerText || el.textContent || '';
  if (FA.test(text)) {
    el._rtlDone = true;
    if (!text.startsWith('\u200F')) {
      el.insertAdjacentHTML('afterbegin', '\u200F');
    }
    el.style.setProperty('direction', 'rtl', 'important');
    el.style.setProperty('text-align', 'right', 'important');
  }
}

function fixAll() {
  document.querySelectorAll('div.standard-markdown p, div.standard-markdown li').forEach(fixEl);
  document.querySelectorAll('[data-testid="user-message"]').forEach(fixEl);
}

function fixInput() {
  const input = document.querySelector('[data-testid="chat-input"]');
  if (!input || input._w) return;
  input._w = true;

  function update() {
    const isRTL = FA.test(input.innerText || '');
    const dir = isRTL ? 'rtl' : 'ltr';
    const align = isRTL ? 'right' : 'left';
    input.style.setProperty('direction', dir, 'important');
    input.style.setProperty('text-align', align, 'important');
    input.style.setProperty('unicode-bidi', 'plaintext', 'important');
    input.querySelectorAll('p').forEach(p => {
      p.style.setProperty('direction', dir, 'important');
      p.style.setProperty('text-align', align, 'important');
    });
  }

  input.addEventListener('input', update);
  update();
}

setInterval(() => { fixAll(); fixInput(); }, 1500);
fixAll();
fixInput();

console.log('[Claude RTL Fix v8] Loaded ✓');