// Start Cabecalho 
function desabilitarScroll() {
  document.body.style.overflow = 'hidden';
}

function habilitarScroll() {
  document.body.style.overflow = '';
}

var li = document.getElementById("menu_hamburguer");
var menu = false;
console.log(li);
li.addEventListener("click", function(event) {
  if(menu == false){
    menu = true;
    desabilitarScroll();
  }
  else{
    menu = false;
    habilitarScroll();
  }
})

function fecharmenu(){
  document.getElementById('menu_hamburguer').click()
}

// Fim Cabecalho
 
// Start Inicio

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
    if (slideIndex >= 4) {
      slideIndex = 0;
    }
  slides.classList.remove('slides-0', 'slides-1', 'slides-2', 'slides-3');
  slides.classList.add(`slides-${slideIndex}`);
  activateSlide(slideIndex);
}
setInterval(nextSlide, 5000);

navigation.addEventListener('click', function(event) {
  if (event.target.tagName === 'LABEL') {
    const index = Array.from(navigation.children).indexOf(event.target);
    slideIndex = index;
    slides.classList.remove('slides-0', 'slides-1', 'slides-2', 'slides-3');
    slides.classList.add(`slides-${slideIndex}`);
    activateSlide(slideIndex);
  }
});

// Fim Inicio

// Start Sobre 
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

// Fim Sobre

// Start Projetos

function previousSlideProjetos() {
  const slides = document.querySelectorAll('.slides_projetos .slide_projetos');
  const navigationLabels = document.querySelectorAll('.navigation_projetos label');

  let currentSlideIndex;
  for (let i = 0; i < slides.length; i++) {
    if (slides[i].classList.contains('active_slide')) {
      currentSlideIndex = i;
      break;
    }
  }

  slides[currentSlideIndex].classList.remove('active_slide');
  navigationLabels[currentSlideIndex].classList.remove('active_slide');

  const previousSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;

  slides[previousSlideIndex].classList.add('active_slide');
  navigationLabels[previousSlideIndex].classList.add('active_slide');
}

function nextSlideProjetos() {
  const slides = document.querySelectorAll('.slides_projetos .slide_projetos');
  const navigationLabels = document.querySelectorAll('.navigation_projetos label');

  let currentSlideIndex;
  for (let i = 0; i < slides.length; i++) {
    if (slides[i].classList.contains('active_slide')) {
      currentSlideIndex = i;
      break;
    }
  }

  slides[currentSlideIndex].classList.remove('active_slide');
  navigationLabels[currentSlideIndex].classList.remove('active_slide');

  const nextSlideIndex = (currentSlideIndex + 1) % slides.length;

  slides[nextSlideIndex].classList.add('active_slide');
  navigationLabels[nextSlideIndex].classList.add('active_slide');
}

const firstSlide = document.querySelector('.slides_projetos .slide_projetos');
const firstNavigationLabel = document.querySelector('.navigation_projetos label');
firstSlide.classList.add('active_slide');
firstNavigationLabel.classList.add('active_slide');

// Fim Projetos