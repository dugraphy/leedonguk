$(function () {

    
    $(document).ready(function() { // 메인시술순위 슬라이드
        $('.bxslider-order').bxSlider({
            auto: true,
            pager: false,
            controls: false,
            mode: 'vertical'
        });
    });


    const selfie = new Swiper("#sec001 .selfie", {
        // Optional parameters
        autoplay: {
            // 자동 슬라이드
            delay: 1000, // 슬라이드 한장이 머무르는 시간
            disableOnInteraction: false,
        },
        speed: 1000, // 슬라이드 넘어가는 속도
        loop: true, // 슬라이드 반복 (centeredslides랑 같이 사용x)
        slidesPerView: 3, // 가로 한줄에 보이는 슬라이드 개수
        spaceBetween: 5, //슬라이드 간 거리
    });
});//end