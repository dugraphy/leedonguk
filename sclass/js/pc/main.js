
$(function () {

  const selfie = new Swiper(".selfie", {
    // Optional parameters
    autoplay: {
      // 자동 슬라이드
      delay: 1000, // 슬라이드 한장이 머무르는 시간
      disableOnInteraction: false,
    },
    speed: 1000, // 슬라이드 넘어가는 속도
    loop: true, // 슬라이드 반복 (centeredslides랑 같이 사용x)
    slidesPerView: 7, // 가로 한줄에 보이는 슬라이드 개수
    spaceBetween: 10, //슬라이드 간 거리
    centeredSlides: true, //첫번째 슬라이드가 정중앙에 (loop랑 같이 사용x)
  });

  const eye = new Swiper(".eye", {
    // Optional parameters
    // autoplay: {
    //   // 자동 슬라이드
    //   delay: 3000, // 슬라이드 한장이 머무르는 시간
    //   disableOnInteraction: false,
    // },
    speed: 1000, // 슬라이드 넘어가는 속도
    loop: true, // 슬라이드 반복 (centeredslides랑 같이 사용x)
    navigation: {
      nextEl: ".swiper-button-next", // 다음버튼
      prevEl: ".swiper-button-prev", // 이전버튼
    },
    slidesPerView: 3, // 가로 한줄에 보이는 슬라이드 개수
    spaceBetween: 10, //슬라이드 간 거리
    centeredSlides: true, //첫번째 슬라이드가 정중앙에 (loop랑 같이 사용x)
  });

  const nose = new Swiper(".nose", {
    // Optional parameters
    // autoplay: {
    //   // 자동 슬라이드
    //   delay: 3000, // 슬라이드 한장이 머무르는 시간
    //   disableOnInteraction: false,
    // },
    speed: 1000, // 슬라이드 넘어가는 속도
    loop: true, // 슬라이드 반복 (centeredslides랑 같이 사용x)
    navigation: {
      nextEl: ".swiper-button-next", // 다음버튼
      prevEl: ".swiper-button-prev", // 이전버튼
    },
    slidesPerView: 3, // 가로 한줄에 보이는 슬라이드 개수
    spaceBetween: 10, //슬라이드 간 거리
    centeredSlides: true, //첫번째 슬라이드가 정중앙에 (loop랑 같이 사용x)
  });

});//end