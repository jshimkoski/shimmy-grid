$(document).ready(function() {

	$(window).on('load resize', function(){

		// Fix shimmy-grid gutter in ie7 and below
		$('html.lt-ie8 div.g.gutter div.r').ieGutterFix(20, 20);
		$('html.lt-ie8 div.g.gutter-v div.r').ieGutterFix(20, 0);
		$('html.lt-ie8 div.g.gutter-h div.r').ieGutterFix(0, 20);

		// Set shimmy-grid columns to equal height by row
		$('div.module').equalHeight();

		// Fix shimmy-grid gutter in ie7 and below
		$('html.lt-ie8').css('visibility', 'visible');

	});

});