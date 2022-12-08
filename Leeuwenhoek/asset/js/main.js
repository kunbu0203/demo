$(function () {
  // nav
  $('[data-burger]').on('click', function (e) {
    e.preventDefault();
    $('[data-header]').toggleClass('open');
  }); // goTop鈕

  $('.gotop').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 400);
  });
});