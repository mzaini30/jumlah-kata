$('.form').on('submit', function(){
	event.preventDefault()
})
$('.input').on('keyup', function(){
	if ($('.input').val() == ''){
		$('.output').html('0')
	} else {
		$('.output').html($('.input').val().trim().split(/\s+/).length)
	}
})