var startX, startY, startWidth, startHeight, divtarget, _divtarget, classname;
function findFigure(e){
	SelectedFigureId = e.currentTarget.id;
	objectId = e.target.id;
}
function startResize(e){
	createBorder(e);
	
	divtarget = SelectedFigureId;
	_divtarget = objectId;
	startX = e.clientX;
	startY = e.clientY;
	
	startWidth = $("#"+divtarget).width();
	startHeight = $("#"+divtarget).height();
	
	$(document).mousemove(moveResize);
	$(document).mouseup(stopResize);	
}
function moveResize(e){	
	createBorder(e, divtarget);
	
	$("#"+divtarget).css("width",startWidth + e.clientX - startX);
	$("#"+divtarget).css("height",startHeight + e.clientY - startY);
	$("#"+_divtarget).css("width",startWidth + e.clientX - startX);
	$("#"+_divtarget).css("height",startHeight + e.clientY - startY);
	
	radius = $("#"+divtarget).width()/2;
	classname = $("#"+_divtarget).attr('class');
	if(classname =='circle'){
		$("#"+_divtarget).css("border-radius", radius);
	}
}
function stopResize(e){
	createBorder(e);
	
	$(document).unbind("mousemove");
	$(document).unbind("mouseup");
	
	applyToWindowCapture();
}

function startDiv7Resize(e){
	createBorder(e);
	
	divtarget = SelectedFigureId;
	_divtarget = objectId;
	
	startY = e.clientY;
	startHeight = $("#"+divtarget).height();

	$(document).mousemove(moveDiv7Resize);
	$(document).mouseup(stopDiv7Resize);
	
}
function moveDiv7Resize(e){
	createBorder(e);

	$("#"+divtarget).css("height", e.clientY - startY + startHeight);
	$("#"+_divtarget).css("height", e.clientY - startY + startHeight);
	
}
function stopDiv7Resize(e){
	createBorder(e);
	
	$(document).unbind("mousemove");
	$(document).unbind("mouseup");
	
	applyToWindowCapture();
}

function startDiv6Resize(e){
	createBorder(e);
	
	divtarget = SelectedFigureId;
	_divtarget = objectId;
	
	startX = e.clientX;
	startY = e.clientY;
	startWidth = $("#"+divtarget).width();
	startHeight = $("#"+divtarget).height();

	$(document).mousemove(moveDiv6Resize);
	$(document).mouseup(stopDiv6Resize);
	
}
function moveDiv6Resize(e){
	createBorder(e);

	$("#"+divtarget).css("left", e.clientX);
	$("#"+divtarget).css("width", startX-e.clientX + startWidth);
	$("#"+divtarget).css("height", e.clientY - startY + startHeight);
	
	$("#"+_divtarget).css("left", e.clientX);
	$("#"+_divtarget).css("width", startX-e.clientX + startWidth);
	$("#"+_divtarget).css("height", e.clientY - startY + startHeight);
	
}
function stopDiv6Resize(e){
	createBorder(e);
	
	$(document).unbind("mousemove");
	$(document).unbind("mouseup");
	
	applyToWindowCapture();
}

function startDiv5Resize(e){
	createBorder(e);
	
	divtarget = SelectedFigureId;
	_divtarget = objectId;
	
	startX = e.clientX;
	startWidth = $("#"+divtarget).width();
	
	$(document).mousemove(moveDiv5Resize);
	$(document).mouseup(stopDiv5Resize);
	
}
function moveDiv5Resize(e){
	createBorder(e);

	$("#"+divtarget).css("width", e.clientX-startX + startWidth);
	$("#"+_divtarget).css("width", e.clientX-startX+startWidth);
	
}
function stopDiv5Resize(e){
	createBorder(e);
	
	$(document).unbind("mousemove");
	$(document).unbind("mouseup");
	
	applyToWindowCapture();
}

