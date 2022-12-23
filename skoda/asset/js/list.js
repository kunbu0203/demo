$(function () {
  var url = location.href;

  if (url.split("#")[1] === 'upload') {
    $('body').addClass('-popupOpen');
    $('[data-popup="form"]').addClass('-open');
  } // 照片瀑布流


  window.onload = function () {
    var $grid = $('[data-fall]').masonry({
      itemSelector: '.fall-item',
      columnWidth: '.fall-item',
      percentPosition: true,
      horizontalOrder: true
    });
    $grid.masonry('on', 'layoutComplete', function () {
      $('[data-fall]').addClass('-load');
    });
    $grid.masonry('layout');
  }; // 表單彈窗開啟


  $('[data-popup-open="form"]').on('click', function (e) {
    e.preventDefault();
    $('body').addClass('-popupOpen');
    $('[data-popup="form"]').addClass('-open');
    $('[data-header]').removeClass('-open');
  }); // ------------------------- 成功狀態示意，需更換正確程式碼 ------------------------

  $('[data-submit]').on('click', function (e) {
    e.preventDefault();
    var success = true;

    if (success) {
      // 開啟成功彈窗
      $('[data-popup="form"]').removeClass('-open'); // 關閉表單彈窗

      $('[data-popup="success"]').addClass('-open');
    } else {
      alert('錯誤訊息');
    }
  }); // ------------------------- 成功狀態示意，需更換正確程式碼 ------------------------
  // 圖片上傳預覽功能

  $('[data-upload-input]').change(function () {
    if (this.files && this.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $('[data-upload-img]').css('background-image', "url(".concat(e.target.result, ")"));
      };

      reader.readAsDataURL(this.files[0]);
      $('[data-upload]').addClass('-select');
    }
  });
});