jQuery(document).ready(function(){
"use strict";
	jQuery('#submit').click(function(){

		var action = jQuery('#contactform').attr('action');

		jQuery("#message").fadeOut(200,function() {
		jQuery('#message').hide();

 		jQuery('#submit')
			.attr('disabled','disabled');

		jQuery.post(action, {
			name: jQuery('#name').val(),
			email: jQuery('#email').val(),
			phone: jQuery('#phone').val(),
			comments: jQuery('#comments').val()
		},
			function(data){
				document.getElementById('message').innerHTML = data;
				jQuery('#message').fadeIn(200);
				jQuery('.hide').hide(0);
				jQuery('#submit').removeAttr('disabled');
//				if(data.match('success') != null) jQuery('#contactform').fadeOut('slow');

			}
		);

		});

		return false;

	});

});