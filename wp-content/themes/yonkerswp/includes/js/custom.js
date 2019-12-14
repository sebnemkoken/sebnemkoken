jQuery(window).load(function($){
	"use strict";

	function eborLoadIsotope(){
		var $container = jQuery('#containerpage'),
			$optionContainer = jQuery('#options'),
			$options = $optionContainer.find('a[href^="#"]').not('a[href="#"]'),
			isOptionLinkClicked = false;
		
		$container.isotope({
			itemSelector : '.element',
			resizable: false,
			masonry: { columnWidth: $container.width() / 12 },
			filter: '*',
			sortBy: 'original-order',
			sortAscending: true,
			transitionDuration: '0.6s',
			layoutMode: 'masonry'
		});
		  
		jQuery(window).smartresize(function(){
			$container.isotope({
				masonry: { columnWidth: $container.width() / 12 }
			});
		});
	  
		
	
		
	}
	
	/**
	 * Load isotope conditionally, if we've got a flexslider we wait until that's ready, otherwise go straight ahead.
	 */
	if ( jQuery('.flexslider')[0] ) {
		jQuery('.flexslider').flexslider({
		animation: "slide",
		start: function(slider){
		eborLoadIsotope();
		}
	});
	} else {
		eborLoadIsotope();
	}
	
	jQuery('form').submit(function(){
		setTimeout(function(){
			$container.isotope('layout');
		}, 1000);
	});
	
	jQuery(window).trigger('resize').trigger('smartresize');
	
	
	
});

jQuery('#s').attr('placeholder','Type and hit enter...');
				


				jQuery(".br-cooment-list > li").each(function(i){
				   jQuery(this).addClass('element  clearfix col1-3 home respond grey auto centered');
				});

				jQuery(".br-cooment-list li ul.children li").each(function(i){
				   jQuery(this).removeClass('element  clearfix col1-3 home respond grey auto centered');
				});
				
				jQuery(".sub-menu").each(function(i){
				   jQuery(this).addClass('sub-nav');
				});
				
				jQuery(".wr-multi-page iframe").each(function(i){
				   jQuery(this).addClass('videos');
				});
				
				jQuery(".wr-multi-page embed").each(function(i){
				   jQuery(this).addClass('videos');
				});
				
				