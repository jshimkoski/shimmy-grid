// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Fix shimmy-grid gutter in ie7 and below.
(function($) {
	var fixWidths = [],
		fixRun = false;

	$.fn.ieGutterFix = function(vertical, horizontal) {
		var self = this;
		if (self.length) {
			self.css({'margin': 0, 'padding': 0, 'padding-bottom': vertical }).children()
				.css({ 'margin': 0, 'padding': 0, 'padding-left': horizontal }).each(function(i){

				var el = $(this),
					parent = el.parent(),
					width = el.width();

				if (fixRun === false) {
					var pWidth = parent.width(),
						percent = 100*width/pWidth + "%";

					fixWidths[i] = percent;
				}

				if (parent.is(':last-child')) {
					parent.css('padding-bottom', 0);
				}

				if (el.is(':first-child')) {
					el.css('padding-left', 0);
				}

				width = el.width(fixWidths[i]).width() - 1;

				el.outerWidth(width);

			});

			fixRun = true;
		}
	}
})(jQuery);

// Sets all columns to same height globally or by parent row.
(function($) {
	$.fn.equalHeight = function(equalize) {
		var self = this;
		if (equalize === true) {
			return self.height('100%').height(Math.max.apply(this,$.map(this,function(e){return $(e).height()})));
		} else {
			var currentTallest = 0,   
				currentRowStart = 0,
				rowDivs = [],
				el = null,
				topPosition = 0;
			self.height('100%').each(function() {
				el = $(this);
				topPosition = el.offset().top;
				if (currentRowStart !== topPosition) {
					// we just came to a new row.  Set all the heights on the completed row
					for (var currentDiv = 0, len = rowDivs.length; currentDiv < len; currentDiv++) {
						rowDivs[currentDiv].height(currentTallest);
					}
					// set the variables for the new row
					rowDivs = []; // empty the array
					currentRowStart = topPosition;
					currentTallest = el.height();
					rowDivs.push(el);
				} else {
					// another div on the current row.  Add it to the list and check if it's taller
					rowDivs.push(el);
					currentTallest = Math.max(currentTallest, el.height());
				}
				// do the last row
				for (var currentDiv = 0, len = rowDivs.length; currentDiv < len; currentDiv++) {
					rowDivs[currentDiv].height(currentTallest);
				}
			});
		}
	}
})(jQuery);

// shimmy-grid implementation
var shimmy = shimmy || {};
shimmy.Grid = function(options) {
	var self = this;
	self.options = $.extend({
		ieGutterEl: $('html.lt-ie8 div.g.gutter div.r'),
		ieGutterVEl: $('html.lt-ie8 div.g.gutter-v div.r'),
		ieGutterHEl: $('html.lt-ie8 div.g.gutter-h div.r'),
		ieGutterV: 20,
		ieGutterH: 20,
		moduleEl: $('div.module'),
		isLtIE8: $('html').hasClass('lt-ie8'),
		useEqualHeight: false,
		equalizeAll: false
	}, options || {});
}
shimmy.Grid.prototype.init = function(options) {
	var self = this,
		o = $.extend(self.options, options || {});

	// Fix shimmy-grid gutter in ie7 and below
	if (o.isLtIE8) {
		o.ieGutterEl.ieGutterFix(o.ieGutterV, o.ieGutterH);
		o.ieGutterVEl.ieGutterFix(o.ieGutterV, 0);
		o.ieGutterHEl.ieGutterFix(0, o.ieGutterH);
	}
	// Set shimmy-grid columns to equal height by row
	if (o.useEqualHeight) o.moduleEl.equalHeight(o.equalizeAll);
}