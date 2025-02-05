console.clear();

// 헤더 메뉴바 스크롤시 변화
function NotScrollTop0__init() {
    var scrollTop = $(window).scrollTop();
    
    if ( scrollTop > 0 ) {
        $('.header').addClass('header-scroll');
    }
    else {
        $('.header').removeClass('header-scroll');
    };

    var scrollTop = $(window).scrollTop();
    
    if ( scrollTop > 0 ) {
        $('.m-header').addClass('m-header-scroll');
    }
    else {
        $('.m-header').removeClass('m-header-scroll');
    };
}

$(window).scroll(NotScrollTop0__init);
NotScrollTop0__init();

$(function (){
	$(".m_menu_01").click(function (){
  	$(".m_drop_01").toggle();
  });
});
$(function (){
	$(".m_menu_02").click(function (){
  	$(".m_drop_02").toggle();
  });
});
$(function (){
	$(".m_menu_03").click(function (){
  	$(".m_drop_03").toggle();
});
});
$(function (){
	$(".m_menu_04").click(function (){
  	$(".m_drop_04").toggle();
  });
});
$(function (){
	$(".m_menu_05").click(function (){
  	$(".m_drop_05").toggle();
});
});
$(function (){
	$(".m_menu_06").click(function (){
  	$(".m_drop_06").toggle();
});
});
$(function (){
	$(".m_menu_07").click(function (){
  	$(".m_drop_07").toggle();
});
});
$(function (){
	$(".m_menu_08").click(function (){
  	$(".m_drop_08").toggle();
});
});
$(function (){
	$(".m_menu_09").click(function (){
  	$(".m_drop_09").toggle();
});
});

$(function (){
  $('#sec03 .slider').slick({
    arrows:false,
    slidesToShow:4,
    autoplay:true,
    autoplaySpeed:2000,
    pauseOnHover:false,
    pauseOnFocus:false,
    responsive: [ // 반응형 웹 구현 옵션
    {  
      breakpoint: 960, //화면 사이즈 960px
      settings: {
        //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
        slidesToShow:3, 
      } 
    },
    { 
      breakpoint: 768, //화면 사이즈 768px
      settings: {	
        //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
        slidesToShow:2,
      } 
    }
  ]
  });
  $('#sec03 .arrows .xi-angle-left-thin').on('click', function(){
    $('#sec03 .slider').slick('slickPrev');
 });
 $('#sec03 .arrows .xi-angle-right-thin').on('click', function(){
  $('#sec03 .slider').slick('slickNext');
});
});

$(function (){
  $('#sec04 .slider').slick({
    dots: true,
    infinite: true,
    arrows:false,
    slidesToShow:7,
    slidesToScroll: 7,
    autoplay:true,
    autoplaySpeed:3000,
    pauseOnHover:false,
    pauseOnFocus:false,
    responsive: [
      {  
        breakpoint: 768,
        settings: {
          slidesToShow:3,
          slidesToScroll: 3,
        } 
      },
    ]
  });
});

$(function (){
  $('#sec05 .slider').slick({
    arrows:false,
    slidesToShow:2,
    autoplay:true,
    autoplaySpeed:2000,
    pauseOnHover:false,
    pauseOnFocus:false,
    responsive: [
      {  
        breakpoint: 768,
        settings: {
           slidesToShow:1,
        } 
      },
    ]
  });
  $('#sec05 .arrows .xi-angle-left-thin').on('click', function(){
    $('#sec05 .slider').slick('slickPrev');
 });
 $('#sec05 .arrows .xi-angle-right-thin').on('click', function(){
  $('#sec05 .slider').slick('slickNext');
});
});