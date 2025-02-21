//헤더 풀다운 소스

$(document).ready(function(e){
	/* gnb */
	$("#gnb").on("mouseenter",function(e){
		$("#header").stop().animate({height:370},300)
		// $("#header").css("background-color","rgba(255,255,255,0.9)")
		//$("#header").css("border-bottom","1px solid #38C0B8")
	})
	$("#header").on("mouseleave",function(e){
		$("#header").stop().animate({height:91},300)
	})
})
