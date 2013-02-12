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

// Sets all columns to same height by grid or by row.
(function($) {
	$.fn.equalHeight = function(equalize) {
		if (equalize === true) {
			return this.height(Math.max.apply(this,$.map(this,function(e){return $(e).height()})));
		} else {
			var currentTallest = 0,
				currentRowStart = 0,
				rowDivs = [],
				$el = null,
				topPosition = 0;
			this.css('height', 'inherit').each(function() {
				$el = $(this);
				topPosition = $el.offset().top;
				if (currentRowStart !== topPosition) {
					// we just came to a new row.  Set all the heights on the completed row
					for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
						rowDivs[currentDiv].height(currentTallest);
					}
					// set the variables for the new row
					rowDivs = []; // empty the array
					currentRowStart = topPosition;
					currentTallest = $el.height();
					rowDivs.push($el);
				} else {
					// another div on the current row.  Add it to the list and check if it's taller
					rowDivs.push($el);
					currentTallest = Math.max(currentTallest, $el.height());
				}
				// do the last row
				for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
					rowDivs[currentDiv].height(currentTallest);
				}
			});
		}
	}
})(jQuery);