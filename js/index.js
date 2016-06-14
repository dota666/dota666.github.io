$(function(){
	$('#skills li').on('mouseenter','img',function(){
		$(this).addClass('animated tada');
	})
	$('#skills li').on('mouseleave','img',function(){
		$(this).removeClass('animated tada');
	})


	// $('.gallery a').Chocolat();
	$('#da-thumbs > li').each( function(){
		$(this).hoverdir();
	})
})