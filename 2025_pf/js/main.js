$(function () {
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
        speed: 12000,
      });
  
      $('.sec-03 .right-box .slider').bxSlider({
        mode: 'vertical',
        autoDirection: 'prev',
        shrinkItems: true,
        slideWidth: getSlideWidth(), // 동적으로 너비 설정
        minSlides: 2,
        maxSlides: 2,
        ticker: true,
        speed: 12000,
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

  const section04 = document.querySelector(".sec-04"); // sec-04 섹션 선택
  const content04 = section04.querySelector(".content"); // sec-04 콘텐츠 컨테이너
  const loading04 = section04.querySelector(".loading"); // sec-04 로딩 컨테이너
  
  let totalItems04 = 30; // sec-04의 아이템 총 개수 제한
  let loadedItems04 = 3; // sec-04의 초기 로드된 아이템 수 (3개로 시작)
  const itemsPerRow04 = 3; // sec-04 한 줄에 아이템 개수
  let isLoading04 = false; // sec-04 로딩 중인지 확인
  
  // 로드될 이미지 경로 리스트 (sec-04 전용)
  const imagePaths04 = [
    "./img/loar_logo.jpg",
    "./img/loar_logo.jpg",
    "./img/loar_logo.jpg",
    "./img/loar_logo.jpg",
    "./img/loar_logo.jpg",
    "./img/loar_logo.jpg",
    "./img/loar_logo.jpg",
    "./img/loar_logo.jpg",
    "./img/loar_logo.jpg",
    "./img/loar_logo.jpg",
  ]; // 필요하면 이미지를 더 추가
  
  // 더미 데이터를 생성하는 함수 (sec-04 전용)
  function loadMoreItems04() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newItems = [];
        for (let i = 0; i < itemsPerRow04; i++) {
          if (loadedItems04 >= totalItems04) break; // 아이템 수 제한 확인
  
          // 아이템 요소 생성
          const item = document.createElement("div");
          item.className = "pagination-item";
  
          // 이미지 추가
          const img = document.createElement("img");
          img.src = imagePaths04[loadedItems04 % imagePaths04.length]; // 순환적으로 이미지 사용
          img.alt = `Poster ${loadedItems04 + 1}`;
          img.style.width = "100%";
          img.style.borderRadius = "20px";
  
          // 아이템에 이미지 추가
          item.appendChild(img);
          newItems.push(item);
          loadedItems04++;
        }
        resolve(newItems);
      }, 500); // 3초 지연 후 데이터 추가
    });
  }
  
// 스크롤 이벤트 핸들러
async function onScroll04() {
  const lastItem = content04.querySelector(".pagination-item:last-child"); // 마지막 아이템
  if (!lastItem) return; // 아이템이 없으면 반환

  // 마지막 아이템이 뷰포트 하단에 도달했는지 확인
  const lastItemRect = lastItem.getBoundingClientRect();
  if (
    lastItemRect.bottom <= window.innerHeight && // 마지막 아이템이 화면 하단에 도달
    !isLoading04 && // 로딩 중이 아닐 때만 실행
    loadedItems04 < totalItems04 // 로드 가능한 아이템이 남아있을 때
  ) {
    isLoading04 = true; // 로딩 상태 설정
    loading04.style.display = "block"; // 로딩 표시
    document.body.style.overflow = "hidden"; // 스크롤 비활성화

    const newItems = await loadMoreItems04();
    newItems.forEach((item) => content04.appendChild(item));

    loading04.style.display = "none"; // 로딩 숨김
    isLoading04 = false; // 로딩 상태 초기화
    document.body.style.overflow = "auto"; // 스크롤 활성화

    // 모든 아이템 로드 완료 시 스크롤 이벤트 제거
    if (loadedItems04 >= totalItems04) {
      window.removeEventListener("scroll", onScroll04);
      loading04.textContent = "No more items to load.";
    }}
  }

// 초기화 함수
function init04() {
  if (loadedItems04 < totalItems04) {
    window.addEventListener("scroll", onScroll04); // 스크롤 이벤트 등록
  }
}

// 초기화 실행
init04();


  $('.sec-05 .slider').bxSlider({
    auto: true,
    infiniteLoop: true,
    slideWidth: 300,
    slideMargin: 10,
    minSlides: 4,
    maxSlides: 4,
    moveSlides: 1,
    controls: false,
    speed:500,
    pagerCustom:".custom_pager", //원하는 id 및 class
  });

