var startX, startY, startWidth, startHeight; 
function startResize(e , target){
	createBorder(e, target);

	startX = e.clientX;
	startY = e.clientY;
	startWidth = $(target).width();
	startHeight = $(target).height();
	
	$(document).mousemove(function(e){moveResize(e, target);});
	$(document).mouseup(function(e){stopResize(e, target);});
}
function moveResize(e, target){	
	createBorder(e, target);
	
	$(target).css("width",startWidth + e.clientX - startX);
	$(target).css("height",startHeight + e.clientY - startY);
}
function stopResize(e,target){
	createBorder(e, target);
	
	$(document).unbind("mousemove");
	$(document).unbind("mouseup");
}

function startDiv7Resize(e){
	createBorder();
	
	startY = e.clientY;
	startHeight = $("#box").height();

	$(document).mousemove(moveDiv7Resize);
	$(document).mouseup(stopDiv7Resize);
}
function moveDiv7Resize(e){
	createBorder();

	$("#box").css("height", e.clientY - startY + startHeight);
}
function stopDiv7Resize(){
	createBorder();
	
	$(document).unbind("mousemove");
	$(document).unbind("mouseup");
}

function startDiv6Resize(e){
	createBorder();
	
	startX = e.clientX;
	startY = e.clientY;
	startWidth = $("#box").width();
	startHeight = $("#box").height();

	$(document).mousemove(moveDiv6Resize);
	$(document).mouseup(stopDiv6Resize);
}
function moveDiv6Resize(e){
	createBorder();

	$("#box").css("left", e.clientX);
	$("#box").css("width", startX-e.clientX + startWidth);
	$("#box").css("height", e.clientY - startY + startHeight);
}
function stopDiv6Resize(){
	createBorder();
	
	$(document).unbind("mousemove");
	$(document).unbind("mouseup");
}

function startDiv5Resize(e){
	createBorder();
	
	startX = e.clientX;
	startWidth = $("#box").width();
	
	$(document).mousemove(moveDiv5Resize);
	$(document).mouseup(stopDiv5Resize);
}
function moveDiv5Resize(e){
	createBorder();

	$("#box").css("width", e.clientX-startX + startWidth);
}
function stopDiv5Resize(){
	createBorder();
	
	$(document).unbind("mousemove");
	$(document).unbind("mouseup");
}

function startDiv4Resize(e){
	createBorder();
	
	startX = e.clientX;
	startWidth = $("#box").width();
	$(document).mousemove(moveDiv4Resize);
	$(document).mouseup(stopDiv4Resize);
}
function moveDiv4Resize(e){
	createBorder();
	$("#box").css("left", e.clientX);
	$("#box").css("width", startX-e.clientX + startWidth);
}
function stopDiv4Resize(){
	createBorder();
	
	$(document).unbind("mousemove");
	$(document).unbind("mouseup");
}

function startDiv3Resize(e){
	createBorder();
	
	startX = e.clientX;
	startY = e.clientY;
	startWidth = $("#box").width();
	startHeight = $("#box").height();
	
	$(document).mousemove(moveDiv3Resize);
	$(document).mouseup(stopDiv3Resize);	
}
function moveDiv3Resize(e){	
	createBorder();
	$("#box").css("top", e.clientY);
	$("#box").css("width",startWidth + e.clientX - startX);
	$("#box").css("height",startHeight + startY- e.clientY);
}
function stopDiv3Resize(){
	createBorder();
	
	$(document).unbind("mousemove");
	$(document).unbind("mouseup");
}

function startDiv2Resize(e){
	createBorder();
	
	startY = e.clientY;
	startHeight = $("#box").height();
	
	$(document).mousemove(moveDiv2Resize);
	$(document).mouseup(stopDiv2Resize);	
}
function moveDiv2Resize(e){	
	createBorder();
	$("#box").css("top", e.clientY);
	$("#box").css("height",startHeight + startY- e.clientY);
}
function stopDiv2Resize(){
	createBorder();
	
	$(document).unbind("mousemove");
	$(document).unbind("mouseup");
}

function startDiv1Resize(e){
	createBorder();
	
	startX = e.clientX;
	startY = e.clientY;
	startWidth = $("#box").width();
	startHeight = $("#box").height();
	
	$(document).mousemove(moveDiv1Resize);
	$(document).mouseup(stopDiv1Resize);	
}
function moveDiv1Resize(e){	
	createBorder();
	$("#box").css("left", e.clientX);
	$("#box").css("top", e.clientY);
	$("#box").css("width", startWidth + startX - e.clientX);
	$("#box").css("height",startHeight + startY- e.clientY);
}
function stopDiv1Resize(){
	createBorder();
	
	$(document).unbind("mousemove");
	$(document).unbind("mouseup");
}