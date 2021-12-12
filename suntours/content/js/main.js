$(function () {
  AOS.init({
    duration: 1000,
    once: true
  });
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
  $('[data-more-btn]').on('click', function (e) {
    e.preventDefault();
    var $this = $(this),
        $com = $this.closest('[data-more]'),
        $cards = $com.find('[data-more-cards]');
    $cards.removeClass('hiddenMore');
    $this.addClass('hidden');
  });
  $('[data-gotop]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 300);
  });
  $('[data-popup-action]').on('click', function (e) {
    e.preventDefault();
    $('[data-popup]').fadeToggle();
  });
  $('[data-messenger]').on('click', function (e) {
    e.preventDefault();
    $('.fb-root').trigger('click');
  });
});