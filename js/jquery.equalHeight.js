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