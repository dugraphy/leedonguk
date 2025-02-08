$(function(){
//----------------------------------------




$(window).on('scroll', ()=>{
  let sct=$(window).scrollTop();
  sct > 0 ? $('.header').addClass('on') : $('.header').removeClass('on');

  sct > 350? $('.toTop').fadeIn() : $('.toTop').fadeOut()

  
})


$('.tab_menu>li').on('click', function(){
    var $this= $(this); //자기자신
    var idx=$(this).index(); //자기자신의 번호 0,1,2
    //console.log($this,idx);
    //$('.tab_content>div').eq(idx).show().siblings().hide();
    $('.tab_content>div').eq(idx).addClass('on').siblings().removeClass('on');
    $this.addClass('on').siblings().removeClass('on');
})


$('.mobile_open').on('click', function(){
    $(this).toggleClass('on');
    $('.gnb').toggleClass('on');
   });
  
  
   $('.gnb>ul>li>a').on('click', function(){
    if($('nav').hasClass('on')) {
      $(this).next().stop().slideToggle();
      $(this).parent().siblings().find('.sub').slideUp();
    }
  });

  $(".gnb").on("scroll touchmove mousewheel", function(e){
    e.preventDefault();
  });

  $(".sub").on("scroll touchmove mousewheel", function(e){
    e.stopPropagation();
  });





  $(window).on('resize', function(){
    $('.sub').removeAttr('style');
  });
  




$('.event_slider figure').eq(1).addClass('on');
$('.event_slider').slick({
arrows:false,
infinite: true,
slidesToShow: 3,
autoplay:true,
pauseOnFocus:false,
pauseOnHover:false,
responsive: [
    {  
       breakpoint: 768,
       settings: {
          slidesToShow:1 
       } 
    },
 ]
});

$('.event_slider figure').eq(3).addClass('on');
$('.event_slider').on('afterChange', function(e,s,c){
    if ($(window).width() < 768) {
        $('.event_slider figure').eq(c+1).addClass('on').siblings().removeClass('on');
    }else {
        $('.event_slider figure').eq(c+4).addClass('on').siblings().removeClass('on');
    }
    
});


$('.toTop a').on('click', e=> {
  e.preventDefault();
  $('html,body').animate({scrollTop:0})
})




$('.footer .top .link>a').on('click', function(){
    $(this).prev().stop().slideToggle();
    $(this).find('i').toggleClass('on');
    return false;
})
// ----------------------------------------
});




