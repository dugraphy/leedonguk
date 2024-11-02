$(function(){
//----------------------------------------


$('.step01>li>a').on('click', function(){
   if($(window).width() < 769) {
   
   $(this).next().slideToggle();
   $(this).parent().siblings().find('.step02').slideUp();
   }
 
 });

 
 $(window).on('resize', function(){
  $('.step02').removeAttr('style')
})
 
$('.visual_slider').slick({
  arrows:true,
  prevArrow:"<i class='xi-angle-left-min'></i>",
  nextArrow:"<i class='xi-angle-right-min'></i>",
});

$('.text li').on('click', function(){
  // $(this).addClass('on').siblings().removeClass('on');
  let idx=$(this).index();
  $('.visual_slider').slick('slickGoTo', idx);
});

$('.visual_slider').on('afterChange', function(e,s,c){
  $('.text li').eq(c).addClass('on').siblings().removeClass('on');
})



$('.support_slide').slick({
  arrows:false,
  fade:true,
});

$('.campaign_slider').slick({
  arrows:false,
  autoplay:true,
  autoplaySpeed:1000,
  slidesToShow: 1,
  dots:true,
});




//----------------------------------------
});




