// contact.js — form validation + submit
function submitForm(e) {
  if (e && e.preventDefault) e.preventDefault();

  const name    = (document.getElementById('name')?.value    || '').trim();
  const email   = (document.getElementById('email')?.value   || '').trim();
  const subject = (document.getElementById('subject')?.value || '').trim();
  const msg     = (document.getElementById('message')?.value || '').trim();

  let ok = true;

  function setError(id, show) {
    const el = document.getElementById(id);
    if (el) el.style.display = show ? 'block' : 'none';
    if (show) ok = false;
  }

  setError('name-error',    name.length === 0);
  setError('email-error',   !email.includes('@') || !email.includes('.'));
  setError('subject-error', subject.length === 0);
  setError('message-error', msg.length < 20);

  if (!ok) return;

  openPopup('success-popup');
  document.getElementById('contact-form')?.reset();
}

// Live re-validation on input
document.addEventListener('DOMContentLoaded', () => {
  ['name','email','subject','message'].forEach(id => {
    document.getElementById(id)?.addEventListener('input', () => {
      const errEl = document.getElementById(id + '-error');
      if (errEl) errEl.style.display = 'none';
    });
  });
});

window.submitForm = submitForm;
