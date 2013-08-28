var x, y;
function startDrag(e, target){
	e.originalEvent.preventDefault();
	createBorder(e,target);
//	createText();		

	x = $(target).offset().left - e.clientX;
	y = $(target).offset().top - e.clientY;

	$(document).mousemove(function(e){moveDrag(e,target);});
	$(document).mouseup(function(e){stopDrag(e,target);});
	
	applyToWindowCapture();
}
function moveDrag(e, target){
	console.log(e);
	createBorder(e, target);
//	createText();		

	$(target).css("left", e.clientX + x - $("#doc").offset().left);
	$(target).css("top", e.clientY + y - $("#doc").offset().top);
	
	applyToWindowCapture();
}
function stopDrag(e,target){
	createBorder(e,target);
//	createText();		

	$(document).unbind("mousemove");
	$(document).unbind("mouseup");
	
	applyToWindowCapture();
}