var thum_number = 1;
function createSlide(e){
	thum_number++;
	$("<div id='thumbnailbox"+thum_number+"'class='thumbnail'></div>").appendTo(".thumbnails");
	$("<span id='thumbName"+thum_number+"'class='thumbName'>"+thum_number+"</span>").appendTo("#thumbnailbox"+thum_number);
	$("<div id='thum"+thum_number+"' class='thumbnail1'>&nbsp;</div>").appendTo("#thumbnailbox"+thum_number);
	
	$("<div id='doc"+thum_number+"' class='doc'></div>").appendTo(".docWrap");
	$("#doc"+thum_number).css("display","inline");
	for(var i=1;i<thum_number;i++){
		$("#doc"+i).css("display","none");
	}
	
	$("#thum1").on("click",$.proxy( this.mainSlideSelect, this, e, 1));
	$(".thumbWrap").delegate("#thum"+thum_number, "click",$.proxy( this.mainSlideSelect, this, e,thum_number));
}
function mainSlideSelect(e, target){
	for(var i=1;i<thum_number+1;i++){
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
function deleteSlide(e){
	var target = mainSlideSearch();
	var _target = target+1;
	var count = $(".docWrap div").length;

	$("#doc"+target).remove();	
	$("#doc"+_target).css("display","inline");	
	$("#thumbnailbox"+target).remove();	
	
	thum_number = thum_number-1;
	for(var i=_target;i<count+1;i++){
		var _num = i-1;
		$("#thumbnailbox"+i).attr("id","thumbnailbox"+_num);
		$("#thumbName"+i).text(_num);
		$("#thumbName"+i).attr("id", "thumbName"+_num);
//		$("#thumbName"+i).html("");
		$("#thum"+i).attr("id", "thum"+_num);
		
		$("#doc"+i).attr("id","doc"+_num);
	}
	
}
