$(function () {
  // 代謝體學
  gsap.set('[data-expand]', {
    width: 0
  });
  var gradientEntry = gsap.timeline();
  gradientEntry.to('[data-fade="gradient"]', {
    duration: 0.6,
    y: 0,
    opacity: 1
  }).to('[data-expand]', {
    duration: 1,
    width: 'calc(100% + 50vw - 50%)',
    opacity: 1
  });
  ScrollTrigger.create({
    animation: gradientEntry,
    trigger: '.introList.-gradient',
    start: 'top 70%'
  }); // 培養體學

  var horEntry = gsap.timeline();
  horEntry.to('[data-fade-left="hor"]', {
    duration: 0.6,
    x: 0,
    opacity: 1
  }).to('[data-fade-right="hor"]', {
    duration: 0.6,
    delay: -0.6,
    x: 0,
    opacity: 1
  });
  ScrollTrigger.create({
    animation: horEntry,
    trigger: '.introList.-hor',
    start: 'top 70%'
  }); // 定植小鼠

  gsap.to('[data-fade="mouse"]', {
    duration: 0.6,
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: '.introList.-mouse',
      start: 'top 70%'
    }
  });
});