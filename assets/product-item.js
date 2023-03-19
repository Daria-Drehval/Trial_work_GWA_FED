// Lazy load
window.lozadObserver = window.lozad();
lozadObserver.observe();

// Quick add modal
const productCard = document.querySelectorAll('.productItem__card');
const body = document.querySelector('body');

productCard.forEach(card => {
  const quickBtn = card.querySelector('.featuredProducts__quickButton');
  const productModal = card.querySelector('.featuredProducts__quickModal');
  const closeBtn = card.querySelector('.icon-close-small');

  quickBtn.addEventListener('click', () => {
    productModal.classList.add('featuredProducts__quickModal--open');
    body.classList.add('inactive');
  });

  closeBtn.addEventListener('click', () => {
    productModal.classList.remove('featuredProducts__quickModal--open');
    body.classList.remove('inactive');
  });
});

// Slider
const slider = document.querySelector('.featuredProducts__contentSlider');
const slide = slider.querySelector('.slide');
const prev = document.querySelector('.prev-arrow');
const next = document.querySelector('.next-arrow');

prev.addEventListener("click", () => {
  const slideWidth = slide.offsetWidth;
  slider.scrollLeft -= slideWidth;
});

next.addEventListener("click", () => {
  const slideWidth = slide.offsetWidth;
  slider.scrollLeft += slideWidth;
});

// Change button text
const quickModal = document.querySelectorAll('.productItem__modal');

quickModal.forEach(modal => {
  const quickAddBtn = modal.querySelector('.productItem__formButton');

    quickAddBtn.addEventListener('click', () => {
      quickAddBtn.innerHTML = 'Adding';
    })
});
