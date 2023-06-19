function previousSlideProjetos() {
  const slides = document.querySelectorAll('.slides_projetos .slide_projetos');
  const navigationLabels = document.querySelectorAll('.navigation_projetos label');

  // Find the currently displayed slide
  let currentSlideIndex;
  for (let i = 0; i < slides.length; i++) {
    if (slides[i].classList.contains('active_slide')) {
      currentSlideIndex = i;
      break;
    }
  }

  // Hide the current slide
  slides[currentSlideIndex].classList.remove('active_slide');
  navigationLabels[currentSlideIndex].classList.remove('active_slide');

  // Calculate the index of the previous slide
  const previousSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;

  // Display the previous slide
  slides[previousSlideIndex].classList.add('active_slide');
  navigationLabels[previousSlideIndex].classList.add('active_slide');
}

function nextSlideProjetos() {
  const slides = document.querySelectorAll('.slides_projetos .slide_projetos');
  const navigationLabels = document.querySelectorAll('.navigation_projetos label');

  // Find the currently displayed slide
  let currentSlideIndex;
  for (let i = 0; i < slides.length; i++) {
    if (slides[i].classList.contains('active_slide')) {
      currentSlideIndex = i;
      break;
    }
  }

  // Hide the current slide
  slides[currentSlideIndex].classList.remove('active_slide');
  navigationLabels[currentSlideIndex].classList.remove('active_slide');

  // Calculate the index of the next slide
  const nextSlideIndex = (currentSlideIndex + 1) % slides.length;

  // Display the next slide
  slides[nextSlideIndex].classList.add('active_slide');
  navigationLabels[nextSlideIndex].classList.add('active_slide');
}

// Add the 'active_slide' class to the first slide and navigation label
const firstSlide = document.querySelector('.slides_projetos .slide_projetos');
const firstNavigationLabel = document.querySelector('.navigation_projetos label');
firstSlide.classList.add('active_slide');
firstNavigationLabel.classList.add('active_slide');