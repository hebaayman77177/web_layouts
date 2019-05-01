$(function (){
    'use strict';
    $(".info li").click(function(){
        $(this).addClass("selected").siblings().removeClass("selected");
        $(".info .content p").hide();
        $(".info .c"+$(this).attr('class').split(/\s+/)[0]).show();
    });
});