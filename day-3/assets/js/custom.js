// Custom JavaScript
$(document).ready(function () {
	"use strict";

	// sticky header
	function headerSticky() {
		var windowPos = $(window).scrollTop();
		if (windowPos > 20) {
			$('.fixed-top').addClass("on-scroll");
			$('.light-nav-on-scroll').addClass("menu-light").removeClass("menu-dark");
			$('.dark-nav-on-scroll').addClass("menu-dark").removeClass("menu-light");
		} else {
			$('.fixed-top').removeClass("on-scroll");
			$('.light-nav-on-load').addClass("menu-light").removeClass("menu-dark");
			$('.dark-nav-on-load').addClass("menu-dark").removeClass("menu-light");
		}
	}
	headerSticky();
	$(window).scroll(headerSticky);

	// main menu
	$('.main-navigation .sf-menu').superfish({
		delay: 100,
		animation: { opacity: 'show', height: 'show' },
		speed: 300,
	});

	// menudropdown auto align      
	var wapoMainWindowWidth = $(window).width();
	$('.sf-menu ul li').mouseover(function () {
		// checks if third level menu exist         
		var subMenuExist = $(this).find('.sub-menu').length;
		if (subMenuExist > 0) {
			var subMenuWidth = $(this).find('.sub-menu').width();
			var subMenuOffset = $(this).find('.sub-menu').parent().offset().left + subMenuWidth;

			// if sub menu is off screen, give new position
			if ((subMenuOffset + subMenuWidth) > wapoMainWindowWidth) {
				var newSubMenuPosition = subMenuWidth;
				$(this).find('.sub-menu').css({
					left: -newSubMenuPosition,
					top: '0',
				});
			}
		}
	}); // menu ends

	// PROJECT SLIDER
	var swiper = new Swiper('.project-slider', {
		loop: true,
		slidesPerView: "auto",
		spaceBetween: 30,
		centeredSlides: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		breakpoints: {
			640: {
				slidesPerView: 1,
				spaceBetween: 0,
			},
			768: {
				slidesPerView: 1,
				spaceBetween: 30,
			},
			1024: {
				slidesPerView: 1,
				spaceBetween: 30,
			},
		}
	});

	// SLIDER
	var mainslider = new Swiper('.slider-main', {
		spaceBetween: 0,
		autoplay: {
			delay: 9500,
			disableOnInteraction: false,
		},
		loop: true,
		direction: 'vertical',
		loopedSlides: 1,
		thumbs: {
			swiper: slidercontent
		}
	});


	// SLIDER THUMBS
	var slidercontent = new Swiper('.slider-content', {
		spaceBetween: 10,
		centeredSlides: true,
		slidesPerView: 1,
		touchRatio: 0.2,
		slideToClickedSlide: true,
		loop: true,
		navigation: {
			nextEl: '.button-next',
			prevEl: '.button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction',
		},
	});

	if ($(".slider-main")[0]) {
		mainslider.controller.control = slidercontent;
		slidercontent.controller.control = mainslider;
	} else { }

	// DATA BACKGROUND IMAGE
	var pageSection = $("*");
	pageSection.each(function (indx) {
		if ($(this).attr("data-background")) {
			$(this).css("background", "url(" + $(this).data("background") + ")");
		}
	});

	// DATA BACKGROUND COLOR
	var pageSection = $("*");
	pageSection.each(function (indx) {
		if ($(this).attr("data-background")) {
			$(this).css("background", $(this).data("background"));
		}
	});



	// scrollspy
	$('body').scrollspy({
		offset: 120,
		target: '.scrollspy'
	});

	// nav scroll	
	if ($('#header-global').length) {
		var navoffset = $('#header-global').height();
		$('.nav a[href^="#"], .scroll-link').on("click", function (e) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: $($(this).attr('href')).offset().top - navoffset - 37
			}, "slow", "easeInSine");
		});
	} else {
		$('.scroll-link').on("click", function (e) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: $($(this).attr('href')).offset().top
			}, "slow", "easeInSine");
		});
	}

	// responsive header nav scroll
	var mnavoffset = $('.responsive-header').height();
	var scroll = new SmoothScroll('.responsive-header-menu a', {
		speed: 500,
		speedAsDuration: true,
		offset: mnavoffset + 15
	});

	// responsive menu
	$('.main-navigation .nav').slicknav({
		label: "",
		prependTo: '.responsive-header-menu',
		closedSymbol: '',
		openedSymbol: '',
		allowParentLinks: "true",
		menuButton: '#menu-button',
		closeOnClick: true
	});
	// responsive scrollspy
	$('.slicknav_nav').addClass("scrollspy")

	// responsive menu button
	$("#menu-button").on("click", function (e) {
		$(".slicknav_nav").slideToggle();
	});

	// responsive menu hamburger
	var $hamburger = $("#menu-button");
	$hamburger.on("click", function (e) {
		$hamburger.toggleClass("is-active");
	});

	// testimonial
	$('.testimonial-style-center').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 4000,
		fade: true,
		speed: 1000
	});

	// testimonial
	$('.testimonial-style-left').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 4000,
		fade: true,
		speed: 1000
	});

	// img slider 3col
	$('.img-slider-3col').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 4000,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
		]
	});

	// img slider 2col
	$('.img-slider-2col').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 4500,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
		]
	});

	// img slider 1col
	$('.img-slider-1col').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 4500,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
		]
	});

	// wow animations
	if ($(window).outerWidth() >= 767) {
		new WOW().init({
			mobile: false,
		});
	}

	// parallax
	if ($(window).outerWidth() >= 767) {
		$(".parallax").parallaxie({
			speed: 0.60,
			size: 'auto',
		});
		$(".parallax.parallax-slow").parallaxie({
			speed: 0.30,
		});
	}

	// video popup
	$('.video-popup').venobox();

	// Popup video
	$(".popup-video").magnificPopup({
		disableOn: 320,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 150,
		preloader: false,
		fixedContentPos: false
	});

	// Popup image
	$('.popup-image').magnificPopup({
		type: 'image',
	});

	// Popup gallery
	$('.popup-gallery').magnificPopup({
		type: 'image',
		mainClass: 'mfp-fade',
		removalDelay: 150,
		gallery: {
			enabled: true
		},
	});

	//Contact form
	$(function () {
		var v = $("#contactform").validate({
			submitHandler: function (form) {
				$(form).ajaxSubmit({
					target: "#result",
					clearForm: true
				});
			}
		});
	});
	//To clear message field on page refresh (you may clear other fields too, just give the 'id to input field' in html and mention it here, as below)
	$('#contactform #message').val('');

	//Quote form
	$(function () {
		var v = $("#quoteform").validate({
			submitHandler: function (form) {
				$(form).ajaxSubmit({
					target: "#quote-result",
					clearForm: true
				});
			}
		});
	});
	//To clear message field on page refresh (you may clear other fields too, just give the 'id to input field' in html and mention it here, as below)
	$('#quoteform #message').val('');

}); // document ready

// on load
$(window).on('load', function () {
	// preloader
	$('.preloader').delay(400).fadeOut(500);

	// portfolio		
	$('.portfolio-grid').imagesLoaded(function () {
		$('.portfolio-grid').isotope(
			{
				itemSelector: '.portfolio-item',
				masonry: {},
			});
	});
	$('.filter-nav a').on('click', function () {
		$('.filter-nav a').removeClass('active');
		$(this).addClass('active');
		var selector = $(this).attr('data-filter');
		$('.portfolio-grid').isotope({
			filter: selector
		});
		return false;
	});



}); // close on load