$(function () {
  $('[data-fade="card"]').each(function (index) {
    var $target = $(this).closest('.cardGroup-item');
    gsap.to($(this), {
      duration: 0.6,
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: $target,
        start: 'top 85%'
      }
    });
  });
});