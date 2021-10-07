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
    slidesPerView: 4,
    spaceBetween: 40,
    pagination: {
      el: ".hot__pagination",
      clickable: true,
    },
  });

var swiper2 = new Swiper(".about__slider", {
    slidesPerView: 4,
    spaceBetween: 40,
    autoHeight: true,
    navigation: {
      nextEl: ".about-button-next",
      prevEl: ".about-button-prev",
    },
  });

