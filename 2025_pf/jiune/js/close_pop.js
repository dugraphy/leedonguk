

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



// 단일팝업 전체 체크 -- 전체 닫기 활성화 비활성화
function chkAllClase(){

	let close1 = ($('#pop_1').is(':visible') ) ? 1 : 0;
	let close2 = ($('#pop_2').is(':visible') ) ? 1 : 0;
	let close3 = ($('#pop_3').is(':visible') ) ? 1 : 0;
	let close4 = ($('#pop_4').is(':visible') ) ? 1 : 0;
	let close5 = ($('#pop_5').is(':visible') ) ? 1 : 0;
	let close6 = ($('#pop_6').is(':visible') ) ? 1 : 0;
	// console.log('테스트 팝업닫기:', (close1 + close2 + close3 + close4));
	// 모든 창이 닫힌 경우 닫기 이벤트 호출 
	if ((close1 + close2 + close3 + close4 + close5 + close6) == 0 ) {
		$('#close').click();
	}
}

// 단일 팝업
function couponClose(){
if($("input[name='chkbox']").is(":checked") ==true){
	setCookie("close_pop01","Y",1);
}
$("#pop_1").hide();
}
$(document).ready(function(){
	cookiedata = document.cookie;
	if(cookiedata.indexOf("close_pop01=Y")<0){
		$("#pop_1").show();
	}else{
		$("#pop_1").hide();
	}
	$("#close_pop01").click(function(){
		
		couponClose();
		chkAllClase();
	});
});



function couponClose2(){
if($("input[name='chkbox2']").is(":checked") ==true){
	setCookie("close_pop02","Y",1);
}
$("#pop_2").hide();
}
$(document).ready(function(){
	cookiedata = document.cookie;
	if(cookiedata.indexOf("close_pop02=Y")<0){
		$("#pop_2").show();
	}else{
		$("#pop_2").hide();
	}
	$("#close_pop02").click(function(){
		couponClose2();
		chkAllClase();
	});
});

function couponClose3(){
if($("input[name='chkbox3']").is(":checked") ==true){
	setCookie("close_pop03","Y",1);
}
$("#pop_3").hide();
}
$(document).ready(function(){
	cookiedata = document.cookie;
	if(cookiedata.indexOf("close_pop03=Y")<0){
		$("#pop_3").show();
	}else{
		$("#pop_3").hide();
	}
	$("#close_pop03").click(function(){
		couponClose3();
		chkAllClase();
	});
});

function couponClose4(){
if($("input[name='chkbox4']").is(":checked") ==true){
	setCookie("close_pop04","Y",1);
}
$("#pop_4").hide();
}
$(document).ready(function(){
	cookiedata = document.cookie;
	if(cookiedata.indexOf("close_pop04=Y")<0){
		$("#pop_4").show();
	}else{
		$("#pop_4").hide();
	}
	$("#close_pop04").click(function(){
		couponClose4();
		chkAllClase();
	});
});

function couponClose5(){
	if($("input[name='chkbox5']").is(":checked") ==true){
		setCookie("close_pop05","Y",1);
	}
	$("#pop_5").hide();
	}
	$(document).ready(function(){
		cookiedata = document.cookie;
		if(cookiedata.indexOf("close_pop05=Y")<0){
			$("#pop_5").show();
		}else{
			$("#pop_5").hide();
		}
		$("#close_pop05").click(function(){
			couponClose5();
			chkAllClase();
		});
	});

	function couponClose6(){
		if($("input[name='chkbox6']").is(":checked") ==true){
			setCookie("close_pop06","Y",1);
		}
		$("#pop_6").hide();
		}
		$(document).ready(function(){
			cookiedata = document.cookie;
			if(cookiedata.indexOf("close_pop06=Y")<0){
				$("#pop_6").show();
			}else{
				$("#pop_6").hide();
			}
			$("#close_pop06").click(function(){
				couponClose6();
				chkAllClase();
			});
		});