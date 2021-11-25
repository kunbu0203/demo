$(function () {
  var bannerSwiper = new Swiper('[data-banner]', {
    loop: true,
    autoplay: {
      delay: 3000
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
  var newsSwiper = new Swiper('[data-top-news]', {
    loop: true,
    direction: 'vertical',
    slidesPerView: 1,
    autoplay: {
      delay: 3000
    },
    allowTouchMove: false
  });
});