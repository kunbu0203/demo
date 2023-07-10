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
})(375);
function getVh() {
  var vh = $(window).innerHeight() * 0.01;
  $('html').css('--vh', vh + 'px');
}
$(function () {
  getVh();
  $(window).on('resize', function () {
    getVh();
  });

  // 進場
  AOS.init({
    duration: 600,
    once: true
  });

  // 選單
  $('.header-burger button').on('click', function () {
    $('body').toggleClass('-anchorOpen');
  });

  // tab
  $('[data-tab-btn]').on('click', function () {
    var val = $(this).data('tabBtn');
    $('[data-tab-btn], [data-tab-panel]').removeClass('-active');
    $(this).addClass('-active');
    $('[data-tab-panel="' + val + '"]').addClass('-active');
  });

  // 錨點
  $('[data-anchor-btn]').on('click', function () {
    $('html, body').animate({
      scrollTop: $('[data-anchor-block="' + $(this).data('anchor-btn') + '"]').offset().top - 50
    }, 300);
    $('body').removeClass('-anchorOpen');
  });
  $('body').on('click.anchor', function (e) {
    var target = $(e.target);
    if (target.closest('.header').length == 0) {
      $('body').removeClass('-anchorOpen');
    }
  });
});