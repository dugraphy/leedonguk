$(document).ready(function(){
	//custom
	var serch_target = $('#serch_target').val();
	var serch_val = $('input[name=serch_val]').val();
	
	//
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
	
	if(start+10 < end_page){
		end_page = start+9;
		next = true;
	}
	if(start > 10){
		$('.pagenumber_list').append('<a class="pagenumber_ctrl" href="'+url+'?this_page=0&serch_target='+serch_target+'&serch_val='+serch_val+' "> 처음 </a>');
		$('.pagenumber_list').append('<a class="pagenumber_ctrl" href="'+url+'?this_page='+((this_page*1)-1)+'&serch_target='+serch_target+'&serch_val='+serch_val+'" style="padding:3px 2px 1px 2px; border:0">이전 </a>');
	}
	for(var i = start;i<=end_page;i++){
		if( i == ($('#this_page').val()*1)+1){
			$('.pagenumber_list').append('<a class="pagenumber_ctrl" href="'+url+'?this_page='+(i-1)+'&serch_target='+serch_target+'&serch_val='+serch_val+'" >'+i+'</a>');
		}else{
			$('.pagenumber_list').append('<a class="pagenumber" href="'+url+'?this_page='+(i-1)+'&serch_target='+serch_target+'&serch_val='+serch_val+'" >'+i+'</a>');
		}
	}
	if(next == true){
		$('.pagenumber_list').append('<a class="pagenumber_ctrl" href="'+url+'?this_page='+(start+9)+'&serch_target='+serch_target+'&serch_val='+serch_val+'" style="padding:3px 8px 1px 8px; border:0"> 다음 </a>');
		$('.pagenumber_list').append('<a class="pagenumber_ctrl" href="'+url+'?this_page='+last_page+'&serch_target='+serch_target+'&serch_val='+serch_val+'" style="padding:3px 2px 1px 2px; border:0"> 마지막</a>');
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

