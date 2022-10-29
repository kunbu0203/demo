$(function () {
  // goTop鈕
  $('.gotop').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 400);
  });
});