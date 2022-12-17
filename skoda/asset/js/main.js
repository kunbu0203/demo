$(function () {
  // nav
  $('[data-burger]').on('click', function (e) {
    e.preventDefault();
    $('[data-header]').toggleClass('-open');
  }); // popup close

  $('[data-popup-close]').on('click', function (e) {
    e.preventDefault();
    $('body').removeClass('-popupOpen');
    $('[data-popup]').removeClass('-open');
  });
});