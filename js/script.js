(function($){
	$('#top-nav').onePageNav({
		currentClass: 'active',
		changeHash: true,
		scrollSpeed: 500
	});

	$('.navbar-brand').click(function(e){
		e.preventDefault();
		$(window).scrollTo(0, {
			duration: 500
		});
	})
})(jQuery)