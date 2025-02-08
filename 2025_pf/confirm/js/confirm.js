$(function () {
    $(window).on('scroll', function(){
        var sct=$(window).scrollTop();
        //---var, let: 변수값 const: 상수값(변하지않는 값)
        sct > 50 ? $('#header').addClass('on') : $('#header').removeClass('on'); // 상황 조건부
        sct > 50 ? $('.sec01 .first').addClass('on') : $('.sec01 .first').removeClass('on'); // 상황 조건부
        sct > 60 ? $('.sec01 .second').addClass('on') : $('.sec01 .second').removeClass('on'); // 상황 조건부
        sct < 60  ? $('.sec01 .first').addClass('active') : $('.sec01 .first').removeClass('active'); // 상황 조건부
        sct > 200 ? $('.sec01 .second').addClass('active') : $('.sec01 .second').removeClass('active'); // 상황 조건부
        sct > 600 ? $('.sec01 .second').addClass('off') : $('.sec01 .second').removeClass('off'); // 상황 조건부
        sct > 600 ? $('.sec01 .scroll').addClass('off') : $('.sec01 .scroll').removeClass('off'); // 상황 조건부
        sct > 4500 ? $('.sec06 .title').addClass('on') : $('.sec06 .title').removeClass('on'); // 상황 조건부
        sct > 4800 ? $('.sec06 .on-01').addClass('on') : $('.sec06 .on-01').removeClass('on'); // 상황 조건부
        sct > 5100 ? $('.sec06 .on-02').addClass('on') : $('.sec06 .on-02').removeClass('on'); // 상황 조건부
        sct > 5400 ? $('.sec06 .on-03').addClass('on') : $('.sec06 .on-03').removeClass('on'); // 상황 조건부
        sct > 5700 ? $('.sec06 .on-04').addClass('on') : $('.sec06 .on-04').removeClass('on'); // 상황 조건부
        sct > 6000 ? $('.sec06 .on-05').addClass('on') : $('.sec06 .on-05').removeClass('on'); // 상황 조건부
        sct > 6300 ? $('.sec06 .on-06').addClass('on') : $('.sec06 .on-06').removeClass('on'); // 상황 조건부
        sct > 6600 ? $('.sec06 .on-07').addClass('on') : $('.sec06 .on-07').removeClass('on'); // 상황 조건부
        sct > 6900 ? $('.sec06 .on-08').addClass('on') : $('.sec06 .on-08').removeClass('on'); // 상황 조건부
        sct > 7100 ? $('.sec06 .on-09').addClass('on') : $('.sec06 .on-09').removeClass('on'); // 상황 조건부
        sct > 7400 ? $('.sec06 .on-10').addClass('on') : $('.sec06 .on-10').removeClass('on'); // 상황 조건부
        sct > 7700 ? $('.sec06 .on-11').addClass('on') : $('.sec06 .on-11').removeClass('on'); // 상황 조건부
        sct > 8000 ? $('.sec06 .on-12').addClass('on') : $('.sec06 .on-12').removeClass('on'); // 상황 조건부
    });

    $('.sec05 .cont .slider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots:true,
        responsive: [ // 반응형 웹 구현 옵션
            { 
                breakpoint: 768, //화면 사이즈 768px
                settings: {	
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow:2,
                    slidesToScroll: 1,
                } 
            }
        ]
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
});
