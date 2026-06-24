// Lightweight theme toggle compatible with older pages
function toggleTheme() {
  const isDark = document.body.classList.toggle('dark');
  const btn = document.getElementById('themeBtn') || document.getElementById('theme-toggle') || document.querySelector('.theme-btn') || document.querySelector('#theme-toggle');
  if (btn) btn.textContent = isDark ? 'Light' : 'Dark';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// restore on load
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    const btn = document.getElementById('themeBtn') || document.getElementById('theme-toggle') || document.querySelector('.theme-btn');
    if (btn) btn.textContent = 'Light';
  }
});