$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('[data-header]').addClass('fixed');
    } else {
      $('[data-header]').removeClass('fixed');
    }
  }).trigger('scroll');
  $('[data-burger]').on('click', function (e) {
    e.preventDefault();
    $('body').toggleClass('menuOpen');
  });
});