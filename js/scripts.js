$(document).ready(function(){

		// VARIABLES
		var body 							= $("body"),
				visibility        = "in visible",
				respPoint         = 1200,
		 		backdrop = $("<div />", {
					class: "vmodal-backdrop fade"
				});

		// SCROLL TO BLOCK
		$('.anchor').click(function(){
			var href = $(this).attr('href');
			$('body,html').animate({
				scrollTop: $(href).offset().top
			},2000);
			return false;
		});
		function toggleClassSpecial(elementClick, classSpecial){
			$(elementClick).click(function(){
				$(this).toggleClass(classSpecial);
			});
		}
		function responsiveMenuClick(elementClick, blockVisible){
			$(elementClick).click(function(){
				$(".header-resp-wrap > div").not(blockVisible).slideUp("slow");
				$(blockVisible).slideToggle("slow");
			});
		}
		toggleClassSpecial(".header-resp-btn", "active");
		toggleClassSpecial(".header-resp-search-btn", "active");

		responsiveMenuClick(".header-resp-btn", ".header-resp-menu");
		responsiveMenuClick(".header-resp-search-btn", ".header-resp-search");
		function swapMenu(){
			if ( $(window).width() < respPoint ) {
				$(".navigation-menu").appendTo(".header-resp-menu");
				$(".header-search").appendTo(".header-resp-search");
			}else{
				$(".navigation-menu").appendTo(".navigation-pc");
				$(".header-search").appendTo(".header-search-pc");
			}
		}
		swapMenu();
		$(window).resize(swapMenu);

		$(".navigation-menu li").each(function(){
			if ( $(this).children(".navigation-submenu").length > 0 ) {
				$(this).addClass("has-submenu");
			}
		});
		$(".header-resp-menu li.has-submenu > a").click(function(e){
			$(this).next().slideToggle("slow");
			e.preventDefault();
		});
		$(".footer-btn").click(function(){
			$(this).toggleClass("active");
			$(".footer-menu").slideToggle("slow");
			if ( $(this).hasClass("active") ) {
				$(this).text("Скрыть меню");
			}else{
				$(this).text("Показать меню");
			}
		});
		// $('[data-modal="modal"]').click(function(){
		// 	var thisTarget = $(this).attr("data-modal-target");
		// 	if ( thisTarget ) {
		// 		$(thisTarget).addClass(visibility);
		// 		body.append(backdrop).addClass("vmodal-open");
		// 		backdrop.addClass(visibility);
		// 	}else{
		// 		console.log("Need attribtue [data-modal-target].");
		// 	}
		// });
		// $('[data-close="modal"]').click(function(){
		// 	$(this).closest(".vmodal").removeClass(visibility);
		// 	backdrop.removeClass(visibility);
		// 	body.removeClass("vmodal-open");
		// });
		// $(window).click(function(e){
		// 	if ( backdrop.length > 0 ) {
		// 		if ( $(e.target).is(".vmodal") ) {
		// 			$(".vmodal.in").removeClass(visibility);
		// 			backdrop.removeClass(visibility);
		// 			body.removeClass("vmodal-open");
		// 			console.log("document clicked");
		// 		}
		// 	}
		// });
		//DEVELOPE
		// var widthDevice = $(window).width();
		// $(".development").html(widthDevice);
		$("#slider").owlCarousel({
			items: 1,
			loop: true,
			nav: true,
			navText: ["", ""]
		});
});	