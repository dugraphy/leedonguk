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
// main_visual (slick)
$(document).ready(function(){
    $('.main_slider').slick({
        dots: true,
        horizontal: true,
        arrows: false,
        // slidesToShow: 1,
        // slidesToScroll: 1
    });
});

// clinic (slick)
// $(document).ready(function(){
//   $('.clinic_slider').slick({
//       dots: true,
//       horizontal: true,
//       arrows: true,
//       autoplay : true,
// 			autoplaySpeed : 3000,
//       fade: true
//   });
// });

// laser (slick) 메인
$(document).ready(function(){
  $('#m_laser .clinic_laser').slick({
    dots: false,
    arrows: false,
    infinite: true,
    centerMode: true,
    autoplay : true,
		autoplaySpeed : 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});

// main - 김우일 원장님 연구 활동 
$(document).ready(function(){
$(".thesis_btn button").click(function(){
    $(".thesis").fadeIn();
});
$(".thesis .close_btn").click(function(){
    $(".thesis").fadeOut();
});
});

// event_slider (slick)
$(document).ready(function(){
  $('.event_slider').slick({
      dots: true,
      horizontal: true,
      arrows: false,
      // slidesToShow: 1,
      // slidesToScroll: 1
  });
});


// sub - 장비 롤링 (slick)
$(document).ready(function(){
  $('#laser .clinic_laser').slick({
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay : true,
		autoplaySpeed : 3000
      // responsive: [
      //   {
      //     breakpoint: 1060,
      //     settings: {
      //       arrows: false,
      //       centerMode: true,
      //       slidesToShow: 1
      //     }
      //   }
      // ]
    });
});


//sub - 보유장비소개
$(function(){
  $('.tabcontent > div').hide();
  $('.tabnav a').click(function () {
    $('.tabcontent > div').hide().filter(this.hash).fadeIn();
    $('.tabnav a').removeClass('active');
    $(this).addClass('active');
    return false;
  }).filter(':eq(0)').click();
  });


  //sub - 이벤트
  $(function(){
    $('#event ul.tabs li').click(function(){
      var tab_id = $(this).attr('data-tab');
  
      $('#event ul.tabs li').removeClass('current');
      $('.tab-con .tab-content').removeClass('current');
  
      $(this).addClass('current');
      $("#"+tab_id).addClass('current');
    })
  })