// 스크롤 잠금 함수
function lockScroll() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollTop}px`;
  document.body.style.width = '100%';
  document.body.dataset.scrollY = scrollTop; // 현재 스크롤 위치 저장
}

// 스크롤 잠금 해제 함수
function unlockScroll() {
  const scrollY = document.body.dataset.scrollY || '0';
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  window.scrollTo(0, parseInt(scrollY, 10)); // 저장된 스크롤 위치로 이동
  document.body.dataset.scrollY = ''; // 데이터 초기화
}

  // 첫번째 팝업 열기
  $(".pop-btn-01").click(function () {
    $(".popup-01").addClass("on").siblings().removeClass("on");
    document.body.style.overflow = "hidden"; // 스크롤 비활성화
  });
  // 첫번째 팝업 닫기
  $(".popup-01 .close").click(function () {
    $(".popup-01").removeClass("on");
    document.body.style.overflow = "auto"; // 스크롤 활성화
  });
  // 두번째 팝업 열기
  $(".pop-btn-02").click(function () {
    $(".popup-02").addClass("on").siblings().removeClass("on");
    document.body.style.overflow = "hidden"; // 스크롤 비활성화
  });
  // 두번째 팝업 닫기
  $(".popup-02 .close").click(function () {
    $(".popup-02").removeClass("on");
    document.body.style.overflow = "auto"; // 스크롤 활성화
  });
  // 세번째 팝업 열기
  $(".pop-btn-03").click(function () {
    $(".popup-03").addClass("on").siblings().removeClass("on");
    document.body.style.overflow = "hidden"; // 스크롤 비활성화
  });
  // 세번째 팝업 닫기
  $(".popup-03 .close").click(function () {
    $(".popup-03").removeClass("on");
    document.body.style.overflow = "auto"; // 스크롤 활성화
  });
  // 네번째 팝업 열기
  $(".pop-btn-04").click(function () {
    $(".popup-04").addClass("on").siblings().removeClass("on");
    document.body.style.overflow = "hidden"; // 스크롤 비활성화
  });
  // 네번째 팝업 닫기
  $(".popup-04 .close").click(function () {
    $(".popup-04").removeClass("on");
    document.body.style.overflow = "auto"; // 스크롤 활성화
  });
  // 다섯번째 팝업 열기
  $(".pop-btn-05").click(function () {
    $(".popup-05").addClass("on").siblings().removeClass("on");
    document.body.style.overflow = "hidden"; // 스크롤 비활성화
  });
  // 다섯번째 팝업 닫기
  $(".popup-05 .close").click(function () {
    $(".popup-05").removeClass("on");
    document.body.style.overflow = "auto"; // 스크롤 활성화
  });
  // 여섯번째 팝업 열기
  $(".pop-btn-06").click(function () {
    $(".popup-06").addClass("on").siblings().removeClass("on");
    document.body.style.overflow = "hidden"; // 스크롤 비활성화
  });
  // 여섯번째 팝업 닫기
  $(".popup-06 .close").click(function () {
    $(".popup-06").removeClass("on");
    document.body.style.overflow = "auto"; // 스크롤 활성화
  });
  // 일곱번째 팝업 열기
  $(".pop-btn-07").click(function () {
    $(".popup-07").addClass("on").siblings().removeClass("on");
    document.body.style.overflow = "hidden"; // 스크롤 비활성화
  });
  // 일곱번째 팝업 닫기
  $(".popup-07 .close").click(function () {
    $(".popup-07").removeClass("on");
    document.body.style.overflow = "auto"; // 스크롤 활성화
  });
  // 여덟번째 팝업 열기
  $(".pop-btn-08").click(function () {
    $(".popup-08").addClass("on").siblings().removeClass("on");
    document.body.style.overflow = "hidden"; // 스크롤 비활성화
  });
  // 여덟번째 팝업 닫기
  $(".popup-08 .close").click(function () {
    $(".popup-08").removeClass("on");
    document.body.style.overflow = "auto"; // 스크롤 활성화
  });
  // 아홉번째 팝업 열기
  $(".pop-btn-09").click(function () {
    $(".popup-09").addClass("on").siblings().removeClass("on");
    document.body.style.overflow = "hidden"; // 스크롤 비활성화
  });
  // 아홉번째 팝업 닫기
  $(".popup-09 .close").click(function () {
    $(".popup-09").removeClass("on");
    document.body.style.overflow = "auto"; // 스크롤 활성화
  });
  // 열번째 팝업 열기
  $(".pop-btn-10").click(function () {
    $(".popup-10").addClass("on").siblings().removeClass("on");
    document.body.style.overflow = "hidden"; // 스크롤 비활성화
  });
  // 열번째 팝업 닫기
  $(".popup-10 .close").click(function () {
    $(".popup-10").removeClass("on");
    document.body.style.overflow = "auto"; // 스크롤 활성화
  });
  // 열한번째 팝업 열기
  $(".pop-btn-11").click(function () {
    $(".popup-11").addClass("on").siblings().removeClass("on");
    document.body.style.overflow = "hidden"; // 스크롤 비활성화
  });
  // 열한번째 팝업 닫기
  $(".popup-11 .close").click(function () {
    $(".popup-11").removeClass("on");
    document.body.style.overflow = "auto"; // 스크롤 활성화
  });
  // 열두번째 팝업 열기
  $(".pop-btn-12").click(function () {
    $(".popup-12").addClass("on").siblings().removeClass("on");
    document.body.style.overflow = "hidden"; // 스크롤 비활성화
  });
  // 열두번째 팝업 닫기
  $(".popup-12 .close").click(function () {
    $(".popup-12").removeClass("on");
    document.body.style.overflow = "auto"; // 스크롤 활성화
  });
  // 열세번째 팝업 열기
  $(".pop-btn-13").click(function () {
    $(".popup-13").addClass("on").siblings().removeClass("on");
    document.body.style.overflow = "hidden"; // 스크롤 비활성화
  });
  // 열세번째 팝업 닫기
  $(".popup-13 .close").click(function () {
    $(".popup-13").removeClass("on");
    document.body.style.overflow = "auto"; // 스크롤 활성화
  });
  // 열넷번째 팝업 열기
  $(".pop-btn-14").click(function () {
    $(".popup-14").addClass("on").siblings().removeClass("on");
    document.body.style.overflow = "hidden"; // 스크롤 비활성화
  });
  // 열넷번째 팝업 닫기
  $(".popup-14 .close").click(function () {
    $(".popup-14").removeClass("on");
    document.body.style.overflow = "auto"; // 스크롤 활성화
  });


  function initializeSlider() {
    $('.pop-img .pop-slider').bxSlider({
      infiniteLoop: false,
      minSlides: 1,
      maxSlides: 1,
      moveSlides: 1,
      controls: true,
    });
  }


// 모바일 리사이징징

  $('.xi-bars').on('click', function(){
    $(this).toggleClass('on');
    $('.gnb').toggleClass('on');
  });
});