$(function () {
  // 進場
  gsap.registerPlugin(ScrollTrigger);
  gsap.set('[data-fade]', {
    y: -50
  });
  gsap.set('[data-fade-up]', {
    y: 50
  });
  gsap.set('[data-fade-left]', {
    x: -50
  });
  gsap.set('[data-fade-right]', {
    x: 50
  });
  gsap.set('[data-fade-zoom]', {
    scale: 0.5
  });
  gsap.set('[data-fade-down]', {
    y: -50
  }); // insideBanner

  gsap.to('[data-fade-up]', {
    duration: 0.6,
    y: 0,
    opacity: 1
  }); // nav

  $('[data-burger]').on('click', function (e) {
    e.preventDefault();
    $('[data-header]').toggleClass('open');
  });
});

function isMobile() {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
}

;