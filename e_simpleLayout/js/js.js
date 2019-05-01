/*global $, alert ,console  */

$(document).ready(function(){
   'use strict';
   /////////////at the beginning////////////////////////
   
   $(".header").height($(window).height());//adjust header height

  
   
   
   
   ///////////////when resizing/////////////////////////
   $(window).resize(function(){
      $(".header").height($(window).height());
        });
      
   
   
   //smooth scroll to div
   $(".navbar li a").click(function(){
      $("html ,body").animate({
         scrollTop:$("#" + $(this).data('value')).offset().top
         },1000);
      });
   
   
   
   
   
   
   //////////////////////////when clicking///////////////////////
   // add the active calss
   $(".links li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
    });
   
  
  
   
         

   //trigger mix it up
   window.$("#Container").mixItUp();
   
   // chang the project li to active if click
   $(".projects li").click(function(){
      $(this).addClass('selected').siblings().removeClass('selected');
      });
   
   //triger nicescroll
  
   $("body").niceScroll({
      cursorcolor: "#1abc9c",
      cursoropacitymax: 0.2,
      cursorborder:'none',
      cursorwidth: "10px"
     
   });
   
});












