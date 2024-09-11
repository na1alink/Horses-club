document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".participants-swiper", {
    spaceBetween: 20,
    slidesPerView: 3,
    freeMode: false,
    watchSlidesProgress: true,
    watchOverflow: true,
    watchSlidesVisibility: true,
    loop: true,
    autoplay: {
      delay: 4000,
    },
    navigation: {
      nextEl: ".participants .button-next",
      prevEl: ".participants .button-prev",
    },
    on: {
      slideChange: function () {
        const currentSlide = this.realIndex + 1;
        const totalSlides = this.slides.length;

        document.querySelector(".show-desktop .current-slide").textContent =
          currentSlide;
        document.querySelector(".show-desktop .total-slides").textContent =
          totalSlides;

        document.querySelector(".show-mobile .current-slide").textContent =
          currentSlide;
        document.querySelector(".show-mobile .total-slides").textContent =
          totalSlides;
      },
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });

  const swiperStages = new Swiper(".stages-swiper", {
    slidesPerView: 1,
    freeMode: false,
    watchSlidesProgress: true,
    watchOverflow: true,
    watchSlidesVisibility: true,
    loop: true,

    navigation: {
      nextEl: ".stages .swiper-button-next",
      prevEl: ".stages .swiper-button-prev",
    },
  });
});
