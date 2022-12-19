$(function () {
  // $(window).on('resize', function () {
  // }).trigger('resize');
  var svgH = $('.container').height() - $(window).height() / 2;
  $('svg').css('height', svgH);
  $('.path-road').css('max-height', svgH); // 進場

  gsap.registerPlugin(ScrollTrigger); // banner

  gsap.set('.banner-title span', {
    y: -50
  });
  gsap.set('.banner-car img', {
    x: '50%',
    y: -10
  });
  gsap.timeline().to('.banner-title span', {
    duration: 0.5,
    y: 0,
    opacity: 1
  }).to('.banner-car img', {
    duration: 0.5,
    x: 0,
    y: 0,
    opacity: 1
  }); // video

  gsap.to(['.video-head', '.video-main'], {
    duration: 0.5,
    opacity: 1,
    stagger: 0.5,
    scrollTrigger: {
      trigger: '.video',
      start: 'top 70%'
    }
  }); // intro

  gsap.set('.intro-pic', {
    x: '-50%'
  });
  var introEntry = gsap.timeline();
  introEntry.to('.intro-pic', {
    duration: 0.5,
    x: 0,
    opacity: 1
  }).to('.intro-content', {
    duration: 0.5,
    opacity: 1
  });
  ScrollTrigger.create({
    animation: introEntry,
    trigger: '.intro',
    start: 'top 70%'
  }); // join

  gsap.set('.join-bear', {
    y: 80
  });
  var joinEntry = gsap.timeline();
  joinEntry.to(['.join-title', '.join-text', '.join-btn'], {
    duration: 0.5,
    opacity: 1
  }).to('.join-bear', {
    duration: 0.5,
    y: 0,
    opacity: 1
  });
  ScrollTrigger.create({
    animation: joinEntry,
    trigger: '.join',
    start: 'top 70%'
  }); // event

  gsap.set('.event-bear', {
    y: 80
  });
  gsap.set('.eventCard', {
    y: -50
  });
  var eventEntry = gsap.timeline();
  eventEntry.to('.event-intro', {
    duration: 0.5,
    opacity: 1
  }).to('.event-bear', {
    duration: 0.5,
    y: 0,
    opacity: 1
  }).to('.eventCard', {
    duration: 0.5,
    y: 0,
    opacity: 1
  });
  ScrollTrigger.create({
    animation: eventEntry,
    trigger: '.event',
    start: 'top 70%'
  }); // carModel

  gsap.set('.carModel-pic', {
    x: '-40%'
  });
  gsap.set('.carModel-content', {
    x: '40%'
  });
  var carEntry = gsap.timeline();
  carEntry.to('.carModel-pic', {
    duration: 0.5,
    x: 0,
    opacity: 1
  }).to('.carModel-content', {
    duration: 0.5,
    delay: -0.5,
    x: 0,
    opacity: 1
  });
  ScrollTrigger.create({
    animation: carEntry,
    trigger: '.carModel',
    start: 'top 70%'
  }); // reserve

  gsap.to('.reserve', {
    duration: 0.5,
    opacity: 1,
    scrollTrigger: {
      trigger: '.reserve',
      start: 'top 70%'
    }
  }); // road

  gsap.from('.path-road', {
    height: 0,
    ease: 'none',
    scrollTrigger: {
      trigger: '.path',
      start: 'top center',
      end: '90% center',
      scrub: true // markers: true

    }
  });
  gsap.registerPlugin(MotionPathPlugin);
  gsap.to('.path-car', {
    ease: 'none',
    motionPath: {
      path: '#road',
      align: '#road',
      autoRotate: false,
      alignOrigin: [0.5, 0.5]
    },
    scrollTrigger: {
      trigger: '.path',
      start: 'top center',
      end: '90% center',
      scrub: true // markers: true

    }
  });
  var eventSwiper = new Swiper('[data-slider="event"]', {
    slidesPerView: 4,
    allowTouchMove: false,
    simulateTouch: false,
    pagination: {
      enabled: false
    },
    breakpoints: {
      767: {
        slidesPerView: 1,
        allowTouchMove: true,
        simulateTouch: true,
        pagination: {
          el: '.swiper-pagination',
          enabled: true,
          clickable: true
        }
      }
    }
  });
  var detailSwiper = new Swiper('[data-slider="detail"]', {
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
  var introSwiper = new Swiper('[data-slider="intro"]', {
    slidesPerView: 1,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    }
  });
  $('[data-popup-open]').on('click', function (e) {
    e.preventDefault();
    var id = $(this).data('popup-open');
    $('body').addClass('-popupOpen');
    $('[data-popup="' + id + '"]').addClass('-open');
  }); // goTop鈕

  $('[data-top]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 500);
  });
});