$(function () {
  gsap.to('[data-fade-zoom="contact"]', {
    duration: 0.6,
    scale: 1,
    opacity: 1,
    stagger: 0.5,
    scrollTrigger: {
      trigger: '.contact',
      start: 'top 70%'
    }
  });
});