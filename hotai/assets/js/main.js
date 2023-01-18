$(function () {
  // 進場
  AOS.init({
    duration: 800,
    once: true
  }); // 任務頁籤-切換填寫表單

  $('[data-mission]').on('click', function (e) {
    e.preventDefault();
    var isFour = $(this).data('mission') === 4;
    $('[data-form="1,2,3"]').toggleClass('hidden', isFour);
    $('[data-form="4"]').toggleClass('hidden', !isFour);
    $('html, body').animate({
      scrollTop: $('[data-form-block]').offset().top
    }, 300);
  }); // 生日下拉

  $('[data-birth]').dropdownDatepicker({
    wrapperClass: 'birth-wrap',
    minAge: 18,
    maxAge: 100,
    monthFormat: 'short',
    monthShortValues: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
    monthSuffixes: false,
    daySuffixes: false,
    yearLabel: '年',
    monthLabel: '月',
    dayLabel: '日'
  });
  $('[data-birth-wrap] select').on('change', function () {
    setTimeout(function () {
      $('[data-birth-wrap] select').each(function (index, item) {
        $(item).toggleClass('has-value', $(item).val() != '');
      });
    }, 100);
  }); // ------------------------ 僅示意成功與失敗狀態顯示，需更換成正確程式碼 start ------------------------

  $('[data-send]').on('click', function (e) {
    e.preventDefault();
    var isFour = $(this).closest('[data-form]').data('form') === 4;

    if (isFour) {
      alert('很抱歉，您尚有資料未完成，請再次確認後送出，謝謝！');
      $(this).closest('[data-form]').find('.input').addClass('is-error');
      $(this).closest('[data-form]').find('.checkGroup').addClass('is-error');
      $(this).closest('[data-form]').find('.form-terms .checkbox').addClass('is-error');
    } else {
      alert('已收到您的申請，我們將儘快安排專員與您聯絡，謝謝！');
    }
  }); // ------------------------ 僅示意成功與失敗狀態顯示，需更換成正確程式碼 end ------------------------
});