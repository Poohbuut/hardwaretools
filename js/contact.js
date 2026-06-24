// Minimal contact form handler for contact.html
function submitForm(e) {
  if (e && e.preventDefault) e.preventDefault();
  // simple validation
  const name = document.getElementById('name')?.value || '';
  const email = document.getElementById('email')?.value || '';
  const msg = document.getElementById('message')?.value || '';
  let ok = true;
  if (name.trim().length === 0) { document.getElementById('name-error').style.display = 'block'; ok = false; } else { document.getElementById('name-error').style.display = 'none'; }
  if (!email.includes('@')) { document.getElementById('email-error').style.display = 'block'; ok = false; } else { document.getElementById('email-error').style.display = 'none'; }
  if (msg.trim().length < 20) { document.getElementById('message-error').style.display = 'block'; ok = false; } else { document.getElementById('message-error').style.display = 'none'; }
  if (!ok) return;
  // show success popup
  openPopup('success-popup');
  // reset form
  document.getElementById('contact-form')?.reset();
}

window.submitForm = submitForm;