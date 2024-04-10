$(function () {
    //------------------------------------------------


//--- 큰 틀(풀페이지) 제작 시작
    var $this=$(".section");
    var $this_s=$(".slide");
    let sideBar=$('nav li')
    $this.eq(0).addClass("on");
    $(".main").fullpage({
        anchors: ['cover', 'portfolio', 'class', 'profile'],
        menu: '.menu',
        controlArrows: false,
        loopHorizontal: false, 
        slidesNavigation: true,
        scrollHorizontally: true,
        scrollHorizontallyKey: 'YWx2YXJvdHJpZ28uY29tX01mU2MyTnliMnhzU0c5eWFYcHZiblJoYkd4NVNRcg==',
        afterLoad: function(origin,destination){
            if(destination.index==1) {
                $this_s.eq(0).addClass("on");
            }
            $this.eq(destination.index).addClass("on").siblings().removeClass("on");
            let idx=destination.index;
            sideBar.eq(idx).addClass("on").siblings().removeClass('on');
        },
        
        afterSlideLoad: function(section, origin, destination, direction) {
            $this_s.eq(destination.index).addClass("on").siblings().removeClass("on");
        },
    });

    //--- 슬라이드에 훨이벤트 달기 시작
    $(".slide").on("mousewheel", function (e) {
        if (e.originalEvent.wheelDelta / 120 > 0) {
            fullpage_api.moveSlideLeft();
        }
        else {
            fullpage_api.moveSlideRight();
        }
    });
    //--- 슬라이드에 훨이벤트 달기 시작
//--- 큰 틀 제작 끝

//--- 문자타이핑효과 시작
    new Typed('.slogan_text',{
        strings: ['Good design is line'],
        typeSpeed: 100,
        // loop: true,
        // loopCount: Infinity,
    });
//--- 문자타이핑효과 시작

//--- 스타일가이드 열기 시작
    //--- 첫번째 스타일가이드
    $(".sg01").click(function(){   
        $(".guide01").show();  
    });
     //--- 두번째 스타일가이드
     $(".sg02").click(function(){   
        $(".guide02").show();  
    });
     //--- 세번째 스타일가이드
     $(".sg03").click(function(){   
        $(".guide03").show();  
    });
     //--- 네번째 스타일가이드
     $(".sg04").click(function(){   
        $(".guide04").show();  
    });
     //--- 네번째 스타일가이드
     $(".sg05").click(function(){   
        $(".guide05").show();  
    });
//--- 스타일가이드 열기 끝

//--- 스타일가이드 닫기 시작 
    $(".guide>i").click(function(){   
        $(".guide").hide();
    });
//--- 스타일가이드 닫기 끝

//--- 스타일가이드 열면 스크롤 동작멈춤 시작
    $(".sg_open").on("click",function(){
        fullpage_api.setAllowScrolling(false);
    });
//--- 스타일가이드 열면 스크롤 동작멈춤 끝

//--- 스타일가이드 열면 스타일가이드만 스크롤 동작 시작
    $(".guide").on("scroll touchmove mousewheel", function(e){
        e.stopPropagation();
      });
//--- 스타일가이드 열면 스타일가이드만 스크롤 동작 끝 

//--- 스타일가이드 닫으면 스크롤 동작 시작
    $(".guide>i").on("click",function(){
        fullpage_api.setAllowScrolling(true);
    });    
//--- 스타일가이드 닫으면 스크롤 동작 끝 

//--- pf03 슬라이더 동작 시작
$(".class .slider").slick({
    slidesToShow:3,
    autoplay:true,
    dots:true,
    prevArrow:"<div class='prev'></div>",
    nextArrow:"<div class='next'></div>",
    speed:1000,
    responsive:[
        {
            breakpoint:768,
            settings:{
                slidesToShow:1,
            }
        },
    ]
});
//-- pf03 슬라이더 동작 끝

//-- 다단메뉴 동작 시작
$('.cover_btn').on('click touchmove', function(){
    $('.cover').fadeToggle();
});
//-- 다단메뉴 동작 끝

//-- 메뉴 클론 시작
let cloneMenu = $('nav>ul').clone();
    $('.cover').append(cloneMenu);
//-- 메뉴 클론 끝    


//-- 이동했을때 닫히는 이벤트 시작
$('.cover a').on('click touchmove', function(){
    $('.cover').fadeOut();
});
//-- 이동했을때 닫히는 이벤트 끝

//-- 다단메뉴 열면 스크롤 못하게 하는 이벤트 시작
$('.cover').on('scroll wheel touchmove', function(){
    return false;
});
//-- 다단메뉴 열면 스크롤 못하게 하는 이벤트 끝

$(".kakao_btn").click(function(){   
    $(".kakao_popup").show();  
});   
$(".kakao_popup>i").click(function(){   
    $(".kakao_popup").hide();
});
$(".kakao_btn").on("click",function(){
    fullpage_api.setAllowScrolling(false);
});
$(".kakao_popup>i").on("click",function(){
    fullpage_api.setAllowScrolling(true);
}); 

//------------------------------------------------
})