var startX, startY, startWidth, startHeight,sub_startWidth, sub_startHeight, divtarget, _divtarget, classname;
function startResize(e){
	createBorder(e);
	
	divtarget = SelectedFigureId;
	_divtarget = objectId;
	startX = e.clientX;
	startY = e.clientY;
	
	startWidth = $("#"+divtarget).width();
	startHeight = $("#"+divtarget).height();
	sub_startWidth = $("#"+_divtarget).width();
	sub_startHeight = $("#"+_divtarget).height();
	$(document).mousemove(moveResize);
	$(document).mouseup(stopResize);	
}
function moveResize(e){	
	createBorder(e);
	
	$("#"+divtarget).css("width",startWidth + e.clientX - startX);
	$("#"+divtarget).css("height",startHeight + e.clientY - startY);
	$("#"+_divtarget).css("width",sub_startWidth + e.clientX - startX);
	$("#"+_divtarget).css("height",sub_startHeight + e.clientY - startY);
	
	classname = $("#"+_divtarget).attr('class');
	if(classname =='circle'){
		radius = $("#"+divtarget).width()/2;
		$("#"+_divtarget).css("border-radius", radius);
	}else if(classname == 'six-point-star'){
		radius = $("#"+divtarget).width()-10;
		$("#"+_divtarget).css("border-top-left-radius",  radius);
		$("#"+_divtarget).css("border-top-right-radius",  radius);
	}else if(classname == 'twelve-point-star'){
		radius = $("#"+divtarget).width();
		$("#"+_divtarget).css("border-top-right-radius",  radius);
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
	sub_startHeight = $("#"+_divtarget).height();
	
	$(document).mousemove(moveDiv7Resize);
	$(document).mouseup(stopDiv7Resize);
	
}
function moveDiv7Resize(e){
	createBorder(e);

	$("#"+divtarget).css("height", e.clientY - startY + startHeight);
	$("#"+_divtarget).css("height", e.clientY - startY + sub_startHeight);
	
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
	sub_startWidth = $("#"+_divtarget).width();
	sub_startHeight = $("#"+_divtarget).height();

	$(document).mousemove(moveDiv6Resize);
	$(document).mouseup(stopDiv6Resize);
	
}
function moveDiv6Resize(e){
	createBorder(e);
	var docLeft =$(".doc").offset().left;
	$("#"+divtarget).css("left", e.clientX-docLeft);
	$("#"+divtarget).css("width", startX-e.clientX + startWidth);
	$("#"+divtarget).css("height", e.clientY - startY + startHeight);
	
	$("#"+_divtarget).css("left", e.clientX-docLeft);
	$("#"+_divtarget).css("width", startX-e.clientX + sub_startWidth);
	$("#"+_divtarget).css("height", e.clientY - startY + sub_startHeight);
	
	classname = $("#"+_divtarget).attr('class');
	radius = $("#"+divtarget).width()/2;
	if(classname =='circle'){
		$("#"+_divtarget).css("border-radius", radius);
	}
	
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
	sub_startWidth = $("#"+_divtarget).width();
	
	$(document).mousemove(moveDiv5Resize);
	$(document).mouseup(stopDiv5Resize);
	
}
function moveDiv5Resize(e){
	createBorder(e);

	$("#"+divtarget).css("width", e.clientX-startX + startWidth);
	$("#"+_divtarget).css("width", e.clientX-startX+sub_startWidth);
	
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
	var docLeft =$(".doc").offset().left;
	$("#"+divtarget).css("left", e.clientX-docLeft);
	$("#"+divtarget).css("width", startX-e.clientX + startWidth);
	$("#"+_divtarget).css("left",e.clientX-docLeft);
	$("#"+_divtarget).css("width", startX-e.clientX + sub_startWidth);
	
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
	sub_startWidth = $("#"+_divtarget).width();
	sub_startHeight = $("#"+_divtarget).height();
	
	$(document).mousemove(moveDiv3Resize);
	$(document).mouseup(stopDiv3Resize);	
	
}
function moveDiv3Resize(e){	
	createBorder(e);
	var docTop =$(".doc").offset().top;
	$("#"+divtarget).css("top", e.clientY-docTop);
	$("#"+divtarget).css("width",startWidth + e.clientX - startX);
	$("#"+divtarget).css("height",startHeight + startY- e.clientY);
	$("#"+_divtarget).css("top", e.clientY-docTop);
	$("#"+_divtarget).css("width",sub_startWidth + e.clientX - startX);
	$("#"+_divtarget).css("height",sub_startHeight + startY- e.clientY);
	
	classname = $("#"+_divtarget).attr('class');
	radius = $("#"+divtarget).width()/2;
	if(classname =='circle'){
		$("#"+_divtarget).css("border-radius", radius);
	}	
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
	sub_startHeight = $("#"+_divtarget).height();

	$(document).mousemove(moveDiv2Resize);
	$(document).mouseup(stopDiv2Resize);	
	
}
function moveDiv2Resize(e){	
	createBorder(e);
	var docTop =$(".doc").offset().top;
	$("#"+divtarget).css("top", e.clientY-docTop);
	$("#"+divtarget).css("height",startHeight + startY- e.clientY);
	$("#"+_divtarget).css("top", e.clientY-docTop);
	$("#"+_divtarget).css("height",sub_startHeight + startY- e.clientY);
	
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
	sub_startWidth = $("#"+_divtarget).width();
	sub_startHeight = $("#"+_divtarget).height();
	
	$(document).mousemove(moveDiv1Resize);
	$(document).mouseup(stopDiv1Resize);	
	
}
function moveDiv1Resize(e){	
	createBorder(e);
	var docLeft =$(".doc").offset().left;
	var docTop =$(".doc").offset().top;

	$("#"+divtarget).css("left", e.clientX-docLeft);
	$("#"+divtarget).css("top", e.clientY-docTop);
	$("#"+divtarget).css("width", startWidth + startX - e.clientX);
	$("#"+divtarget).css("height",startHeight + startY- e.clientY);
	
	$("#"+_divtarget).css("left", e.clientX-docLeft);
	$("#"+_divtarget).css("top", e.clientY-docTop);
	$("#"+_divtarget).css("width", sub_startWidth + startX - e.clientX);
	$("#"+_divtarget).css("height",sub_startHeight + startY- e.clientY);
	
	classname = $("#"+_divtarget).attr('class');
	radius = $("#"+divtarget).width()/2;
	if(classname =='circle'){
		$("#"+_divtarget).css("border-radius", radius);
	}	
}
function stopDiv1Resize(e){
	createBorder(e);
	
	$(document).unbind("mousemove");
	$(document).unbind("mouseup");
	
	applyToWindowCapture();
}