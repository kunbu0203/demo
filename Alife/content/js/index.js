$(function () {
  gsap.registerPlugin(ScrollTrigger);
  gsap.set('[data-fadeIn]', {
    y: 100
  });
  $('.block').each(function (index) {
    var $thisBlock = $(this).attr('id'),
        $id = '#' + $thisBlock;

    if ($thisBlock === 'guide') {
      gsap.to($id + ' [data-fadeIn]', {
        duration: 0.8,
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: $id,
          start: 'top 40%'
        }
      });
    } else {
      gsap.to($id + ' [data-fadeIn]', {
        duration: 0.8,
        y: 0,
        opacity: 1,
        stagger: 0.4,
        scrollTrigger: {
          trigger: $id,
          start: 'top 40%'
        }
      });
    }
  });
  $('[data-collapse-btn]').on('click', function (e) {
    e.preventDefault();
    var $item = $(this).closest('[data-collapse-item]');

    if ($item.hasClass('active')) {
      $item.removeClass('active').find('[data-collapse-content]').slideUp();
    } else {
      $('[data-collapse-item]').removeClass('active');
      $('[data-collapse-content]').slideUp();
      $item.addClass('active').find('[data-collapse-content]').slideDown();
    }
  });
  $('[data-scroll]').on('click', function (e) {
    e.preventDefault();
    var val = $(this).data('scroll');
    $('html, body').animate({
      scrollTop: $(val).offset().top
    }, 500);
    $('[data-header]').removeClass('menuOpen');
  });
  $(window).scroll(function () {
    var guideTop = $('#guide').offset().top - 20,
        guideBottom = guideTop + $(window).height(),
        scrollTop = $(this).scrollTop(),
        scrollBottom = scrollTop + $(window).height();

    if (scrollTop > guideTop && scrollTop < guideBottom) {
      $('[data-header]').addClass('darkBg');
    } else {
      $('[data-header]').removeClass('darkBg');
    }

    if (scrollBottom > guideTop + 70 && scrollBottom < guideBottom + 70) {
      $('[data-float]').addClass('darkBg');
    } else {
      $('[data-float]').removeClass('darkBg');
    }

    if (scrollBottom > $(document).height() - 160) {
      $('[data-float]').addClass('hide');
    } else {
      $('[data-float]').removeClass('hide');
    }
  }).trigger('scroll');
});