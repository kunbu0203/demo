$(function () {
  var url = location.href;

  if (url.indexOf('?signUp') != -1) {
    $('[data-popup]').fadeIn();
  }

  $('[data-close-popup]').on('click', function (e) {
    e.preventDefault();
    $('[data-popup]').fadeOut();
  });
  var swiper = new Swiper('.swiper', {
    direction: 'vertical',
    simulateTouch: false,
    allowTouchMove: false,
    speed: 1000,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
  swiper.on('slideChange', function () {
    nextBtnShowHide(swiper.activeIndex);
  });
  $('[data-start]').on('click', function (e) {
    e.preventDefault();
    $('#testIndex').fadeOut();
    $('#testForm').fadeIn(function () {
      $(this).removeClass('hide');
      $('.swiper-button-next').addClass('swiper-button-disabled');
    });
  });
  $('[data-send]').on('click', function (e) {
    e.preventDefault();
    $('#testForm').fadeOut();
    $('#testResult').fadeIn(function () {
      $(this).removeClass('hide');
    });
  });
  $('[data-signup]').on('click', function (e) {
    e.preventDefault();
    $('#testResult').fadeOut();
    $('#form').fadeIn(function () {
      $(this).removeClass('hide');
    });
  });
  var tl = gsap.timeline(),
      H = $(window).height() + $(window).width() * 0.15;
  var tween = gsap.to('.drop-item', {
    y: function y() {
      return H;
    },
    rotation: 'random(-180, 180)',
    duration: 2,
    stagger: {
      amount: 0.4,
      from: "random"
    }
  });
  tl.add(tween).to('.drop-item', {
    opacity: 0,
    duration: 0.1
  });
  tl.pause();
  $('[data-next]').on('click', function (e) {
    e.preventDefault();
    gsap.set(".drop-item", {
      y: 0
    });
    H = $(window).height() + $(window).width() * 0.15;
    tween.invalidate();
    tl.restart();
    swiper.slideNext();
  });
  $('[data-test-radio]').on('change', function (e) {
    e.preventDefault();
    nextBtnShowHide(swiper.activeIndex);
    changeDropImg(swiper.activeIndex);
  });

  var nameBoolean = false,
      genderBoolean = false,
      ageBoolean = false,
      activeBtn = function activeBtn() {
    if (nameBoolean && genderBoolean && ageBoolean) {
      $('[data-send]').removeClass('disable');
    } else {
      $('[data-send]').addClass('disable');
    }
  };

  $('[data-form-input]').on('input', function () {
    nameBoolean = $('[data-form-input="name"]').val().length > 0;
    ageBoolean = $('[data-form-input="age"]').val().length > 0;
    activeBtn();
  });
  $('[data-form-radio]').on('change', function () {
    genderBoolean = $('[data-form-radio]').val().length > 0;
    activeBtn();
  });
});

function nextBtnShowHide(activeSlider) {
  var $thisSlider = $('[data-slider]').eq(activeSlider),
      hasAns = $thisSlider.find('[data-test-radio]:checked').length > 0;

  if (hasAns) {
    $thisSlider.find('[data-next]').removeClass('disable');
    $('.swiper-button-next').removeClass('swiper-button-disabled');
  } else {
    $('.swiper-button-next').addClass('swiper-button-disabled');
  }
}

function changeDropImg(activeSlider) {
  var $thisSlider = $('[data-slider]').eq(activeSlider),
      theme = $thisSlider.data('slider');
  $('.drop').removeClass().addClass('drop').addClass(theme);
}

function dropDown(tl, H) {}