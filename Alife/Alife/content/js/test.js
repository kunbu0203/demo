$(function () {
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
  $('[data-close]').on('click', function (e) {
    e.preventDefault();
    $('[data-header]').removeClass('menuOpen');
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
  $('[data-next]').on('click', function (e) {
    e.preventDefault();
    swiper.slideNext();
    tl.play();
  });
  $('[data-test-radio]').on('change', function (e) {
    e.preventDefault();
    var activeSlider = swiper.activeIndex;
    nextBtnShowHide(activeSlider);
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