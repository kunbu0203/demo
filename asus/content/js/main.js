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
});