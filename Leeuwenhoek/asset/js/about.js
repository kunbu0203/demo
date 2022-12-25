$(function () {
  // 成立由來
  gsap.set('[data-expand]', {
    height: 0
  });
  var originEntry = gsap.timeline();
  originEntry.to('[data-expand]', {
    duration: 1,
    height: '100%',
    opacity: 1
  }).to('[data-fade-left="origin"]', {
    duration: 0.6,
    x: 0,
    opacity: 1
  });
  ScrollTrigger.create({
    animation: originEntry,
    trigger: '.origin',
    start: 'top 70%'
  }); // 經營理念

  var philosophyEntry = gsap.timeline();
  philosophyEntry.to('[data-fade-left="philosophy"]', {
    duration: 0.6,
    x: 0,
    opacity: 1
  }).to('[data-fade="philosophy"]', {
    duration: 0.6,
    y: 0,
    opacity: 1
  });
  ScrollTrigger.create({
    animation: philosophyEntry,
    trigger: '.philosophy',
    start: 'top 70%'
  });
});