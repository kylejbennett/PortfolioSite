$(document).ready(function(){
	$(".nav-clone").hide();

	$(window).scroll(function (event) {
        var sc = $(window).scrollTop();
        console.log(sc);

        if (sc > 600){
        	$(".nav").hide();
        	$(".nav-clone").show();
        } else {
        	$(".nav").show();
        	$(".nav-clone").hide();
        }

        if (sc < 700) {
        	$(".check-it-out").hide('slow');
        } else if (sc > 1200){
        	$(".check-it-out").hide('slow');
        } else if (sc > 2100){	
        	$(".check-it-out").show('slow');
        } else if (sc > 2600){	
        	$(".check-it-out").hide('slow');
        } else {
        	$(".check-it-out").show('slow');
        }
    });
});