$(function () {
  // 進場
  gsap.registerPlugin(ScrollTrigger); // gsap.from('[data-fade]', {
  //     duration: 0.7,
  //     y: -40,
  //     rotate: -10,
  //     opacity: 0,
  //     transformOrigin: 'left bottom',
  //     stagger: 0.3,
  //     scrollTrigger: {
  //         trigger: '.banner',
  //         markers: true,
  //         start: 'top bottom',
  //         end: 'bottom top',
  //     }
  // });

  gsap.from('[data-fade="banner"]', {
    duration: 0.6,
    y: -50,
    opacity: 0,
    stagger: 0.5,
    scrollTrigger: {
      trigger: '.banner',
      start: 'top bottom'
    }
  });
  var introEntry = gsap.timeline();
  introEntry.from('[data-fade-left="intro"]', {
    duration: 0.6,
    x: -50,
    opacity: 0
  }).from('[data-fade-zoom="intro"]', {
    duration: 0.6,
    delay: -0.3,
    opacity: 0,
    scale: 0.5,
    stagger: 0.5,
    ease: 'back.out(1.7)'
  });
  ScrollTrigger.create({
    animation: introEntry,
    trigger: '.intro-content',
    start: 'top 70%'
  });
  var totalEntry = gsap.timeline();
  totalEntry.from('[data-fade-left="total"]', {
    duration: 0.6,
    x: -50,
    opacity: 0
  }).from('[data-fade-right="total"]', {
    duration: 0.6,
    delay: -0.6,
    x: 50,
    opacity: 0
  });
  ScrollTrigger.create({
    animation: totalEntry,
    trigger: '.total-content',
    start: 'top 70%'
  });
  gsap.from('[data-fade-zoom="total"]', {
    duration: 0.6,
    delay: -0.4,
    opacity: 0,
    scale: 0.5,
    stagger: 0.5,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: '.total-number',
      start: 'top 80%'
    }
  });
  var counter = {
    num: 0
  };
  $('[data-counter]').each(function (index, item) {
    gsap.to(counter, {
      duration: 2,
      num: $(item).data('counter'),
      onUpdate: function onUpdate() {
        $(item).text(counter.num.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
      },
      scrollTrigger: {
        trigger: '.total-number',
        start: 'top 80%'
      }
    });
  });
  gsap.from('[data-fade-left="step"]', {
    duration: 0.6,
    x: -50,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
      trigger: '.step-content',
      start: 'top 70%'
    }
  }); // banner滾動視差

  var floatTop = gsap.timeline({
    defaults: {
      ease: 'none'
    }
  });
  floatTop.from('[data-float="top"]', {
    y: 200,
    duration: 1
  }).to('[data-float="top"]', {
    y: -200,
    duration: 1
  });
  ScrollTrigger.create({
    animation: floatTop,
    trigger: '.tranBanner',
    start: 'top bottom',
    end: 'bottom top',
    scrub: true
  });
  gsap.from('[data-fade="article"]', {
    duration: 0.6,
    y: -50,
    opacity: 0,
    scrollTrigger: {
      trigger: '.article-content',
      start: 'top 70%'
    }
  });
});