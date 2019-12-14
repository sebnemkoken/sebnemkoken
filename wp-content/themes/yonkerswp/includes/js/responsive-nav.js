jQuery(document).ready(function(){
								
"use strict";

 if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      jQuery('body, html').addClass('touch')
    }

jQuery.fn.slideFadeToggle  = function(speed, easing, callback) {
        return this.animate({opacity: 'toggle', height: 'toggle'}, speed, easing, callback);
};



	jQuery('#menu-button').on('click', function() {
			jQuery('#main-nav ul#options').slideFadeToggle();
			jQuery('#menu-button').toggleClass('open');
			return false;
	});
	
	if ( jQuery(window).width() < 980) {
	jQuery('#main-nav ul#options li a').not('.sub-page #main-nav ul#options li a').on('click', function() {
			jQuery('#main-nav ul#options').hide();
			jQuery('#menu-button').removeClass('open');
			return false;
	});
	}
	
	
});	
	
	
	

	