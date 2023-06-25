const CarouselAbout = document.querySelector("#about-carousel");
const slidesAbout = CarouselAbout.querySelector('#about-slides');

let slideAboutIndex = 0;

function nextAboutInfo() {
  slideAboutIndex++;
  if (slideAboutIndex >= 4) {
    slideAboutIndex = 0;
  }
  slidesAbout.classList.remove('slide-0-about', 'slide-1-about', 'slide-2-about', 'slide-3-about');
  slidesAbout.classList.add(`slide-${slideAboutIndex}-about`);
}