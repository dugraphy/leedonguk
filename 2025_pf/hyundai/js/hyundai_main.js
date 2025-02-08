$(function(){
//----------------------

$(window).width(function() {
  var didScroll;
  var lastScrollTop = 0;
  var delta = 1;

  $(window).scroll(function(event) {
     didScroll = true;
  });

  setInterval(function() {
     if (didScroll) {
        hasScrolled();
        didScroll = false;
     }
  }, 100);

  function hasScrolled() {
     var st = $(this).scrollTop();

     // Make sure they scroll more than delta
     if (Math.abs(lastScrollTop - st) <= delta)
        return;

     // If they scrolled down and are past the navbar, add class .nav-up.
     // This is necessary so you never see what is "behind" the navbar.
     if (st < 0) {
        $('.header').removeClass('nav-down').removeClass('nav-up').removeClass('nav-hover-out');
     } else if (st > lastScrollTop && st > 0) {
        // Scroll Down
        $('.header').removeClass('nav-down').addClass('nav-up').removeClass('nav-hover-out');
     } else {
        // Scroll Up
        $('.header').removeClass('nav-up').addClass('nav-down').removeClass('nav-hover-out');
     }
     lastScrollTop = st;
  }
});



//-----------------------

















$('#visual .main_slider').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:2000,
    pauseOnHover:false,
    pauseOnFocus:false,
});



$('.vehicle').slick({
    arrows:true,
    prevArrow:"<i class='xi-angle-left-min'></i>",
    nextArrow:"<i class='xi-angle-right-min'></i>",
    slidesToShow: 3,
    pauseOnHover:false,
    pauseOnFocus:false,
    asNavFor:'#section04 .des_slider',
});

//$(".vehicle").eq(0).slick("slickPlay"); <- 해당영역 오토플레이와 비슷
$("#section03 li").on("click", function(){
    let idx=$(this).index();
    $(this).addClass("on").siblings().removeClass("on");
    $(".vehicle").eq(idx).addClass("on").siblings().removeClass("on");
    $(".vehicle").eq(idx).slick("slickPlay").siblings().slick("slickPause")
});

$('.vehicle_slider .element').eq(4).addClass('on');
$('.vehicle').on('afterChange', function(e,s,c){
  $(this).find('.element').eq(c+4).addClass('on').siblings().removeClass('on');
});



$('#section04 .des_slider').slick({
  arrows:false,
  // autoplay:false,
  slidesToShow: 1,
  pauseOnHover:false,
  pauseOnFocus:false,
  asNavFor:'.vehicle',
});


//$(".des_slider").eq(0).slick("slickPlay"); <- 해당영역 오토플레이와 비슷
$("#section03 li").on("click", function(){
    let idx=$(this).index();
    $(this).addClass("on").siblings().removeClass("on");
    $(".des_slider").eq(idx).addClass("on").siblings().removeClass("on");
    $(".des_slider").eq(idx).slick("slickPlay").siblings().slick("slickPause")
});


$('#toTop').on('click', function(){
  $('html, body').animate({scrollTop:0},600)
});
//----
$(window).on('scroll', function(){
  var sct=$(window).scrollTop();
//   if(set>400) {
//       $('#toTop').fedeIn()
//   }else{
//       $('#toTop').fedeOut()
//   }
  sct>400 ? $('#toTop').fadeIn()  :   $('#toTop').fadeOut();
  $('#scroll_banner').css({top:300+sct})
});


$('#link select').on('change', function(){
  var link=$(this).val();
  if(link) window.open(link)
});


//----------------------    
});
