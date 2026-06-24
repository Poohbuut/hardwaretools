// theme.js — dark/light toggle, works on all pages
function toggleTheme() {
  const isDark = document.body.classList.toggle('dark');
  const label = isDark ? 'Light' : 'Dark';
  // support multiple possible button IDs/classes
  ['themeBtn','theme-toggle'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = label;
  });
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    ['themeBtn','theme-toggle'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = 'Light';
    });
  }
});

window.toggleTheme = toggleTheme;
