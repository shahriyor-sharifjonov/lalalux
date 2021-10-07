var swiper3 = new Swiper(".intro", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".hot__carousel", {
    slidesPerView: 1,
    spaceBetween: 40,
    pagination: {
      el: ".hot__pagination",
      clickable: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });

var swiper2 = new Swiper(".about__slider", {
    slidesPerView: 2,
    spaceBetween: 40,
    autoHeight: true,
    navigation: {
      nextEl: ".about-button-next",
      prevEl: ".about-button-prev",
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });

// Header Menu
const headerButton: HTMLButtonElement =
  document.querySelector(".header__button");
const headerMenu: HTMLUListElement = document.querySelector(".header__cat");
let menuOpened = false;
const menuToggle = () => {
  menuOpened = !menuOpened;
  headerButton.classList.toggle("open");
  headerMenu.classList.toggle("open");
};

headerButton.onclick = menuToggle;

window.onclick = (e: MouseEvent) => {
  if (
    menuOpened &&
    !e.composedPath().includes(headerButton) &&
    !e.composedPath().includes(headerMenu)
  )
    menuToggle();
};

function login(){
  const popup = document.querySelector('.popup-login');
  popup.classList.toggle('active')
}

function tel(){
  const popup = document.querySelector('.popup-tel');
  popup.classList.toggle('active')
}

window.addEventListener('click', function(e :any){
  if(e.target.classList.contains('popup')){
    e.target.classList.remove('active')
  }
})