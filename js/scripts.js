$(document).ready(function(){

		// VARIABLES
		var header_menu_name 	= 'header-menu',
				header_menu 			= $('.' + header_menu_name),
				body 							= $("body"),
				visibility        = "in visible",
		 		backdrop = $("<div />", {
					class: "vmodal-backdrop fade"
				});
		//MENU
			//SCRIPTS
			function toggler(){
				header_menu.toggleClass('active');
			}
			$("[data-menu]").click(function(){
				var menu_href = $(this).attr("data-menu");
				$("[data-menu]").removeClass("active");
				$(this).toggleClass("active");
				toggler();
			});
			$('.anchor-menu').click(function(){
				var href = $(this).attr('href');
				$('body,html').animate({
					scrollTop: $(href).offset().top
				},2000);
				toggler();
				return false;
			});
			// function menuSwipe(){
			// 	if ( $(document).width() <= responsiveBr ) {
			// 		body.hammer().on("swiperight", function(){
			// 			toggler();
			// 		}).on("swipeleft", function(){
			// 			toggler();
			// 		});
			// 	}
			// }
			// menuSwipe();
			// $(window).resize(menuSwipe);
			
		// $(document).click(function(e){
		// 	if( header_menu.hasClass(header_menu_name + '-open') ) {
		// 		if ( ! $(e.target).is('.'+header_menu_name + ', .'+header_menu_name+"*") ) {
		// 			toggler();
		// 		}
		// 	}
		// });

		// SCROLL TO BLOCK
		$('.anchor').click(function(){
			var href = $(this).attr('href');
			$('body,html').animate({
				scrollTop: $(href).offset().top
			},2000);
			return false;
		});
		
		$('[data-modal="modal"]').click(function(){
			var thisTarget = $(this).attr("data-modal-target");
			if ( thisTarget ) {
				$(thisTarget).addClass(visibility);
				body.append(backdrop).addClass("vmodal-open");
				backdrop.addClass(visibility);
			}else{
				console.log("Need attribtue [data-modal-target].");
			}
		});
		$('[data-close="modal"]').click(function(){
			$(this).closest(".vmodal").removeClass(visibility);
			backdrop.removeClass(visibility);
			body.removeClass("vmodal-open");
		});
		$(window).click(function(e){
			if ( backdrop.length > 0 ) {
				if ( $(e.target).is(".vmodal") ) {
					$(".vmodal.in").removeClass(visibility);
					backdrop.removeClass(visibility);
					body.removeClass("vmodal-open");
					console.log("document clicked");
				}
			}
		});
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