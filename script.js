jQuery(document).ready(function($){
   
   $('.reflect').hover(
       function(){
           $(this).children('a').animate({
                bottom: '10px'
           });
           $(this).children('div').animate({
                top: '10px',
                opacity: 0.2
           });
       },
       function(){
           $(this).children('a').animate({
                bottom: 0
           });
           $(this).children('div').animate({
                top: 0,
                opacity: 0.8
           });
      });
      
      $('.shadow').hover(
       function(){
           $(this).children('a').animate({
                bottom: '10px'
           });
           $(this).children('div').animate({
                opacity: 0.2
           });
       },
       function(){
           $(this).children('a').animate({
                bottom: 0
           });
           $(this).children('div').animate({
                opacity: 0.8
           });
      });
});