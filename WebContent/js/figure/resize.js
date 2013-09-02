var startX, startY, startWidth, startHeight, sub_startWidth, sub_startHeight; 
function startResize(e , target, sub_target){
	createBorder(e, target, sub_target);
	console.log(e.clientX);
	startX = e.clientX;
	startY = e.clientY;
	startWidth = $(target).width();
	startHeight = $(target).height();
	sub_startWidth = $(sub_target).width();
	sub_startHeight = $(sub_target).height();
	
	$(document).mousemove(function(e){moveResize(e, target, sub_target);});
	$(document).mouseup(function(e){stopResize(e, target, sub_target);});
	
}
function moveResize(e, target, sub_target){	
	createBorder(e, target, sub_target);
	
	$(target).css("width",startWidth + e.clientX - startX);
	$(target).css("height",startHeight + e.clientY - startY);
	
	$(sub_target).css("width", sub_startWidth +e.clientX - startX);
	$(sub_target).css("height", sub_startHeight + e.clientY - startY);

	
}
function stopResize(e,target, sub_target){
	createBorder(e, target, sub_target);
	
	$(document).unbind("mousemove");
	$(document).unbind("mouseup");
	applyToWindowCapture();
}

function startDiv7Resize(e,target, sub_target){
	console.log('7');
	createBorder(e,target, sub_target);
	
	startY = e.clientY;
	startHeight = $(target).height();
	sub_startHeight = $(sub_target).height();

	$(document).mousemove(function(e){moveDiv7Resize(e, target, sub_target);});
	$(document).mouseup(function(e){stopDiv7Resize(e, target, sub_target);});
	
}
function moveDiv7Resize(e,target, sub_target){
	createBorder(e,target, sub_target);

	$(target).css("height", e.clientY - startY + startHeight);
	$(sub_target).css("height", e.clientY - startY + sub_startHeight);
	
}
function stopDiv7Resize(e,target, sub_target){
	createBorder(e,target, sub_target);
	
	$(document).unbind("mousemove");
	$(document).unbind("mouseup");
	
	applyToWindowCapture();
}

function startDiv6Resize(e,target, sub_target){
	console.log('6');
	createBorder(e,target, sub_target);
	
	startX = e.clientX;
	startY = e.clientY;
	startWidth = $(target).width();
	startHeight = $(target).height();
	sub_startWidth = $(sub_target).width();
	sub_startHeight = $(sub_target).height();

	$(document).mousemove(function(e){moveDiv6Resize(e, target, sub_target);});
	$(document).mouseup(function(e){stopDiv6Resize(e, target, sub_target);});
	
}
function moveDiv6Resize(e,target, sub_target){
	createBorder(e,target, sub_target);

	$(target).css("left", e.clientX);
	$(target).css("width", startX-e.clientX + startWidth);
	$(target).css("height", e.clientY - startY + startHeight);
	
	$(sub_target).css("left", e.clientX);
	$(sub_target).css("width", startX-e.clientX + sub_startWidth);
	$(sub_target).css("height", e.clientY - startY + sub_startHeight);
	
}
function stopDiv6Resize(e,target, sub_target){
	createBorder(e,target, sub_target);
	
	$(document).unbind("mousemove");
	$(document).unbind("mouseup");
	
	applyToWindowCapture();
}

function startDiv5Resize(e,target, sub_target){
	console.log('5');
	createBorder(e,target, sub_target);
	
	startX = e.clientX;
	startWidth = $(target).width();
	sub_startWidth = $(sub_target).width();
	
	$(document).mousemove(function(e){moveDiv5Resize(e, target, sub_target);});
	$(document).mouseup(function(e){stopDiv5Resize(e, target, sub_target);});
	
}
function moveDiv5Resize(e,target, sub_target){
	createBorder(e,target, sub_target);

	$(target).css("width", e.clientX-startX + startWidth);
	$(sub_target).css("width", e.clientX-startX+sub_startWidth);
	
}
function stopDiv5Resize(e,target, sub_target){
	createBorder(e,target, sub_target);
	
	$(document).unbind("mousemove");
	$(document).unbind("mouseup");
	
	applyToWindowCapture();
}

