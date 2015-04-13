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
	});

	$('#home').parallax("center", 0.5);

	$('.portfolio').mixItUp({
	    animation: {
			duration: 400,
			effects: 'fade translateZ(-360px) stagger(34ms)',
			easing: 'ease'
		},
		load: {
			'sort': 'sort:asc'
		}
	});

})(jQuery)