function startDiv4Resize(e){
	createBorder(e);
	
	divtarget = SelectedFigureId;
	_divtarget = objectId;
	
	startX = e.clientX;
	startWidth = $("#"+divtarget).width();
	sub_startWidth = $("#"+_divtarget).width();
	
	$(document).mousemove(moveDiv4Resize);
	$(document).mouseup(stopDiv4Resize);
	
}
function moveDiv4Resize(e){
	createBorder(e);
	
	$("#"+divtarget).css("left", e.clientX);
	$("#"+divtarget).css("width", startX-e.clientX + startWidth);
	$("#"+_divtarget).css("left",e.clientX);
	$("#"+_divtarget).css("width", startX-e.clientX + startWidth);
	
}
function stopDiv4Resize(e){
	createBorder(e);
	
	$(document).unbind("mousemove");
	$(document).unbind("mouseup");
	
	applyToWindowCapture();
}

function startDiv3Resize(e){
	createBorder(e);
	
	divtarget = SelectedFigureId;
	_divtarget = objectId;
	
	startX = e.clientX;
	startY = e.clientY;
	startWidth = $("#"+divtarget).width();
	startHeight = $("#"+divtarget).height();
	
	$(document).mousemove(moveDiv3Resize);
	$(document).mouseup(stopDiv3Resize);	
	
}
function moveDiv3Resize(e){	
	createBorder(e);
	$("#"+divtarget).css("top", e.clientY);
	$("#"+divtarget).css("width",startWidth + e.clientX - startX);
	$("#"+divtarget).css("height",startHeight + startY- e.clientY);
	$("#"+_divtarget).css("top", e.clientY);
	$("#"+_divtarget).css("width",startWidth + e.clientX - startX);
	$("#"+_divtarget).css("height",startHeight + startY- e.clientY);
	
}
function stopDiv3Resize(e){
	createBorder(e);
	
	$(document).unbind("mousemove");
	$(document).unbind("mouseup");
	
	applyToWindowCapture();
}

function startDiv2Resize(e){
	createBorder(e);
	
	divtarget = SelectedFigureId;
	_divtarget = objectId;
	
	startY = e.clientY;
	startHeight = $("#"+divtarget).height();
	
	$(document).mousemove(moveDiv2Resize);
	$(document).mouseup(stopDiv2Resize);	
	
}
function moveDiv2Resize(e){	
	createBorder(e);
	$("#"+divtarget).css("top", e.clientY);
	$("#"+divtarget).css("height",startHeight + startY- e.clientY);
	$("#"+_divtarget).css("top", e.clientY);
	$("#"+_divtarget).css("height",startHeight + startY- e.clientY);
	
}
function stopDiv2Resize(e){
	createBorder(e);
	
	$(document).unbind("mousemove");
	$(document).unbind("mouseup");
	
	applyToWindowCapture();
}

function startDiv1Resize(e){
	createBorder(e);
	
	divtarget = SelectedFigureId;
	_divtarget = objectId;
	
	startX = e.clientX;
	startY = e.clientY;
	startWidth = $("#"+divtarget).width();
	startHeight = $("#"+divtarget).height();
	
	$(document).mousemove(moveDiv1Resize);
	$(document).mouseup(stopDiv1Resize);	
	
}
function moveDiv1Resize(e){	
	createBorder(e);
	
	$("#"+divtarget).css("left", e.clientX);
	$("#"+divtarget).css("top", e.clientY);
	$("#"+divtarget).css("width", startWidth + startX - e.clientX);
	$("#"+divtarget).css("height",startHeight + startY- e.clientY);
	
	$("#"+_divtarget).css("left", e.clientX);
	$("#"+_divtarget).css("top", e.clientY);
	$("#"+_divtarget).css("width", startWidth + startX - e.clientX);
	$("#"+_divtarget).css("height",startHeight + startY- e.clientY);
	
}
function stopDiv1Resize(e){
	createBorder(e);
	
	$(document).unbind("mousemove");
	$(document).unbind("mouseup");
	
	applyToWindowCapture();
}