function createSlide(e){
	var target = mainSlideSearch();
	var _target = target+1;
	var count = $(".docWrap div").length;
	var _count = count+1;
	
	for(var i=count;i>target;i--){
		var _num = i+1;
		$("#thumbnailbox"+i).attr("id","thumbnailbox"+_num);
		$("#thumbName"+i).text(_num);
		$("#thumbName"+i).attr("id", "thumbName"+_num);
		$("#thum"+i).attr("id", "thum"+_num);
		
		$("#doc"+i).attr("id","doc"+_num);
	}

	$("<div id='thumbnailbox"+_target+"'class='thumbnail'></div>").appendTo(".thumbnails");
	
	$("<span id='thumbName"+_target+"'class='thumbName'>"+_target+"</span>").appendTo("#thumbnailbox"+_target);
	$("<div id='thum"+_target+"' class='thumbnail1'>&nbsp;</div>").appendTo("#thumbnailbox"+_target);
	
	$("<div id='doc"+_target+"' class='doc'></div>").appendTo(".docWrap");
	
	for(var i=_target;i<_count;i++){
		$("#thumbnailbox"+i).insertBefore("#thumbnailbox"+_count);
		$("#doc"+i).insertBefore("#doc"+_count);
	}
	
	for(var i=1;i<_count;i++){
		$("#doc"+i).css("display","none");
	}
	$("#doc"+_target).css("display","inline");
	

	$("#thum1").on("click",$.proxy( this.mainSlideSelect, this, e, 1));
	for(var i=1;i<_count+1;i++){
		$(".thumbWrap").delegate("#thum"+i,"click", $.proxy(this.mainSlideSelect,this,e,i));
	}	
}

function deleteSlide(e){
	var target = mainSlideSearch();
	var _target;
	var count = $(".docWrap div").length;
	
	if(target==count){
		_target = target-1;
		$("#doc"+target).remove();	
		$("#doc"+_target).css("display","inline");	
		$("#thumbnailbox"+target).remove();	
	}else{
		_target = target+1;
		$("#doc"+target).remove();
		$("#doc"+_target).css("display", "inline");
		$("#thumbnailbox"+target).remove();
		
		for(var i=_target;i<count+1;i++){
			var _num = i-1;
			$("#thumbnailbox"+i).attr("id","thumbnailbox"+_num);
			$("#thumbName"+i).text(_num);
			$("#thumbName"+i).attr("id", "thumbName"+_num);
			$("#thum"+i).attr("id", "thum"+_num);
			$("#doc"+i).attr("id","doc"+_num);
		}
	}
}

function mainSlideSelect(e, target){
	var count = $(".docWrap div").length;
	for(var i=1;i<count+1;i++){
		$("#doc"+i).css("display","none");
	}
	$("#doc"+target).css("display","inline");
}
function mainSlideSearch(){
	var count = $(".docWrap div").length;

	for(var i=1; i<count+1; i++){
		if($("#doc"+i).css('display') == 'block'){
		//	console.log($("#doc"+i).css('display'));
			return i;
		}		
	}
}

