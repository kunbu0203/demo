$(function () {
  var cardSwiper = new Swiper('[data-card-slider]', {
    loop: true,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
  var collapseSwiper = new Swiper('[data-collapse-slider]', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      767: {
        slidesPerView: 1
      }
    }
  });
  $(window).on('scroll', function () {
    var scrollTop = $('[data-header]').offset().top + 200,
        $com = $('[data-float]'),
        comTop = $com.offset().top;

    if (scrollTop > comTop) {
      $com.addClass('fixed');
    } else {
      $com.removeClass('fixed');
    }
  }).trigger('scroll');
});