// Minimal popup helpers used by legacy pages
function openPopup(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.style.display = 'flex';
  // small delay so CSS transitions (if any) can run
  setTimeout(() => el.classList && el.classList.add('show'), 10);
}

function closePopup(id) {
  const el = document.getElementById(id);
  if (!el) return;
  if (el.classList) el.classList.remove('show');
  setTimeout(() => { if (el.style) el.style.display = 'none'; }, 300);
}