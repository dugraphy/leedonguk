$(function () {
  const lenis = new Lenis({
    // 추가된 부분
    duration: 2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });
  
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  const $header = $("#header");
  const $boxes = $(".title-box");
  const totalBoxes = $boxes.length;
  const customHeight = 900; // 900px 기준
  const removeVisibleHeight = customHeight * totalBoxes; // 특정 높이에서 visible 이벤트 제거
  let activeIndex = 0;
  
  // 요청 애니메이션 프레임을 사용하여 성능 최적화
  let isScrolling = false;
  let newIndex = -1;
  
  // 초기 상태: 첫 번째 박스 보이기
  $boxes.eq(activeIndex).addClass("visible");
  
  // 스크롤 이벤트
  $(window).on("scroll", function () {
    if (isScrolling) return; // 이미 스크롤 이벤트가 처리 중이면 리턴
  
    isScrolling = true;
    requestAnimationFrame(() => {
      const scrollTop = $(window).scrollTop();
      const windowWidth = window.innerWidth;
  
      // 헤더에 "fixed" 클래스 추가/제거
      if (windowWidth < 768) {
        $header.removeClass("fixed");
      } else {
        $header.toggleClass("fixed", scrollTop > 0);
      }
  
      // 현재 스크롤 위치를 기준으로 활성 박스 계산
      newIndex = Math.floor(scrollTop / customHeight);
  
      // visible 제거 조건: 특정 높이 이상일 경우
      if (scrollTop > removeVisibleHeight) {
        // 모든 박스에서 visible과 hidden 제거
        $boxes.removeClass("visible hidden");
        activeIndex = -1; // 비활성화
      } else if (newIndex !== activeIndex && newIndex < totalBoxes) {
        // 이전 박스 숨기기
        $boxes.eq(activeIndex).removeClass("visible").addClass("hidden");
        // 새로운 박스 보이기
        $boxes.eq(newIndex).addClass("visible").removeClass("hidden");
        // 활성 인덱스 업데이트
        activeIndex = newIndex;
      }
  
      isScrolling = false; // 스크롤 이벤트 처리 완료
    });
  });

    // 공통 슬라이더 설정
    function initializeSlider() {
      $('.sec-03 .left-box .slider').bxSlider({
        mode: 'vertical',
        shrinkItems: true,
        slideWidth: getSlideWidth(), // 동적으로 너비 설정
        minSlides: 2,
        maxSlides: 2,
        ticker: true,
        tickerHover:true,
        speed: 10000,
      });
  
      $('.sec-03 .right-box .slider').bxSlider({
        mode: 'vertical',
        shrinkItems: true,
        slideWidth: getSlideWidth(), // 동적으로 너비 설정
        minSlides: 2,
        maxSlides: 2,
        ticker: true,
        tickerHover:true,
        speed: 10000,
      });
    }
  
    // 슬라이드 너비 계산 함수
    function getSlideWidth() {
      const windowWidth = $(window).width();
      return windowWidth <= 768 ? windowWidth * 0.5 : 300; // 모바일에서는 80% 너비, 기본은 300px
    }
  
    // 초기 슬라이더 실행
    initializeSlider();
  
    // 창 크기 변경 시 슬라이드 크기 재조정
    $(window).resize(function () {
      $('.sec-03 .slider').each(function () {
        const sliderInstance = $(this).data('bxSlider'); // 기존 bxSlider 인스턴스 가져오기
        if (sliderInstance) {
          sliderInstance.destroySlider(); // 기존 슬라이더 삭제
        }
      });
  
      initializeSlider(); // 슬라이더 다시 초기화
    });

    var scrollPosition = 0; // 현재 스크롤 위치 저장 변수

    // 스크롤 잠금 함수 (위치 유지)
    function lockScroll() {
      scrollPosition = $(window).scrollTop(); // 현재 스크롤 위치 저장
      $('html, body').css({
        position: 'fixed',
        top: `-${scrollPosition}px`,
        width: '100%'
      });
    }
    
    
    const section04 = document.querySelector(".sec-04"); // sec-04 섹션 선택
    const content04 = section04.querySelector(".content"); // sec-04 콘텐츠 컨테이너
    const loading04 = section04.querySelector(".loading"); // sec-04 로딩 컨테이너
    
    let totalItems04 = 30; // 아이템 총 개수 제한
    let loadedItems04 = 0; // 처음부터 JavaScript로 로드
    const itemsPerRow04 = 3; // 한 줄에 3개씩 로드
    let isLoading04 = false; // 로딩 중인지 확인
    
    // 현재 스크롤 위치 저장 변수
    let scrollPosition1 = 0;

    // 로드될 이미지 경로 리스트 (poster_1.jpg ~ poster_30.jpg)
    const imagePaths04 = Array.from({ length: 30 }, (_, i) => `./img/poster/poster_${i + 1}.jpg`);

    // 스크롤 잠금 (팝업 열릴 때)
    function lockScroll() {
      scrollPosition = window.scrollY; // 현재 스크롤 위치 저장
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPosition1}px`;
      document.body.style.width = '100%';
    }
    
    // 스크롤 잠금 해제 (위치 유지)
    function unlockScroll() {
      $('html, body').css({
        position: '',
        top: '',
        width: ''
      });
      $(window).scrollTop(scrollPosition1); // 저장된 위치로 복귀
    }

   // 더미 데이터를 생성하는 함수
    function loadMoreItems04() {
      return new Promise((resolve) => {
          setTimeout(() => {
              const newItems = [];
              for (let i = 0; i < itemsPerRow04; i++) {
                  if (loadedItems04 >= totalItems04) break;

                  // 아이템 요소 생성
                  const item = document.createElement("div");
                  item.className = "pagination-item";

                  // 이미지 추가
                  const img = document.createElement("img");
                  img.src = imagePaths04[loadedItems04 % imagePaths04.length]; // 순환적으로 이미지 사용
                  img.alt = `Poster ${loadedItems04 + 1}`;
                  img.style.width = "100%";
                  img.style.borderRadius = "20px";

                  // 클릭 시 팝업 열기 이벤트 추가
                  img.addEventListener("click", function () {
                      popup.style.display = "flex";  // 팝업 표시
                      popupImg.src = img.src; // 클릭한 이미지의 src 값을 팝업 이미지로 설정
                      lockScroll(); // 스크롤 잠금
                  });

                  // 아이템에 이미지 추가
                  item.appendChild(img);
                  newItems.push(item);
                  loadedItems04++;
              }
              resolve(newItems);
          }, 500);
      });
    }
    
    // 스크롤 이벤트 핸들러
    async function onScroll04() {
      const lastItem = content04.querySelector(".pagination-item:last-child");
      if (!lastItem) return;

      const lastItemRect = lastItem.getBoundingClientRect();
      if (
          lastItemRect.bottom <= window.innerHeight &&
          !isLoading04 &&
          loadedItems04 < totalItems04
      ) {
          isLoading04 = true;
          loading04.style.display = "block";

          const newItems = await loadMoreItems04();
          newItems.forEach((item) => content04.appendChild(item));

          loading04.style.display = "none";
          isLoading04 = false;

          if (loadedItems04 >= totalItems04) {
              window.removeEventListener("scroll", onScroll04);
              loading04.textContent = "No more items to load.";
          }
      }
    }
    
   // 초기에 첫 3개 이미지 로드
    async function init04() {
      const firstItems = await loadMoreItems04();
      firstItems.forEach((item) => content04.appendChild(item));

      if (loadedItems04 < totalItems04) {
          window.addEventListener("scroll", onScroll04);
      }
    }
    
    // 팝업 관련 코드
    const popup = document.getElementById("poster-popup");
    const popupImg = document.getElementById("popupImg");
    const closeBtn = document.querySelector(".close");

    // 팝업 닫기
    closeBtn.addEventListener("click", function () {
        popup.style.display = "none";
        unlockScroll(); // 스크롤 원래 위치로 복귀
    });

    // 팝업 바깥 클릭 시 닫기
    popup.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.style.display = "none";
            unlockScroll(); // 스크롤 원래 위치로 복귀
        }
    });

// 초기화 실행
init04();


var slider = $('.sec-05 .slider').bxSlider({
  auto: true,
  slideWidth: 300,
  slideMargin: 10,
  infiniteLoop: true,
  minSlides: 4,
  maxSlides: 4,
  moveSlides: 1,
  controls: false,
  speed: 500,
  pagerCustom: ".custom_pager",
  touchEnabled: false, // 터치 이벤트 방지
});

function updateSlider() {
  if ($(window).width() <= 768) {
    slider.reloadSlider({
      auto: true,
      slideWidth: 300,
      slideMargin: 10,
      infiniteLoop: true,
      minSlides: 3, // 모바일에서는 3개
      maxSlides: 3, // 모바일에서는 3개
      moveSlides: 1,
      controls: false,
      speed: 500,
      pagerCustom: ".custom_pager",
      touchEnabled: false, // 모바일에서도 터치 이벤트 방지
    });
  } else {
    slider.reloadSlider({
      auto: true,
      slideWidth: 300,
      slideMargin: 10,
      infiniteLoop: true,
      minSlides: 4, // PC에서는 4개
      maxSlides: 4, // PC에서는 4개
      moveSlides: 1,
      controls: false,
      speed: 500,
      pagerCustom: ".custom_pager",
      touchEnabled: false,
    });
  }
}

$(window).resize(function () {
  updateSlider();
});

updateSlider();

var scrollPosition = 0; // 현재 스크롤 위치 저장 변수

// 스크롤 잠금 함수 (위치 유지)
function lockScroll() {
  scrollPosition = $(window).scrollTop(); // 현재 스크롤 위치 저장
  $('html, body').css({
    position: 'fixed',
    top: `-${scrollPosition}px`,
    width: '100%'
  });
}

// 스크롤 잠금 해제 (위치 유지)
function unlockScroll() {
  $('html, body').css({
    position: '',
    top: '',
    width: ''
  });
  $(window).scrollTop(scrollPosition); // 저장된 위치로 복귀
}

// 팝업 열기
$('.img-box').click(function () {
  var index = $(this).attr('class').match(/pop-btn-(\d+)/)[1];
  var popup = $('.popup-' + index);

  lockScroll(); // 스크롤 잠금 적용

  popup.addClass('on').siblings('.pop-img').removeClass('on');

  // 팝업 내부 bxSlider 초기화 (중복 실행 방지)
  $('.pop-img.on .pop-slider').each(function () {
    if (!$(this).hasClass('bx-initialized')) {
      $(this).bxSlider({
        infiniteLoop: false,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        controls: true,
        touchEnabled: false, // 터치 이벤트 방지
      });
    }
  });
});

// 팝업 닫기
$('.pop-img .close').click(function () {
  $(this).closest('.pop-img').removeClass('on');

  unlockScroll(); // 스크롤 원래 위치로 복귀
});
// 모바일 리사이징징

  $('.bars').on('click', function(){
    $(this).toggleClass('on');
    $('.gnb').toggleClass('on');
  });
});