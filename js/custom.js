window.onload = function() {
	$('a.internal').click(function() {
		$('html, body').animate({
			scrollTop: $(event.currentTarget.attributes.href.value).offset().top - 50
		});
	});
};