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

	$('#contact button').click(function(){
		$.ajax({
			url: 'mail.php',
			type: 'POST',
			data: {
				name: $('#formName').val(),
				email: $('#formEmail').val(),
				message: $('#formMessage').val()
			},
			success: function(){
				$('#contact').find('h3').after('<div class="row" style="display:none"><div class="col-sm-12"><div class="alert alert-success" role="alert">Message envoyé avec succès</div></div></div>');
				$('#contact').find('.row').first().slideDown();
			}
		});

	});

})(jQuery)