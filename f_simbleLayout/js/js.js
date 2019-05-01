/*global $, alert ,console  */

$(document).ready(function(){
   'use strict';
   
//make the header be the full window 
$(".header").height($(window).height());



$(".header .arrow").click(function(){
   
   $("html , body").animate({
      scrollTop:$(".features").offset().top
      },500);
   });
   
   //show the hidden boxes in ourwork

   $(".ourwork .showmore").click(function(){
      $(".ourwork .hidden").fadeIn(1000,function(){
         $(".ourwork .button").fadeOut();
   
         $(".ourwork .container").append('<button class="button bradius showless">SHOW LESS</button>');
            });
        });
   
   
   $(".ourwork .showless").click(function(){
      console.log("ok");
      $(".ourwork .hidden").fadeOut(1000,function(){
         $(".ourwork .showless").fadeOut();
         $(".ourwork .container").append("<button class='button bradius showmore' >SHOW MORE</button>");
            });
        });
   
   
var left_arrow=$(".fa-caret-left"),
      right_arrow=$(".fa-caret-right");
   
   
   
//check
function arrow_controller(){
   
   if($(".testimonials .item:first").hasClass("active")){
      left_arrow.fadeOut(500);
      }else{
       left_arrow.fadeIn(500);  
      }
   
   $(".testimonials .item:last").hasClass("active")? right_arrow.fadeOut(500) : right_arrow.fadeIn(500);
   }
   
arrow_controller();
   
right_arrow.click(function(){
   $(".testimonials .active").fadeOut(function(){
      $(this).removeClass("active").next().addClass("active").fadeIn();
      arrow_controller();
      });
   
   });
   
   
   
left_arrow.click(function(){
   $(".testimonials .active").fadeOut(function(){
      $(this).removeClass("active").prev().addClass("active").fadeIn();
      arrow_controller();
      });
   
   });
   
$(".header .works").click(function(){
   
   $("html , body").animate({
      scrollTop:$(".ourwork").offset().top
      },500);
   });
   
  $(".header .co").click(function(){
   
   $("html , body").animate({
      scrollTop:$(".contact").offset().top
      },1000);
   }); 
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   });