function startDiv4Resize(e,target, sub_target){
	console.log('4');
	createBorder(e,target, sub_target);
	
	startX = e.clientX;
	startWidth = $(target).width();
	sub_startWidth = $(sub_target).width();
	
	$(document).mousemove(function(e){moveDiv4Resize(e, target, sub_target);});
	$(document).mouseup(function(e){stopDiv4Resize(e, target, sub_target);});
	
}
function moveDiv4Resize(e,target, sub_target){
	createBorder(e,target, sub_target);
	$(target).css("left", e.clientX);
	$(target).css("width", startX-e.clientX + startWidth);
	$(sub_target).css("left",e.clientX);
	$(sub_target).css("width", startX-e.clientX + sub_startWidth);
	
}
function stopDiv4Resize(e,target, sub_target){
	createBorder(e,target, sub_target);
	
	$(document).unbind("mousemove");
	$(document).unbind("mouseup");
	
	applyToWindowCapture();
}

function startDiv3Resize(e,target, sub_target){
	console.log('3');
	createBorder(e,target, sub_target);
	
	startX = e.clientX;
	startY = e.clientY;
	startWidth = $(target).width();
	startHeight = $(target).height();
	sub_startWidth = $(sub_target).width();
	sub_startHeight = $(sub_target).height();
	
	$(document).mousemove(function(e){moveDiv3Resize(e, target, sub_target);});
	$(document).mouseup(function(e){stopDiv3Resize(e, target, sub_target);});	
	
}
function moveDiv3Resize(e,target, sub_target){	
	createBorder(e,target, sub_target);
	$(target).css("top", e.clientY);
	$(target).css("width",startWidth + e.clientX - startX);
	$(target).css("height",startHeight + startY- e.clientY);
	$(sub_target).css("top", e.clientY);
	$(sub_target).css("width",sub_startWidth + e.clientX - startX);
	$(sub_target).css("height",sub_startHeight + startY- e.clientY);
	
}
function stopDiv3Resize(e,target, sub_target){
	createBorder(e,target, sub_target);
	
	$(document).unbind("mousemove");
	$(document).unbind("mouseup");
	
	applyToWindowCapture();
}

function startDiv2Resize(e,target, sub_target){
	console.log('2');
	createBorder(e,target, sub_target);
	
	startY = e.clientY;
	startHeight = $(target).height();
	sub_startHeight = $(sub_target).height();
	
	$(document).mousemove(function(e){moveDiv2Resize(e, target, sub_target);});
	$(document).mouseup(function(e){stopDiv2Resize(e, target, sub_target);});	
	
}
function moveDiv2Resize(e,target, sub_target){	
	createBorder(e,target, sub_target);
	$(target).css("top", e.clientY);
	$(target).css("height",startHeight + startY- e.clientY);
	$(sub_target).css("top", e.clientY);
	$(sub_target).css("height",sub_startHeight + startY- e.clientY);
	
}
function stopDiv2Resize(e,target, sub_target){
	createBorder(e,target, sub_target);
	
	$(document).unbind("mousemove");
	$(document).unbind("mouseup");
	
	applyToWindowCapture();
}

function startDiv1Resize(e,target ,sub_target){
	console.log('1');
	createBorder(e,target,sub_target);
	
	startX = e.clientX;
	startY = e.clientY;
	startWidth = $(target).width();
	startHeight = $(target).height();
	sub_startWidth = $(sub_target).width();
	sub_startHeight = $(sub_target).height();
	
	$(document).mousemove(function(e){moveDiv1Resize(e, target,sub_target);});
	$(document).mouseup(function(e){stopDiv1Resize(e, target,sub_target);});	
	
}
function moveDiv1Resize(e,target,sub_target){	
	createBorder(e,target,sub_target);
	
	$(target).css("left", e.clientX);
	$(target).css("top", e.clientY);
	$(target).css("width", startWidth + startX - e.clientX);
	$(target).css("height",startHeight + startY- e.clientY);
	
	$(sub_target).css("left", e.clientX);
	$(sub_target).css("top", e.clientY);
	$(sub_target).css("width", sub_startWidth + startX - e.clientX);
	$(sub_target).css("height",sub_startHeight + startY- e.clientY);
	
}
function stopDiv1Resize(e,target,sub_target){
	createBorder(e,target,sub_target);
	
	$(document).unbind("mousemove");
	$(document).unbind("mouseup");
	
	applyToWindowCapture();
}