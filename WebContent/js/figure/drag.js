var x, y;
var dragTarget;
function startDrag(e){
	e.originalEvent.preventDefault();
	findFigure(e);
	createBorder();
//	createText();		

	dragTarget = e.currentTarget.id;
	x = $("#"+dragTarget).position().left - e.clientX;
	y = $("#"+dragTarget).position().top - e.clientY;
	
	$(document).mousemove(moveDrag);
	$(document).mouseup(stopDrag);
	
}
function moveDrag(e){
	createBorder(e);
//	createText();		
	var dragLeft = e.clientX + x;
	var dragTop = e.clientY + y;
	
	if($(".doc").offset().left - $(".doc").position().left >= dragLeft ||  $(".doc").position().top -$("#"+dragTarget).height()/2 -15 >= dragTop){
		console.log($(".doc").position().top);
	}else if($(".doc").offset().left - $(".doc").position().left +$(".doc").width() <= dragLeft+$("#"+dragTarget).width() ||$(".doc").position().top -$("#"+dragTarget).height()/2 -15+$(".doc").height() <= dragTop+$("#"+dragTarget).height() ){
	
	}else{	
		$("#"+dragTarget).css("left", dragLeft);
		$("#"+dragTarget).css("top", dragTop );
	}
}
function stopDrag(e){
	createBorder(e);
//	createText();		

	$(document).unbind("mousemove");
	$(document).unbind("mouseup");
	
	applyToWindowCapture();
}