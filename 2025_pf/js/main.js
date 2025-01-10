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
});
