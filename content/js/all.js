// Avoid `console` errors in browsers that lack a console.
(function () {
  var method;

  var noop = function noop() {};

  var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'];
  var length = methods.length;
  var console = window.console = window.console || {};

  while (length--) {
    method = methods[length]; // Only stub undefined methods.

    if (!console[method]) {
      console[method] = noop;
    }
  }
})(); // Place any jQuery/helper plugins in here.


(function (targetWidth) {
  var deviceWidth = screen.width;
  var ratio = deviceWidth / targetWidth;
  var viewport = document.querySelector('meta[name="viewport"]');

  if (ratio < 1) {
    viewport.setAttribute('content', 'width=device-width, initial-scale=' + ratio + ', minimum-scale=' + ratio + ', maximum-scale=' + ratio + ', user-scalable=yes');
  }
})(360); // scrollbar


(function ($, undefined) {
  'use strict';

  var pluginName = 'scrollbar';
  var defaults = {};

  function Plugin(element, options) {
    this.element = element;
    this.$element = $(element);
    this.options = $.extend(true, {}, defaults, options, this.$element.data());
    delete this.options[pluginName];
    this._defaults = defaults;
    this._name = pluginName;
    this.init();
    this.$element.data('plugin_' + pluginName, this);
  }

  $.extend(Plugin.prototype, {
    init: function init() {
      if (!isMobile()) {
        this.$element.overlayScrollbars({
          overflowBehavior: {
            x: 'hidden'
          }
        });
      }
    }
  });

  $.fn[pluginName] = function (methodOrOptions) {
    return this.each(function () {
      var plugin = $.data(this, 'plugin_' + pluginName) || new Plugin(this, methodOrOptions);

      if (typeof methodOrOptions === 'string' && plugin[methodOrOptions]) {
        plugin[methodOrOptions].apply(plugin, Array.prototype.slice.call(arguments, 1));
      }
    });
  };

  $('[data-scrollbar]').scrollbar();
})(jQuery);

function isMobile() {
  try {
    document.createEvent('TouchEvent');
    return true;
  } catch (e) {
    return false;
  }
} // 選單


$('[data-burger]').on('click', function (e) {
  e.preventDefault();
  $('body').toggleClass('menuOpen');
  $('[data-menu]').fadeToggle();
}); // 彈窗

$('[data-popup-btn]').on('click', function (e) {
  e.preventDefault();
  $('body').toggleClass('popupOpen');
  $('[data-popup]').fadeToggle();
});
$(function () {
  var timestamp = Date.parse(new Date()) / 1000;
  var tmp = ["_timestamp" + timestamp]; // 将数据排序并合并成字符串

  var parameters = tmp.sort().join("");
  var key = 'base64:2mGP3FvTT4TfwN7ogF6jahMveYS92MDY//DiC0XAJyw='; // 进行MD5加密

  var sign = md5(parameters + key).toString();
  console.log('_timestamp=', timestamp, '_sign=', sign);
  var url = new URL("http://ferri.com.tw/api/menu");
  var headers = {
    "Content-Type": "application/json",
    "Accept": "application/json"
  };
  var body = {
    "_timestamp": timestamp,
    "_sign": sign
  };
  fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body)
  }).then(function (response) {
    return response.text();
  }).then(function (result) {
    return console.log(result);
  }).catch(function (error) {
    return console.log('error', error);
  });
});