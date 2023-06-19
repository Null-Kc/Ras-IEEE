const carousel_sobre = document.querySelector('.carousel_sobre');
const slides_sobre = carousel_sobre.querySelector('.slides_sobre');
const slideWidth_sobre = carousel_sobre.offsetWidth;
let slideIndex_sobre = 0;

function nextSlideSobre() {
  slideIndex_sobre++;
    if (slideIndex_sobre >= 4) {
      slideIndex_sobre = 0;
    }
    slides_sobre.classList.remove('slides-0', 'slides-1', 'slides-2', 'slides-3');
    slides_sobre.classList.add(`slides-${slideIndex_sobre}`);
  console.log(slideIndex_sobre)
}