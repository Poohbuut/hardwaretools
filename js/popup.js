// popup.js — shared modal helpers
function openPopup(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.style.display = 'flex';
  requestAnimationFrame(() => el.classList.add('show'));
}

function closePopup(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.remove('show');
  setTimeout(() => { el.style.display = 'none'; }, 300);
}

window.openPopup  = openPopup;
window.closePopup = closePopup;
