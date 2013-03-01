$(function() {

	var sg = new shimmy.Grid({useEqualHeight: true});
	sg.init();

	$(window).on('resize', function() {
		sg.init();
	});

});