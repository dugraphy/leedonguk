$(document).ready(function(){
        
    $("#goTop").hide(); // 탑 버튼 숨김
    $(function () {
                 
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) { // 스크롤 내릴 표시
                $('#goTop').fadeIn();
            } else {
                $('#goTop').fadeOut();
            }
        });
                
        $('#goTop').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);  // 탑 이동 스크롤 속도
            return false;
        });
    });
 
});
