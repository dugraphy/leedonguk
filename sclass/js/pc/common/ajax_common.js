

function requestDataWithAjax(url, success, postData) {
	$.ajax({
		type : "POST",			// post | get
		url : url,
		data : convertToMap(postData),
		contentType : "application/x-www-form-urlencoded; charset=UTF-8",
		dataType : "json",		// json | jsonp
		//jsonp : "callback",	// jsonp 테스트 코드
		success : success,
		error : ajaxError
	});
}
function convertToMap(postData) {
		if (postData != null) {
			var map = "";
			
			for ( var key in postData)
				map += key.toString() + "=" + postData[key] + "&";
			return map.slice(0, map.length - 1);
		} else
			return null;
}
var ex = '';
var ee = '';
function ajaxError(x, e) {
	ex = x;
	ee = e;
	if (x.status == 0) {
		alert("Error : 0\n네트워크 연결 상태를 확인해주세요.");
	} else if (x.status == 400) {
		alert("Error : 400\n올바른 파라메터 요청이 아닙니다.");
	} else if (x.status == 404) {
		alert("Error : 404\n요청 URL이 올바르지 않습니다.");
	} else if (x.status == 405) {
		alert("Error : 405\nHTTP 프로토콜 타입을 확인해주세요.");
	} else if (x.status == 500) {
		alert("Error : 500\n서버 에러.");
	} else if (e == 'parsererror') {
		alert("Error.\nParsing JSON Request failed.");
	} else if (e == 'timeout') {
		alert("요청 시간이 초과하였습니다.");
	} else {
		alert("Unknow Error.\n" + x.responseText);
	}
}
