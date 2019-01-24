(function ($) {
 "use strict";
/*--------------------------
	scrollUp
---------------------------- */	
	$.scrollUp({
	    scrollText: '<i class="fa fa-angle-double-up"></i>',
	    easingType: 'linear',
	    scrollSpeed: 900,
	    animation: 'fade'
	}); 
/*--------------------------
	venobox
---------------------------- */	
	$(".venobox").venobox(); 
/*---------------------
	TOP Menu Stick
--------------------- */
	var s = $("#sticker");
	var pos = s.position();					   
	$(window).on('scroll',function() {
		var windowpos = $(window).scrollTop();
		if (windowpos > pos.top) {
		s.addClass("stick");
		} else {
			s.removeClass("stick");	
		}
	});
/*----------------------------
 	charity-shop-carousel
------------------------------ */  
  $(".charity-shop-carousel").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 4,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:['<img src="img/indicator/left_button.png" alt="">','<img src="img/indicator/right_button.png" alt="">'],
      itemsDesktop : [1199,4],
	  itemsDesktopSmall : [980,3],
	  itemsTablet: [768,2],
	  itemsMobile : [767,1],
  });
/*----------------------------
 	you-may-lyk-carousel
------------------------------ */  
  $(".you-may-lyk-carousel").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 4,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,4],
	  itemsDesktopSmall : [980,3],
	  itemsTablet: [768,3],
	  itemsMobile : [767,1],
  });
/*----------------------------
 	you-may-lyk-carousel-2
------------------------------ */  
  $(".you-may-lyk-carousel-2").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 4,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,4],
	  itemsDesktopSmall : [980,3],
	  itemsTablet: [768,3],
	  itemsMobile : [767,1],
  });
/*----------------------------
 	you-may-lyk-carousel-3
------------------------------ */  
  $(".you-may-lyk-carousel-3").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 4,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	  itemsDesktopSmall : [980,3],
	  itemsTablet: [768,2],
	  itemsMobile : [767,1],
  });
/*----------------------------
 	testimonial-carousel
------------------------------ */   
  $(".testimonial-carousel").owlCarousel({
      autoPlay: false, 
	  slideSpeed:500,
	  pagination:false,
	  navigation:true,	  
      items : 1,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:['<img src="img/indicator/left_button.png" alt="">','<img src="img/indicator/right_button.png" alt="">'],
	  singleItem:true
  });
/*----------------------------
 	related-post-carousel
------------------------------ */   
  $(".related-post-carousel").owlCarousel({
      autoPlay: false, 
	  slideSpeed:500,
	  pagination:false,
	  navigation:true,	  
      items : 3,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,3],
	  itemsDesktopSmall : [980,3],
	  itemsTablet: [768,2],
	  itemsMobile : [479,1],
  });
  /*-------------------------
  showlogin toggle function
--------------------------*/
	 $( "#showlogin" ).on("click", function() {
        $( "#checkout-login" ).slideToggle(900);
     }); 
	
/*-------------------------
  showcoupon toggle function
--------------------------*/
	 $( "#showcoupon" ).on("click", function() {
        $( "#checkout_coupon" ).slideToggle(900);
     });
	 
/*-------------------------
  Create an account toggle function
--------------------------*/
	 $( "#cbox" ).on("click", function() {
        $( "#cbox_info" ).slideToggle(900);
     });
	 
/*-------------------------
  Create an account toggle function
--------------------------*/
	 $( "#ship-box" ).on("click", function() {
        $( "#ship-box-info" ).slideToggle(1000);
     });
	 
/*-------------------------
  Fashion toggle function
--------------------------*/
	 $( "#xtraangle" ).on("click", function() {
        $( "#fnstglinot" ).slideToggle(1000);
     });	

 /*----------------------------
 price-slider active
------------------------------ */  
	  $( "#slider-range" ).slider({
	   range: true,
	   min: 10,
	   max: 15000,
	   values: [ 10, 15000 ],
	   slide: function( event, ui ) {
		$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
	   }
	  });
	  $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
	   " - $" + $( "#slider-range" ).slider( "values", 1 ) );  
/*----------------------------
	wow js active
------------------------------ */
 	new WOW().init();
/*----------------------------
	mixitup js active
------------------------------ */
 	$("#portfolio-mixitup").mixItUp();
 /*----------------------------
	elevateZoom
------------------------------ */  
 	$(".first-img").elevateZoom({
		zoomWindowWidth:560,
		zoomWindowHeight:800
 	});
/*----------------------------
	jQuery MeanMenu
------------------------------ */
	jQuery("nav#dropdown").meanmenu();



 

 
})(jQuery); 