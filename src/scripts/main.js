// Main
$(document).ready(function () {
	// Phần Slider
	$('.home-slider .owl-carousel').owlCarousel({
		loop: true,
		margin: 0,
		nav: false,
		items: 1,
		dots: true,
		autoplay: true,
		autoplayHoverPause: true,
		autoplaySpeed: 1000,
		//navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
	});
	// Phần Clients
	$('.home-clients .owl-carousel').owlCarousel({
		items: 1,
		nav: true,
		dots: false,
		loop: true,
		autoplay: true,
		autoplayHoverPause: true,
		autoplaySpeed: 1000,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive: {
			// breakpoint from 480 up
			480: {
				items: 2,
			},
			// breakpoint from 768 up
			768: {
				items: 4,
			},
			// breakpoint from 992 up
			992: {
				items: 6,
			}
		}
	});

	$('#dropdownMenuButton').on('click',() =>
	{
		$('#dropdownMenuButton').toggleClass('active')
	})
	$(window).on('scroll',() =>
	{
		if($(this).scrollTop() >= 20)
		{
			$('header').addClass('active')
		}
		else 
		{
			$('header').removeClass('active')
		}
	})
});
