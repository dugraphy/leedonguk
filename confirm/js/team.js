$(function () {
    $(window).on('scroll', function(){
        var sct=$(window).scrollTop();
        //---var, let: 변수값 const: 상수값(변하지않는 값)
        sct > 50 ? $('#header').addClass('on') : $('#header').removeClass('on'); // 상황 조건부
        sct > 900 ? $('.sec02 .title').addClass('on') : $('.sec02 .title').removeClass('on'); // 상황 조건부
        sct > 1200 ? $('.sec02 .on-01').addClass('on') : $('.sec02 .on-01').removeClass('on'); // 상황 조건부
        sct > 1500 ? $('.sec02 .on-02').addClass('on') : $('.sec02 .on-02').removeClass('on'); // 상황 조건부
        sct > 1800 ? $('.sec02 .on-03').addClass('on') : $('.sec02 .on-03').removeClass('on'); // 상황 조건부
        sct > 2100 ? $('.sec02 .on-04').addClass('on') : $('.sec02 .on-04').removeClass('on'); // 상황 조건부
        sct > 2400 ? $('.sec02 .on-05').addClass('on') : $('.sec02 .on-05').removeClass('on'); // 상황 조건부
        sct > 2700 ? $('.sec02 .on-06').addClass('on') : $('.sec02 .on-06').removeClass('on'); // 상황 조건부
    });

    $('.sec03 .cont .slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [ // 반응형 웹 구현 옵션
            { 
                breakpoint: 768, //화면 사이즈 768px
                settings: {	
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: 1,
                    centerMode: true,
                } 
            }
        ]
      });

    $(document).ready(function () {
        $(".sec03 .cont .slider .icon").removeClass('on'); // 모든 'on' 제거
        for (let i = 0; i < 3; i++) { // 처음 3개의 요소에 'on' 추가
            $(".sec03 .cont .slider .icon").eq(i+6).addClass('on');
        }
    });
    
    // 슬라이드 전환 시 'on' 클래스 업데이트
    $('.sec03 .cont .slider').on('afterChange', function (e, s, c) {
        $(".sec03 .cont .slider .icon").removeClass('on'); // 모든 'on' 제거
    
        // 현재 인덱스부터 다음 3개의 요소에 'on' 추가
        for (let i = 0; i < 3; i++) {
            $(".sec03 .cont .slider .icon").eq(c+6 + i).addClass('on');
        }
    });

    var confirmSlider=$(".confirm_slider").slick({
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

      
      var contentItem=$(".confirm_slider");
      contentItem.eq(3).addClass("on")
      confirmSlider.on("afterChange", function(event,slick,current){
        contentItem.eq(current+3).addClass("on").siblings().removeClass("on");
      });

    $('.sec07 .cont .icon').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        asNavFor:'.sec07 .interview',
        responsive: [ // 반응형 웹 구현 옵션
            { 
                breakpoint: 768, //화면 사이즈 768px
                settings: {	
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow:1,
                } 
            }
        ]
      });
    $('.sec07 .cont .interview').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        asNavFor:'.sec07 .icon',
        responsive: [ // 반응형 웹 구현 옵션
            { 
                breakpoint: 768, //화면 사이즈 768px
                settings: {	
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow:1,
                    fade:true,
                } 
            }
        ]
      });
});
