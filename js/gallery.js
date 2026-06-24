// ─────────────────────────────────────────────
//  gallery.js — Slideshow, thumbnails, auto-play
// ─────────────────────────────────────────────

let currentSlide = 0;

function buildGallery() {
  const ss = document.getElementById('slideshow');
  const tb = document.getElementById('thumbs');

  PRODUCTS.forEach((p, i) => {
    const slide = document.createElement('div');
    slide.className = 'slide' + (i === 0 ? ' active' : '');
    slide.style.color = 'var(--text)';
    slide.innerHTML = `
      <div class="slide-svg">${p.svg}</div>
      <div class="slide-caption">${p.name} — $${p.price}</div>
    `;
    ss.appendChild(slide);

    const thumb = document.createElement('div');
    thumb.className = 'thumb' + (i === 0 ? ' active' : '');
    thumb.style.color = 'var(--text)';
    thumb.innerHTML = p.svg;
    thumb.addEventListener('click', () => goToSlide(i));
    tb.appendChild(thumb);
  });

  updateCounter();
}

function goToSlide(n) {
  const slides = document.querySelectorAll('.slide');
  const thumbs = document.querySelectorAll('.thumb');
  slides[currentSlide].classList.remove('active');
  thumbs[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  thumbs[currentSlide].classList.add('active');
  updateCounter();
}

function changeSlide(dir) {
  goToSlide(currentSlide + dir);
}

function updateCounter() {
  const total = document.querySelectorAll('.slide').length;
  document.getElementById('slideCounter').textContent = (currentSlide + 1) + ' / ' + total;
}

// Hero cycles through product illustrations
function buildHero() {
  const display = document.getElementById('heroDisplay');
  if (!display) return;
  display.style.cssText = 'width:65%; height:65%; color:var(--text); transition:opacity .6s;';
  let heroIdx = 0;
  display.innerHTML = PRODUCTS[0].svg;
  setInterval(() => {
    display.style.opacity = '0';
    setTimeout(() => {
      heroIdx = (heroIdx + 1) % PRODUCTS.length;
      display.innerHTML = PRODUCTS[heroIdx].svg;
      display.style.opacity = '1';
    }, 600);
  }, 2500);
}
