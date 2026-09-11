/**
 * cDrive Application Lifecycle & Coordinator
 * Handles URL query parameters, parent iframe postMessage events, and global toast notifications
 */

window.addEventListener('DOMContentLoaded', () => {
  if (window.self !== window.top) {
    document.body.classList.add('is-embedded');
  }

  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('mode') === 'gov') {
    setGovMode(true);
  } else {
    renderDocs();
  }

  let savedTheme = 'dark';
  try {
    savedTheme = localStorage.getItem('cicod_theme') || 'dark';
  } catch (e) {}
  setTheme(savedTheme, false);
});

window.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SET_MODE') {
    setGovMode(event.data.mode === 'gov');
  }
  if (event.data && event.data.type === 'SET_THEME') {
    setTheme(event.data.theme, false);
  }
});

function setTheme(theme, broadcast = true) {
  const isLight = theme === 'light';
  document.body.classList.toggle('theme-light', isLight);
  const btn = document.getElementById('btnCdriveTheme');
  if (btn) btn.innerHTML = isLight ? '<span>🌙 Dark</span>' : '<span>☀️ Light</span>';
  try {
    localStorage.setItem('cicod_theme', isLight ? 'light' : 'dark');
  } catch (e) {}
  if (broadcast && window.parent && window.parent !== window) {
    try {
      window.parent.postMessage({ type: 'SET_THEME', theme: isLight ? 'light' : 'dark' }, '*');
    } catch (e) {}
  }
}

function toggleTheme() {
  const isLight = document.body.classList.contains('theme-light');
  setTheme(isLight ? 'dark' : 'light', true);
}

function showToast(msg) {
  const box = document.getElementById('toastBox');
  if (!box) return;
  
  const t = document.createElement('div');
  t.className = 'toast';
  t.innerText = msg;
  box.appendChild(t);
  
  setTimeout(() => {
    t.style.opacity = '0';
    setTimeout(() => t.remove(), 300);
  }, 3000);
}
