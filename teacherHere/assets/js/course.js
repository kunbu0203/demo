$(function () {
  $('[data-anchor-btn]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $('[data-anchor-block="' + $(this).data('anchor-btn') + '"]').offset().top - 100
    }, 300);
  });
});