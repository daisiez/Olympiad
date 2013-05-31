	$('html').addClass('withjavascript');


	$(document).ready(function(){
		
		
		// imprimer infos
		
		$("span.infos").hide();
		$("li.print a").hover(function() {
			$(this).next("span").animate({opacity: "show", top: "-75"}, "slow");
		}, function() {
			$(this).next("span").animate({opacity: "hide", top: "-85"}, "fast");
		});
		
		// datepicker
		$('.datepicker').datepicker();
		
		
	});
