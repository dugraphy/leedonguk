$(function () {
	// $('#fullpage').fullpage({
	// 	autoScrolling:true,
	// 	scrollHorizontally: true,
	// });

    $('.bar').on('click', function(){
        $('.gnb').toggleClass('on');
    });

    const content = "병·의원 컨설팅 문의하기";
    const text = document.querySelector(".sec08 .text_box .text");
    let i = 0;

    function typing(){
        let txt = content[i++];
        text.innerHTML += txt;
        if (i > content. length) {
            text.textContent = "";
            i = 0;
        }
    }
    setInterval(typing, 250)
});
