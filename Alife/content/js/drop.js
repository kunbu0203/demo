var tl = gsap.timeline({
  onComplete: myFunction
});
var H = $(window).height() - 160,
    fromH = H - 40;
tl.to('.wine', {
  opacity: 1,
  duration: 0.4
}).to('.wine', {
  ease: 'bounce.out',
  y: 'random(' + fromH + ', ' + H + ')',
  rotation: 'random(-180, 180)',
  duration: 2,
  stagger: {
    amount: 0.4,
    from: "random"
  }
});
tl.pause();

function myFunction() {
  tl.kill();
}