const carousel = document.querySelector('.initial-carousel');
const slides = carousel.querySelector('.initial-slides');
const slideWidth = carousel.offsetWidth;
const navigation = document.querySelector('#initial-navigation');
let slideIndex = 0;

function activateSlide(index) {
  const labels = navigation.querySelectorAll('label');

  labels.forEach((label, i) => {
    if (i === index) {
      label.classList.add('checked');
    } else {
      label.classList.remove('checked');
    }
  });
}

function nextSlide() {
  slideIndex++;
    if (slideIndex >= 4) {
      slideIndex = 0;
    }
    slides.classList.remove('slides-0-initial', 'slides-1-initial', 'slides-2-initial', 'slides-3-initial');
    slides.classList.add(`slides-${slideIndex}-initial`);
    activateSlide(slideIndex);
  }

  setInterval(nextSlide, 5000);

  navigation.addEventListener('click', function(event) {
    if (event.target.tagName === 'LABEL') {
      const index = Array.from(navigation.children).indexOf(event.target);
      slideIndex = index;
      slides.classList.remove('slides-0-initial', 'slides-1-initial', 'slides-2-initial', 'slides-3-initial');
      slides.classList.add(`slides-${slideIndex}-initial`);
      activateSlide(slideIndex);
    }
  });