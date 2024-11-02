$(function(){
//----------------------



//-------메인슬라이더 바

var mS=$(".visual_slider").slick({
  autoplay:true,
  arrows:false,
  pauseOnHover:false,
  dots:true,
});

$('.main_slider .sbar2 span').css({width:100});

mS.on('beforeChange', function(e,s,c,n){
    $('.main_slider .sbar2').removeClass('animation_active');
});
mS.on('afterChange', function(e,s,c){
    $('.main_slider .btn li').eq(c).addClass('animation_active')
    .siblings().removeClass('animation_active');

    $('.main_slider .sbar2 span').css({width:100*(c+1)})

});

$('#main_visual .btn li').on('click', function(){
    var idx=$(this).index();
    mS.slick('slickGoTo', idx)
});

//------------슬로건 슬라이더

var contentSlider01=$(".content_slider").slick({
  arrows:false,
  autoplay:true,
  autoplaySpeed:0,
  //pauseOnHover:false,
  pauseOnFocus:false,
  dots:false,
  speed:10000,
  centerMode: true,
  variableWidth: true,
  cssEase:"linear",
});  


var contentItem=$(".content_slider");
contentItem.eq(3).addClass("on")
contentSlider01.on("afterChange", function(event,slick,current){
  contentItem.eq(current+3).addClass("on").siblings().removeClass("on");
});




  




//----------- 모바일 다단메뉴

$('.xi-bars').on('click', function(){
  $(this).toggleClass('on');
  $('.gnb').toggleClass('on');
 });


 $('.gnb>ul>li>a').on('click', function(){
  if($('nav').hasClass('on')) {
    $(this).next().stop().fadeToggle();
    $(this).parent().siblings().find('.depth02').fadeOut();
  }
});


$('html, body').css({'overflow': 'hidden', 'height': '100%'});
$('.xi-bars').on('scroll touchmove mousewheel', function(e) {
  e.preventDefault();
  e.stopPropagation();
  return false;
});

$('html, body').css({'overflow': 'auto', 'height': '100%'});
$('.xi-bars').off('scroll touchmove mousewheel');





$(window).on('resize', function(){
  $('.depth02').removeAttr('style');
});




//----------- 서치메뉴
$('.right_menu .xi-search').on('click', function(){
  $('.search_background').show();
});

$('.search .xi-close').on('click', function(){
  $('.search_background').hide();
});

$('.right_menu .xi-search').on('click', function(){
  $('.search').toggleClass('on');
  $(this).toggleClass('on');
});

$('.xi-close').on('click', function(){
  $('.search').toggleClass('on');
  $(this).toggleClass('on');
});


$('.logo_slider').slick({
  arrows:false,
  autoplay:true,
  infinite: true,
  slidesToShow: 9,
  slidesToScroll: 1,
  autoplaySpeed:500,
  dots:false,
  pauseOnHover:false,
  pauseOnFocus:false,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
  ]
});

/* 화살표 함수 */
const label = document.querySelector('.label');
const options = document.querySelectorAll('.group');

// 클릭한 옵션의 텍스트를 라벨 안에 넣음
const handleSelect = (item) => {
  label.parentNode.classList.remove('active');
  label.innerHTML = item.textContent;
}
// 옵션 클릭시 클릭한 옵션을 넘김
options.forEach(option => {
	option.addEventListener('click', () => handleSelect(option))
})

// 라벨을 클릭시 옵션 목록이 열림/닫힘
label.addEventListener('click', () => {
  if(label.parentNode.classList.contains('active')) {
  	label.parentNode.classList.remove('active');
  } else {
  	label.parentNode.classList.add('active');
  }
});





//-----------------------

});