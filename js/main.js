$(document).ready(function() {

	// Fix shimmy-grid gutter in ie7 and below
	$('html.lt-ie8 div.g.gutter div.r').boxSizingGutterFix('20px', '20px');
	$('html.lt-ie8 div.g.gutter-v div.r').boxSizingGutterFix(0, '20px');
	$('html.lt-ie8 div.g.gutter-h div.r').boxSizingGutterFix('20px', 0);

	$(window).on('load resize', function(){

		// Set shimmy-grid columns to equal height by row
		$('div.module').equalHeight();

		// Fix shimmy-grid gutter in ie7 and below
		$('html.lt-ie8 div.g').css('visibility', 'visible');
	});

});