$(function () {
  $(window).scroll(function () {
    var scrollT = $(this).scrollTop(),
        halfScreenH = $(window).height() / 2;

    if (scrollT > $('[data-idea]').offset().top - halfScreenH) {
      $('[data-idea]').addClass('fadeIn');
    }

    if (scrollT > $('[data-intro]').offset().top - halfScreenH) {
      $('[data-intro]').addClass('fadeIn');
    }

    if (scrollT > $('[data-event]').offset().top - halfScreenH) {
      $('[data-event]').addClass('fadeIn');
    }

    if (scrollT > $('[data-share]').offset().top - halfScreenH) {
      $('[data-share]').addClass('fadeIn');
    }
  }).trigger('scroll');
  var swiperTop = new Swiper('[data-slider-top]', {
    effect: 'fade',
    allowTouchMove: false
  });
  var swiperBottom = new Swiper('[data-slider-bottom]', {
    loop: true,
    loopAdditionalSlides: 4,
    slidesPerView: 4,
    breakpoints: {
      1023: {
        loopAdditionalSlides: 3,
        slidesPerView: 3
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
  var swiperCard = new Swiper('[data-slider-card]', {
    slidesPerView: 3.3,
    slidesPerGroup: 3,
    pagination: {
      el: '.swiper-card-pagination',
      type: 'fraction'
    },
    breakpoints: {
      1023: {
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      767: {
        slidesPerView: 1,
        slidesPerGroup: 1
      }
    },
    navigation: {
      nextEl: '.swiper-card-next',
      prevEl: '.swiper-card-prev'
    }
  });
  var swiperPopup = new Swiper('[data-slider-popup]', {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-popup-pagination',
      type: 'fraction'
    },
    navigation: {
      nextEl: '.swiper-popup-next',
      prevEl: '.swiper-popup-prev'
    }
  });
  swiperBottom.on('slideChange', function () {
    swiperTop.slideTo(swiperBottom.realIndex, 0);
  });
  swiperPopup.on('slideChange', function () {
    setTimeout(function () {
      swiperBottom.slideTo(swiperPopup.realIndex, 500);
    }, 500);
    $('.swiper-popup-index').text(swiperPopup.realIndex + 1);
  });
  $('[data-popup-action]').on('click', function (e) {
    e.preventDefault();
    $('[data-popup]').removeClass('hide');
    var val = $(this).data('popup-action');
    swiperPopup.slideTo(val - 1, 0);
  });
  $('[data-close-popup]').on('click', function (e) {
    e.preventDefault();
    $('[data-popup]').addClass('hide');
  });
  gsap.registerPlugin(ScrollTrigger);
  var floatTop = gsap.timeline({
    defaults: {
      ease: 'none'
    }
  });
  floatTop.from('[data-float="top"]', {
    y: 40,
    duration: 1
  }).to('[data-float="top"]', {
    y: -60,
    duration: 1
  });
  ScrollTrigger.create({
    animation: floatTop,
    trigger: '.container',
    // markers: true,
    start: 'top center',
    end: 'bottom center',
    scrub: true
  });
  var floatBottom = gsap.timeline({
    defaults: {
      ease: 'none'
    }
  });
  floatBottom.from('[data-float="bottom"]', {
    y: -60,
    duration: 1
  }).to('[data-float="bottom"]', {
    y: 40,
    duration: 1
  });
  ScrollTrigger.create({
    animation: floatBottom,
    trigger: '.container',
    // markers: true,
    start: 'top center',
    end: 'bottom center',
    scrub: true
  });
});