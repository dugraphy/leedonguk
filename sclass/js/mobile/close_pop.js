
// 1.홈페이지 상단 탑 배너 close 소스

function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1);
		if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
	}
	return "";
}

function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + "; " + expires;
}



function topBannerClose(){
    if($("input[name='chkbox']").is(":checked") ==true){
        setCookie("close","Y",1);
    }
 //   $("#top_banner_area").hide();
	  $("#top_banner_area").slideUp('slow');
}


$(document).ready(function(){
	cookiedata = document.cookie;
	if(cookiedata.indexOf("close=Y")<0){
		$("#top_banner_area").show();
	}else{
		$("#top_banner_area").hide();
	}
	$("#close").click(function(){
		topBannerClose();
	});
});

// END

// 2.단일 레이어 팝업 close 소스

function getCookie(cname) {
var name = cname + "=";
var ca = document.cookie.split(';');
for(var i=0; i<ca.length; i++) {
	var c = ca[i];
	while (c.charAt(0)==' ') c = c.substring(1);
	if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
}
return "";
}
function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + "; " + expires;
}


	function couponClose(){
if($("input[name='chkbox']").is(":checked") ==true){
	setCookie("close_pop01","Y",1);
	}
	$("#pop1").hide();
}

$(document).ready(function(){
	cookiedata = document.cookie;
	if(cookiedata.indexOf("close_pop01=Y")<0){
		$("#pop1").show();
	}else{
		$("#pop1").hide();
	}
	$("#close_pop01").click(function(){
		couponClose();
	});
});



// 두번째 팝업

function setCookie2(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + "; " + expires;
}


function couponClose2(){
	if($("input[name='chkbox2']").is(":checked") ==true){
		setCookie("close_pop02","Y",1);
	}

	$("#pop2").hide();
}

$(document).ready(function(){
	cookiedata = document.cookie;
	if(cookiedata.indexOf("close_pop02=Y")<0){
		$("#pop2").show();
	}else{
		$("#pop2").hide();
	}
	$("#close_pop02").click(function(){
		couponClose2();
	});
});
