var thum_number = 1;
function createSlide(e){
	console.log(e);
	thum_number++;
	$("<div id='thumbnailbox"+thum_number+"'class='thumbnail'></div>").appendTo(".thumbnails");
	$("<span class='thumbName'>"+thum_number+"</span>").appendTo("#thumbnailbox"+thum_number);
	$("<div id='thum"+thum_number+"' class='thumbnail1'>&nbsp;</div>").appendTo("#thumbnailbox"+thum_number);
	
	$("<div id='doc"+thum_number+"' class='doc'></div>").appendTo(".docWrap");
	$("#doc"+thum_number).css("display","inline");
	for(var i=1;i<thum_number;i++){
		$("#doc"+i).css("display","none");
	}
	
	$("#thum1").on("click",$.proxy( this.mainSlideSelect, this, e, 1));
	$(".thumbWrap").delegate("#thum"+thum_number, "click",$.proxy( this.mainSlideSelect, this, e,thum_number));
	
	console.log($(".docWrap"));
}
function mainSlideSelect(e, target){
//	console.log(target);
	for(var i=1;i<thum_number+1;i++){
		$("#doc"+i).css("display","none");
	}
	$("#doc"+target).attr("style","display:inline");
}
