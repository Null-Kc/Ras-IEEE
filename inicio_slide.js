const carousel = document.querySelector('.carousel');
const slides = carousel.querySelector('.slides');
const slideWidth = carousel.offsetWidth;
const navigation = document.querySelector('.navigation');
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
    if (slideIndex >= slides.children.length) {
      slideIndex = 0;
    }
    slides.classList.remove('slides-0', 'slides-1', 'slides-2', 'slides-3');
    slides.classList.add(`slides-${slideIndex}`);
    activateSlide(slideIndex);
  }

  setInterval(nextSlide, 10000);

  navigation.addEventListener('click', function(event) {
    if (event.target.tagName === 'LABEL') {
      const index = Array.from(navigation.children).indexOf(event.target);
      slideIndex = index;
      slides.classList.remove('slides-0', 'slides-1', 'slides-2', 'slides-3');
      slides.classList.add(`slides-${slideIndex}`);
      activateSlide(slideIndex);
    }
  });