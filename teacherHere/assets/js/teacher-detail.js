$(function () {
  new Swiper('.cardList.-subject.swiper', {
    slidesPerView: 3,
    spaceBetween: 60,
    centerInsufficientSlides: true,
    navigation: {
      nextEl: '.cardList.-subject .swiper-button-next',
      prevEl: '.cardList.-subject .swiper-button-prev',
    },
    breakpoints: {
      1140: {
        slidesPerView: 2,
        spaceBetween: 50
      },
      767: {
        slidesPerView: 'auto',
        spaceBetween: 30
      }
    }
  });

  new Swiper('.cardList.-article.swiper', {
    slidesPerView: 3,
    spaceBetween: 60,
    centerInsufficientSlides: true,
    navigation: {
      nextEl: '.cardList.-article .swiper-button-next',
      prevEl: '.cardList.-article .swiper-button-prev',
    },
    breakpoints: {
      1140: {
        slidesPerView: 2,
        spaceBetween: 50
      },
      767: {
        slidesPerView: 'auto',
        spaceBetween: 30
      }
    }
  });
})