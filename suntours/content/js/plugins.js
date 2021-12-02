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
})(360); // tab


(function ($, undefined) {
  'use strict';

  var pluginName = 'tab';
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
      var $btn = this.$element.find('[data-tab-btn]'),
          $content = this.$element.find('[data-tab-content]'),
          url = location.href;

      if (url.indexOf('?') != -1) {
        var arr = url.split('?'),
            arrTab = arr[1].split('='),
            initTab = Number(arrTab[1]) - 1;
        $btn.removeClass('active');
        $btn.eq(initTab).addClass('active');
        $content.removeClass('active');
        $content.eq(initTab).addClass('active');
      }

      $btn.off('click.tab').on('click.tab', function (e) {
        e.preventDefault();
        var $this = $(this),
            btnIndex = $btn.index($this);
        $btn.removeClass('active');
        $this.addClass('active');
        $content.removeClass('active');
        $content.eq(btnIndex).addClass('active');
      });
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

  $('[data-tab]').tab();
})(jQuery); // collapse


(function ($, undefined) {
  'use strict';

  var pluginName = 'collapse';
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
      var $btn = this.$element.find('[data-collapse-btn]');
      $($btn).on('click', function (e) {
        e.preventDefault();
        var $com = $(this).closest('[data-collapse]'),
            $content = $com.find('[data-collapse-content]');

        if (!$com.hasClass('active')) {
          $content.attr('style', 'display:none;');
          $com.addClass('active');
          $content.slideDown();
        } else {
          $content.slideUp(function () {
            $content.removeAttr('style');
            $com.removeClass('active');
          });
        }
      });
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

  $('[data-collapse]').collapse();
})(jQuery);