$(function () {
  const $header = $("#header");
  const $boxes = $(".title-box");
  const totalBoxes = $boxes.length;
  const customHeight = 900; // 900px 기준
  const removeVisibleHeight = customHeight * totalBoxes; // 특정 높이에서 visible 이벤트 제거
  
  let activeIndex = 0;

  // 초기 상태: 첫 번째 박스 보이기
  $boxes.eq(activeIndex).addClass("visible");

  // 스크롤 이벤트
  $(window).on("scroll", function () {
      const scrollTop = $(window).scrollTop();

      // 헤더에 "on" 클래스 추가/제거
      $header.toggleClass("on", scrollTop > 0);

      // 현재 스크롤 위치를 기준으로 활성 박스 계산
      const newIndex = Math.floor(scrollTop / customHeight);

      // visible 제거 조건: 특정 높이 이상일 경우
      if (scrollTop > removeVisibleHeight) {
          // 모든 박스에서 visible과 hidden 제거
          $boxes.removeClass("visible hidden");
          activeIndex = -1; // 비활성화
          return;
      }

      // 박스가 변경되었으면 처리
      if (newIndex !== activeIndex && newIndex < totalBoxes) {
          // 이전 박스 숨기기
          $boxes.eq(activeIndex).removeClass("visible").addClass("hidden");

          // 새로운 박스 보이기
          $boxes.eq(newIndex).addClass("visible").removeClass("hidden");

          // 활성 인덱스 업데이트
          activeIndex = newIndex;
      }
  });

  $('.sec-03 .left-box .slider').bxSlider({
    mode: 'vertical',
    minSlides: 2,
    maxSlides: 2,
    ticker: true,
    speed: 12000,
  });
  $('.sec-03 .right-box .slider').bxSlider({
    mode: 'vertical',
    autoDirection: 'prev',
    minSlides: 2,
    maxSlides: 2,
    ticker: true,
    speed: 12000,
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
    }
  }
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
});



