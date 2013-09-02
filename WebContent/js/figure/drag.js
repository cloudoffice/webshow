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
	$("#"+target).css("left", e.clientX + x );
	$("#"+target).css("top", e.clientY + y );

}
function stopDrag(e,target){
	createBorder(e);
//	createText();		

	$(document).unbind("mousemove");
	$(document).unbind("mouseup");
	
	applyToWindowCapture();
}