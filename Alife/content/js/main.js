$('[data-burger]').on('click', function (e) {
  e.preventDefault();
  $('[data-header]').toggleClass('menuOpen');
});