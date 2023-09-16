(() => {
  const swiper = new Swiper(".swiper", {
    loop: true,
    speed: 400,
    spaceBetween: 100,
    autoplay: {
      delay: 3000,
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },

    pagination: {
      el: ".swiper-pagination",
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
})();
