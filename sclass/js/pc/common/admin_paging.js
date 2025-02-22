$(document).ready(function(){
	var serch_target = $('#serch_target').val();
	var serch_val = $('#serch_val').val();
	var url = $('#page_url').val();
	var start = ($('#this_page').val()*1);
	var this_page = ($('#this_page').val()*1);
	if(start >= 10){
		start = Math.floor(start/10);
		start = (start*10)+1;
	}
	else{
		start = 1;
	}
	
	var end_page = $('#end_page').val();
	end_page = Math.ceil(end_page/10);
	var last_page = end_page-1;
	var next = false;
	if(start+10 <= end_page){
		end_page = start+9;
		next = true;
	}
	if(start > 10){
		$('#pagenumber_area').append('<li class="img_gap01" style="width:43px"><a href="'+url+'?this_page=0&serch_val='+serch_val+'&bb_status='+status+'"><img src="/2017/images/admin/btn_first.gif" alt="맨처음으로 가기" /></a> </li>');
		$('#pagenumber_area').append('<li class="img_gap01" style="width:35px"><a href="'+url+'?this_page='+((this_page*1)-1)+'&serch_target='+serch_target+'&serch_val='+serch_val+'&bb_status='+status+'"><img src="/2017/images/admin/btn_prev.gif" alt="이전으로 가기"  /></a></li>');
	}
	for(var i = start;i<=end_page;i++){
		if( i == ($('#this_page').val()*1)+1){
			$('#pagenumber_area').append('<li><a class="pagenumber_ctrl" href="'+url+'?this_page='+(i-1)+'&serch_target='+serch_target+'&serch_val='+serch_val+'&bb_status='+status+'">'+i+'</a></li>');
		}else{
			$('#pagenumber_area').append('<li ><a class="pagenumber" href="'+url+'?this_page='+(i-1)+'&serch_target='+serch_target+'&serch_val='+serch_val+'&bb_status='+status+'">'+i+'</a></li>');
		}
	}
	if(next == true){
		$('#pagenumber_area').append('<li class="img_gap02" style="width:37px"><a href="'+url+'?this_page='+(start+9)+'&serch_target='+serch_target+'&serch_val='+serch_val+'&bb_status='+status+'"><img src="/2017/images/admin/btn_next.gif" alt="다음으로 가기" /> </a></li>');
		$('#pagenumber_area').append('<li class="img_gap02" style="width:30px"><a href="'+url+'?this_page='+last_page+'&serch_target='+serch_target+'&serch_val='+serch_val+'&bb_status='+status+'"><img src="/2017/images/admin/btn_last.gif" alt="맨 끝으로 가기" /></a></li>');
	}
	
	
	$('.search').keypress(function(e){
		if(e.which == '13'){
			search();
		}
	});
});

function search(){
	var url = $('#page_url').val();
	$('#board_list_form').attr('method','get').attr('action',url).submit();
}

