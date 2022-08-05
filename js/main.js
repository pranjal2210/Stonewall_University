// NAVBAR

window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 50);
});

let closeRes = () => {
  window.onscroll = () =>{
  menu.style.display = "none";
  closeBtn.style.display = "none"
  openBtn.style.display = "inline-block"
}
}

if (window.innerWidth <= 800) {
  closeRes();
}

// FAQs

let faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('show-faq');

    const icon = faq.querySelector('.faq-icon i');
    if (icon.className === 'fas fa-plus') {
      icon.className = 'fas fa-minus';
    }
    else {
      icon.className = 'fas fa-plus';
    }
  });
});

// SWIPER

var swiper = new Swiper(".testi-swiper", {
  spaceBetween: 10,
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    600: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});

// MENU BTN

let menu = document.querySelector('.nav-menu');
let openBtn = document.querySelector('#openMenuBtn');
let closeBtn = document.querySelector('#closeMenuBtn');

openBtn.addEventListener('click', () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  openBtn.style.display = "none";
});

let closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  openBtn.style.display = "inline-block";
};

closeBtn.addEventListener('click', closeNav);
