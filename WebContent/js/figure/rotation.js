var SelectedFigureId;
var objectId;
var target;
function findFigure(e){
	SelectedFigureId = e.currentTarget.id;
	objectId = e.target.id;
}
function startRotation(e){
	target = e.target.id;
	$(document).mousemove(moveRotation);
	$(document).mouseup(stopRotation);
}
function moveRotation(e){
	var centerX = $("#"+target).offset().left+ $("#"+target).width()/2;
	var centerY = $("#"+target).offset().top+ $("#"+target).height()/2;
	var pointX = e.clientX;
	var pointY = e.clientY;
	var a = pointX-centerX;
	var b = pointY-centerY;
	var radians = Math.atan2(a, b);
	var degree = ( radians * (180 / Math.PI) * -1 );
	
	$("#"+SelectedFigureId).css('-moz-transform', 'rotate(' + degree + 'deg)');
	$('#'+SelectedFigureId).css('-webkit-transform', 'rotate(' + degree + 'deg)');
	$('#'+SelectedFigureId).css('-o-transform', 'rotate(' + degree + 'deg)');
	$('#'+SelectedFigureId).css('-ms-transform', 'rotate(' + degree + 'deg)');
	
	$("#b_border").css('-moz-transform', 'rotate(' + degree + 'deg)');
	$("#b_border").css('-webkit-transform', 'rotate(' + degree + 'deg)');
	$("#b_border").css('-o-transform', 'rotate(' + degree + 'deg)');
	$("#b_border").css('-ms-transform', 'rotate(' + degree + 'deg)');
	
/*	
	$("#div1").css('-moz-transform', 'rotate(' + degree + 'deg)');
	$("#div1").css('-webkit-transform', 'rotate(' + degree + 'deg)');
	$("#div1").css('-o-transform', 'rotate(' + degree + 'deg)');
	$("#div1").css('-ms-transform', 'rotate(' + degree + 'deg)');
*/	
//	createBorder(e);
	
}
function stopRotation(e){
//	createBorder(e);
	$(document).unbind("mousemove");
	$(document).unbind("mouseup");
}