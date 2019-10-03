(function ($) {
	// "use strict";
	$(document).ready(function() {
		/*
		|-----------------------------------------------
		| AwalCarousel Activation
		|-----------------------------------------------
		*/
		 $(".banner-slides").owlCarousel({
		 	items:1,
		 	nav:true,
		 	dots:false,
		 	autoplay:true,
		 	loop:true,
		 	mouseDrag: false,
            touchDrag: false,
		 });

		 $(".banner-slides").on("translate.owl.carousel", function() {
		 	$(".single-slide-item h2, .single-slide-item p, .single-slide-item a").removeClass('animated fadeInUp').css("opacity","0");
		 });

		 $(".banner-slides").on("translated.owl.carousel", function() {
		 	$(".single-slide-item h2, .single-slide-item p, .single-slide-item a").addClass('animated fadeInUp').css("opacity","1");
		 });

		 // Testimonial Slider
		 $(".work-slider, .testimonial-slider, .team-slider").owlCarousel({
		 	items:1,
		 	nav:false,
		 	dots:true,
		 	autoplay:true,
		 	loop:true,
		 });

		/*
		|-----------------------------------------------
		| MagnificPopup Activation
		|-----------------------------------------------
		*/

		 $(".gallery-lightbox").magnificPopup({
		 	type:'image',
		 	gallery:{
		 		enabled:true,
		 	}
		 });

		 /*
		|-----------------------------------------------
		| Mobile Menu
		|-----------------------------------------------
		*/
		 $("ul#navigation").slicknav({
			label: '',
			prependTo: '.responsive-menu-wrap',
			closedSymbol: '&#10095;',
			openedSymbol: '&#10094;'
		});

		/*
		|-----------------------------------------------
		| Fixed header JS
		|-----------------------------------------------
		*/

		$(window).scroll(function(){
		    $scrolling = $(this).scrollTop();
		    if ($scrolling >= 200){
		        $('.header-bottom-area').addClass('fixed-header')
		    }else{
		        $('.header-bottom-area').removeClass('fixed-header')
		    }
		});

		/*
		|-----------------------------------------------
		| ScrollUp JS
		|-----------------------------------------------
		*/

		$(function () {
			$.scrollUp({
		        scrollName: 'scrollUp', // Element ID
		        scrollDistance: 300, // Distance from top/bottom before showing element (px)
		        scrollFrom: 'top', // 'top' or 'bottom'
		        scrollSpeed: 300, // Speed back to top (ms)
		        easingType: 'linear', // Scroll to top easing (see http://easings.net/)
		        animation: 'fade', // Fade, slide, none
		        animationSpeed: 200, // Animation in speed (ms)
		        scrollTrigger: false, // Set a custom triggering element. Can be an HTML string or jQuery object
						//scrollTarget: false, // Set a custom target element for scrolling to the top
		        scrollText: '<i class="fa fa-angle-up"></i>', // Text for element, can contain HTML
		        scrollTitle: false, // Set a custom <a> title if required.
		        scrollImg: false, // Set true to use image
		        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
		        zIndex: 2147483647 // Z-Index for the overlay
			});
		});

		new WOW().init();

		$(".builder-site-preloader-wrap").fadeOut(500);
	});

}(jQuery));