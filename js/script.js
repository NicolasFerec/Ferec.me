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
			easing: 'cubic-bezier(0.6, -0.28, 0.735, 0.045)'
		},
		load: {
			'sort': 'random'
		}
	});

	$('#contact button[type="submit"]').click(function(e){
		e.preventDefault();
		var $form = $(this).parents('form');
		$.ajax({
			url: 'mail.php',
			type: 'POST',
			data: {
				'name': $form.find('#formName').val(),
				'email': $form.find('#formEmail').val(),
				'message': $form.find('#formMessage').val()
			},
			statusCode:{
				200: function(data){
					$('body').append(data)
				}
			}
		});

	});

})(jQuery)