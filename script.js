var swiper = new Swiper(".blogSwiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    480: {
      slidesPerView: 1.2,
    },
    640: {
      slidesPerView: 1.5,
    },
  },
});
