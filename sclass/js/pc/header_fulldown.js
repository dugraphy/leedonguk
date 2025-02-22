//헤더 풀다운 소스

$(document).ready(function(e){
	/* gnb */
	$("#gnb_main").on("mouseenter",function(e){
		$("#header").stop().animate({height:500},300)
		//$("#header").css("background-color","rgba(255,255,255,0.9)")
		//$("#header").css("border-bottom","4px solid #B48F5A")
	})
	$("#header").on("mouseleave",function(e){
		$("#header").stop().animate({height:180},300)
		//$("#header").css("border-bottom","4px solid #B48F5A")
	})
})
