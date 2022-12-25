$(function () {
  // banner
  if (isMobile()) {
    $('.banner').addClass('-touch');
  }

  ;
  gsap.to('[data-fade="banner"]', {
    duration: 0.6,
    delay: 0.3,
    y: 0,
    opacity: 1,
    stagger: 0.5,
    scrollTrigger: {
      trigger: '.banner',
      start: 'top bottom'
    }
  }); // 重新發現微生物

  var introEntry = gsap.timeline();
  introEntry.to('[data-fade-left="intro"]', {
    duration: 0.6,
    x: 0,
    opacity: 1
  }).to('[data-fade-zoom="intro"]', {
    duration: 0.6,
    delay: -0.3,
    opacity: 1,
    scale: 1,
    stagger: 0.5,
    ease: 'back.out(1.7)'
  });
  ScrollTrigger.create({
    animation: introEntry,
    trigger: '.intro-content',
    start: 'top 70%'
  }); // 創新思維 專業技術

  var totalEntry = gsap.timeline();
  totalEntry.to('[data-fade-left="total"]', {
    duration: 0.6,
    x: 0,
    opacity: 1
  }).to('[data-fade-right="total"]', {
    duration: 0.6,
    delay: -0.6,
    x: 0,
    opacity: 1
  });
  ScrollTrigger.create({
    animation: totalEntry,
    trigger: '.total-content',
    start: 'top 70%'
  });
  gsap.to('[data-fade-zoom="total"]', {
    duration: 0.6,
    delay: -0.4,
    opacity: 1,
    scale: 1,
    stagger: 0.5,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: '.total-number',
      start: 'top 80%'
    }
  }); // 數字

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
  }); // 服務流程

  gsap.to('[data-fade-left="step"]', {
    duration: 0.6,
    x: 0,
    opacity: 1,
    stagger: 0.3,
    scrollTrigger: {
      trigger: '.step-content',
      start: 'top 70%'
    }
  }); // 推薦文章

  gsap.to('[data-fade="article"]', {
    duration: 0.6,
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: '.article-content',
      start: 'top 70%'
    }
  });
});