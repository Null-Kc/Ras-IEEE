// Start Email 
emailjs.init('7N1Ssz7fskGdjIECF');

window.onload = function() {
  const Apagar = document.querySelector("#reset");

  document.querySelector('#contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    this.contact_number.value = Math.random() * 100000 | 0;
    
    emailjs.sendForm('service_bbdlxbl', 'template_vw5w8or', this)
      .then(function() {
        console.log('SUCESSO!');
        Apagar.click();
      }, function(error) {
        console.log('FALHA...', error);
      });
  });
};
// Fim Email

// Start Cabecalho 
// Start Cabecalho 
function desabilitarScroll() {
  document.body.style.overflow = 'hidden';
}

function habilitarScroll() {
  document.body.style.overflow = '';
}

var li = document.getElementById("menu-hamburguer");
var menu = false;


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
  document.getElementById('menu-hamburguer').click();
}
// Fim Cabecalho
 
// Start Inicio
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
// Fim Inicio

// Start Sobre 
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

// Fim Sobre

// Start Projetos
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
// Fim Projetos