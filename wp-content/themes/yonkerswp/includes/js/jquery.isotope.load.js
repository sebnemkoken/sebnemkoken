jQuery(window).load(function($){
	"use strict";

	function eborLoadIsotope(){
		var jQuerycontainer = jQuery('#container'),
			jQueryoptionContainer = jQuery('#options'),
			jQueryoptions = jQueryoptionContainer.find('a[href^="#"]').not('a[href="#"]'),
			isOptionLinkClicked = false;
		
		jQuerycontainer.isotope({
			itemSelector : '.element',
			resizable: false,
			filter: '*',
			transitionDuration: '0.6s',
			layoutMode: 'packery'
		});

		
		  if( jQuery('body').hasClass('video-detail') )
		  jQuerycontainer.isotope({
			transformsEnabled: false,
		});	
			
		jQuery(window).smartresize(function(){
			jQuerycontainer.isotope({
				masonry: { columnWidth: jQuerycontainer.width() / 12 }
			});
		});
	  
		jQueryoptions.click(function(){
		    var jQuerythis = jQuery(this),
		    	href = jQuerythis.attr('href');
		    	
		    if ( jQuerythis.hasClass('selected') ) {
		    	return;
		    } else {
		    	jQueryoptions.removeClass('selected');
		    	jQuerythis.addClass('selected');
		    }

		    jQuery.bbq.pushState( '#' + href );
		    isOptionLinkClicked = true;
		    return false;
		});
	
		jQuery(window).bind( 'hashchange', function( event ){
			var theFilter = window.location.hash.replace( /^#/, '');
			
			if( theFilter == false )
				theFilter = 'home';
				
			jQuerycontainer.isotope({
				filter: '.' + theFilter
			});
			
			if ( isOptionLinkClicked == false ){
				jQueryoptions.removeClass('selected');
				jQueryoptionContainer.find('a[href="#'+ theFilter +'"]').addClass('selected');
			}
			
			isOptionLinkClicked = false;
		}).trigger('hashchange');
		

		
	}
	
	/**
	 * Load isotope conditionally, if we've got a flexslider we wait until that's ready, otherwise go straight ahead.
	 */
	if ( jQuery('.flexslider')[0] ) {
		jQuery('.flexslider').flexslider({
		animation: "slide",
		start: function(slider){
		    setTimeout(function(){ eborLoadIsotope(); }, 420);
		}
	});
	} else {
		eborLoadIsotope();
	}
	
	jQuery('form').submit(function(){
		setTimeout(function(){
			jQuerycontainer.isotope('layout');
		}, 1000);
	});
	
	jQuery(window).trigger('resize').trigger('smartresize');
	
});
 
 
 jQuery('.splink').click(function(){
    jQuery("html, body").animate({ scrollTop: 0 }, 1000);
 });
 
 jQuery(".options-wr li a").click(function () {
        jQuery(".options-wr li a").removeClass("selected");
        jQuery(this).addClass("selected");     
    }); 
 
 