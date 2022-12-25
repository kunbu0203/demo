$(function () {
  // 區塊
  $('[data-fade]').each(function (index) {
    var $this = "[data-fade=\"".concat(index, "\"]");
    gsap.to($this, {
      duration: 0.6,
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: $this,
        start: 'top 70%'
      }
    });
  }); // 區塊內box

  $('[data-fade-zoom]').each(function (index) {
    var $this = "[data-fade-zoom=\"".concat(index, "\"]");
    gsap.to($this, {
      duration: 0.6,
      scale: 1,
      opacity: 1,
      scrollTrigger: {
        trigger: $this,
        start: 'top 70%'
      }
    });
  }); // 球

  gsap.to('[data-fade-zoom="ball"]', {
    duration: 0.6,
    scale: 1,
    opacity: 1,
    stagger: 0.5,
    scrollTrigger: {
      trigger: '.ball',
      start: 'top 70%'
    }
  });
});