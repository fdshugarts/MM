(function ($) {
"use strict";

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
$('.toggle-menu').click(function(){
	$('.exo-menu').toggleClass('display');
	
 });

 
 	 
/* header_sticky */
 $(window).on('scroll',function() {
   var scroll = $(window).scrollTop();
   if (scroll < 150) {
    $("#header-sticky").removeClass("scroll-header");
   }else{
    $("#header-sticky").addClass("scroll-header");
   }
 });
 
/* Client Slider */
	$(".warp-slider").owlCarousel({
		autoplay:false,
		smartSpeed: 600,
		margin: 0,
		items: 1,
		loop:true,
		dots:true,
		nav:false,
		navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
		responsive:{
			0:{
				items:1
			},
			767:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});

 
  
})(jQuery);
	 





