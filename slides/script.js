// IoT & MQTT Presentation Deck — Navigation
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let currentIndex = 0;

document.getElementById('totalSlides').textContent = totalSlides;

function goToSlide(index) {
  if (index < 0 || index >= totalSlides) return;
  slides[currentIndex].classList.remove('active');
  currentIndex = index;
  slides[currentIndex].classList.add('active');
  document.getElementById('currentSlide').textContent = currentIndex + 1;
  document.getElementById('progressFill').style.width = `${((currentIndex + 1) / totalSlides) * 100}%`;
  if (history.replaceState) {
    history.replaceState(null, '', `#${currentIndex + 1}`);
  }
}

function nextSlide() { goToSlide(currentIndex + 1); }
function prevSlide() { goToSlide(currentIndex - 1); }

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowRight':
    case ' ':
    case 'PageDown':
      e.preventDefault();
      nextSlide();
      break;
    case 'ArrowLeft':
    case 'PageUp':
      e.preventDefault();
      prevSlide();
      break;
    case 'Home':
      e.preventDefault();
      goToSlide(0);
      break;
    case 'End':
      e.preventDefault();
      goToSlide(totalSlides - 1);
      break;
    case 'f':
    case 'F':
      e.preventDefault();
      toggleFullscreen();
      break;
  }
});

// Touch swipe for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

document.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
}, { passive: true });

function handleSwipe() {
  const threshold = 50;
  const diff = touchStartX - touchEndX;
  if (Math.abs(diff) < threshold) return;
  if (diff > 0) nextSlide();
  else prevSlide();
}

// Hash routing on load
window.addEventListener('load', () => {
  const hash = window.location.hash.replace('#', '');
  const slideNum = parseInt(hash, 10);
  if (!isNaN(slideNum) && slideNum >= 1 && slideNum <= totalSlides) {
    goToSlide(slideNum - 1);
  } else {
    goToSlide(0);
  }
});

// Click navigation (right half = next, left half = prev)
document.addEventListener('click', (e) => {
  // Skip if clicking buttons or interactive elements
  if (e.target.closest('button, a, kbd, code, pre, input')) return;
  const x = e.clientX;
  const w = window.innerWidth;
  if (x > w * 0.7) nextSlide();
  else if (x < w * 0.3) prevSlide();
});
