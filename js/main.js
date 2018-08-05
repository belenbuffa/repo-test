$(document).ready(function() {

	if (window.location.href.indexOf('index') > 0) {
		//Slider
		$('.bxslider').bxSlider({
			mode: 'fade',
			captions: true,
			slideWidth: 1200
		});
	}

	if (window.location.href.indexOf('index') > 0) {
		//Posts
		var posts = [
			{
				title: 'Prueba de Titulo 1',
				date: moment().format('[Publicado el día] D [de] MMMM [de] YYYY [a las] HH:mm [hs.]'),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula ex et ornare venenatis. Phasellus at tellus orci. Aenean quis arcu ac elit sagittis aliquam. Phasellus vitae posuere nisl, quis scelerisque ante. Integer commodo eu elit id hendrerit. Vivamus maximus mi finibus, pulvinar risus a, blandit nisi. Donec eget magna et odio scelerisque efficitur. Aliquam vestibulum, sem feugiat volutpat maximus, ipsum dui dapibus odio, tincidunt viverra leo risus id arcu.'
			},
			{
				title: 'Prueba de Titulo 2',
				date: moment().format('D [de] MMMM [de] YYYY HH:mm:ss'),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula ex et ornare venenatis. Phasellus at tellus orci. Aenean quis arcu ac elit sagittis aliquam. Phasellus vitae posuere nisl, quis scelerisque ante. Integer commodo eu elit id hendrerit. Vivamus maximus mi finibus, pulvinar risus a, blandit nisi. Donec eget magna et odio scelerisque efficitur. Aliquam vestibulum, sem feugiat volutpat maximus, ipsum dui dapibus odio, tincidunt viverra leo risus id arcu.'
			},
			{
				title: 'Prueba de Titulo 3',
				date: moment().format('D [de] MMMM [de] YYYY HH:mm:ss'),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula ex et ornare venenatis. Phasellus at tellus orci. Aenean quis arcu ac elit sagittis aliquam. Phasellus vitae posuere nisl, quis scelerisque ante. Integer commodo eu elit id hendrerit. Vivamus maximus mi finibus, pulvinar risus a, blandit nisi. Donec eget magna et odio scelerisque efficitur. Aliquam vestibulum, sem feugiat volutpat maximus, ipsum dui dapibus odio, tincidunt viverra leo risus id arcu.'
			},
			{
				title: 'Prueba de Titulo 4',
				date: moment().format('D [de] MMMM [de] YYYY HH:mm:ss'),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula ex et ornare venenatis. Phasellus at tellus orci. Aenean quis arcu ac elit sagittis aliquam. Phasellus vitae posuere nisl, quis scelerisque ante. Integer commodo eu elit id hendrerit. Vivamus maximus mi finibus, pulvinar risus a, blandit nisi. Donec eget magna et odio scelerisque efficitur. Aliquam vestibulum, sem feugiat volutpat maximus, ipsum dui dapibus odio, tincidunt viverra leo risus id arcu.'
			}						
		];

		posts.forEach((item, index) => {
			var post = `
					<article class="post">
						<h2>${item.title}</h2>
						<span class="fecha">${item.date}</span>
						<p>${item.content}</p>
						<a href="#" class="button-more">Leer más...</a>
					</article>		
			`;
			$('#posts').append(post);

		});
	}

	//Selector de temas
	var theme = $('#theme');
	$('#to-green').click(function() {
		theme.attr('href', 'css/green.css');
	});
	$('#to-red').click(function() {
		theme.attr('href', 'css/red.css');
	});
	$('#to-blue').click(function() {
		theme.attr('href', 'css/blue.css');
	});

	//Subir
	$('.subir').click(function(event) {
		event.preventDefault();

		$('html, body').animate({
			scrollTop: 0
		}, 500);

		return false;
	});

	//Login falso
	$('#login form').submit(function() {
		var form_name = $('#form_name').val();
		localStorage.setItem('form_name', form_name);
	});

	var form_name = localStorage.getItem('form_name');

	if (form_name != null && form_name !== 'undefined') {
		var about = $('#about p');
		about.html('<br><strong>Bienvenido, </strong>'+ form_name + ' ');
		about.append('<a id="logout" href="#">Cerrar sesión</a>');
		
		$('#login').hide();

		$('#logout').click(function() {
			localStorage.clear();
			location.reload();
		});
	}

	if (window.location.href.indexOf('about') > 0) {
		$('#acordeon').accordion();
	}

	if (window.location.href.indexOf('reloj') > 0) {
		setInterval(function() {
					var reloj = moment().format('HH:mm:ss');
					$('#reloj').html(reloj);
		}, 1000);
	}

	//Validacion
	if (window.location.href.indexOf('formulario') > 0) {

		$('form input[name="fecha"]').datepicker({
			dateFormat: 'dd/mm/yy'
		});

	  	$.validate({
    		lang: 'es',
    		errorMessagePosition: 'top',
    		scrollToTopError: true
  		});
	}

});