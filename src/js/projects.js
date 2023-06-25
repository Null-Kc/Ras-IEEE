const firstSlide = document.querySelector('.project-slides .project-slide');
firstSlide.classList.add('active_slide');

function previousProjects() {
  const slides = document.querySelectorAll('.project-slides .project-slide');

  let currentSlideIndex;
  for (let i = 0; i < slides.length; i++) {
    if (slides[i].classList.contains('active_slide')) {
      currentSlideIndex = i;
      break;
    }
  }

  slides[currentSlideIndex].classList.remove('active_slide');

  const previousSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;

  slides[previousSlideIndex].classList.add('active_slide');
}

function nextProjects() {
  const slides = document.querySelectorAll('.project-slides .project-slide');
  
  let currentSlideIndex;
  for (let i = 0; i < slides.length; i++) {
    if (slides[i].classList.contains('active_slide')) {
      currentSlideIndex = i;
      break;
    }
  }

  slides[currentSlideIndex].classList.remove('active_slide');

  const nextSlideIndex = (currentSlideIndex + 1) % slides.length;

  slides[nextSlideIndex].classList.add('active_slide');
}






