var x, y;
var target;
function startDrag(e){
	e.originalEvent.preventDefault();
	createBorder(e);
//	createText();		

	target = e.currentTarget.id;
	x = $("#"+target).offset().left - e.clientX;
	y = $("#"+target).offset().top - e.clientY;
	
	$(document).mousemove(moveDrag);
	$(document).mouseup(stopDrag);
	
}
function moveDrag(e){
	createBorder(e);
//	createText();		
	var dragLeft = e.clientX + x;
	var dragTop = e.clientY + y;
	
	if($(".doc").offset().left >= dragLeft || $(".doc").offset().top >= dragTop){
		
	}else if($(".doc").offset().left+$(".doc").width() <= dragLeft+$("#"+target).width() || $(".doc").offset().top+$(".doc").height() <= dragTop+$("#"+target).height() ){
	
	}else{	
		$("#"+target).css("left", dragLeft);
		$("#"+target).css("top", dragTop );
	}
}
function stopDrag(e){
	createBorder(e);
//	createText();		

	$(document).unbind("mousemove");
	$(document).unbind("mouseup");
	
	applyToWindowCapture();
}