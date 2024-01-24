// Avoid `console` errors in browsers that lack a console.
(function () {
  var method;
  var noop = function () {};
  var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'];
  var length = methods.length;
  var console = window.console = window.console || {};
  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
})();

// Place any jQuery/helper plugins in here.
(function (targetWidth) {
  var deviceWidth = screen.width;
  var ratio = deviceWidth / targetWidth;
  var viewport = document.querySelector('meta[name="viewport"]');
  if (ratio < 1) {
    viewport.setAttribute('content', 'width=device-width, initial-scale=' + ratio + ', minimum-scale=' + ratio + ', maximum-scale=' + ratio + ', user-scalable=yes');
  }
})(390);
$(function () {
  // 取得瀏覽器可視高度
  $(window).on('resize.vh', function () {
    var vh = window.innerHeight * 0.01;
    $('html').css('--vh', vh + 'px');
  }).trigger('resize.vh');
  $('.container-btn').click(function () {
    gtag('event', 'click', {
        '類型': '會員頁',
        '標籤': $('.container-btn').hasClass('-vip') ? 'VIP一起來看看' : '一般一起來看看'
    });
  });
  $('.goShop').click(function () {
    gtag('event', 'click', {
      event_category: '促銷頁',
      event_label: '快來購物吧'
    });
  });
  $('.again').click(function () {
    gtag('event', 'click', {
      event_category: '促銷頁',
      event_label: '再看一次'
    });
  });

  window.onbeforeunload = function () {
        // 使用者不在頁面上時要做的事……
        gtag('event', 'stay', {
            cut1Stay: '2000'
        })
    };
});

// loading
window.onload = function () {
  $('.loading').fadeOut(300, function () {
    $('body').addClass('-loaded');

    // 主要輪播
    const containerSwiper = new Swiper('[data-slider]', {
      loop: false,
      speed: 1,
      allowTouchMove: false,
      autoplay: {
        delay: 7000,
        disableOnInteraction: false,
        stopOnLastSlide: true
      },
      pagination: {
        el: '.container-page'
      },
      navigation: {
        nextEl: '.container-next',
        prevEl: '.container-prev'
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          var activeSlider = $('[data-swiper-autoplay]').eq(s.activeIndex);
          var outTime = activeSlider.hasClass('-cartOut') ? 1800 : 1600;
          if (time < outTime && time > outTime - 100 && !activeSlider.hasClass('-fadeOut')) {
            activeSlider.addClass('-fadeOut');
            $('.swiper-slide-active .-haveToFadeOut').fadeOut(1000);
          }
          $('html').css('--progress', 1 - progress);
        },
        slideChangeTransitionStart(s) {
          $('[data-swiper-autoplay]').removeClass('-fadeOut').eq(s.activeIndex - 1).addClass('-changeStart');
          s.params.autoplay.delay = $('[data-swiper-autoplay]').eq(s.activeIndex).data('swiperAutoplay');
          $('.container-btn').toggleClass('hidden', s.activeIndex !== 1);
          $('.container-goShop').toggleClass('hidden', s.activeIndex !== s.slides.length - 1);
        },
        slideChangeTransitionEnd() {
          $('[data-swiper-autoplay]').removeClass('-changeStart');
          $('.swiper-slide-active .-haveToFadeOut').removeAttr('style');
        }
      }
    });
    $('.container-btn').on('click', function () {
      containerSwiper.slideNext();
    });
    $('.again').on('click', function (e) {
      e.preventDefault();
      containerSwiper.slideTo(0);
    });

    // 長按暫停
    let timer = 0;
    $('[data-slider]').on('mousedown touchstart', function () {
      timer = setTimeout(() => {
        timer = 0;
        $('[data-slider]').addClass('-isPause');
        containerSwiper.autoplay.pause();
      }, 300);
    });
    $('[data-slider]').on('mouseup touchend', function () {
      clearTimeout(timer);
      if (timer === 0) {
        containerSwiper.autoplay.resume();
        $('[data-slider]').removeClass('-isPause');
      }
    });
  });
};
