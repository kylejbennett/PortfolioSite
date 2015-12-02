$(document).ready(function(){


	$(window).scroll(function (event) {
        var sc = $(window).scrollTop();
        console.log(sc);

        if (sc > 600){
        	$(".nav").hide();
        	$(".nav-clone").css("visibility", "visible");
        } else {
        	$(".nav").show();
        	$(".nav-clone").css("visibility", "hidden");
        }

        if (sc < 600) {
        	$(".check-it-out").hide('slow');
        } else {
        	$(".check-it-out").show('slow');
        }

        if (sc < 1500){	
        	$(".contact-me").hide('slow');
        } else {
        	$(".contact-me").show('slow');
        }
    });
});

