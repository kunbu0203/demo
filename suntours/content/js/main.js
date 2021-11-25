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
});