var rotationTarget;
var degree;
function startRotation(e){
	createBorder(e);
	rotationTarget = e.target.id;
	$(document).mousemove(moveRotation);
	$(document).mouseup(stopRotation);
}
function moveRotation(e){
//	createBorder(e);
	
	var centerX = $("#"+rotationTarget).offset().left+ $("#"+rotationTarget).width()/2;
	var centerY = $("#"+rotationTarget).offset().top+ $("#"+rotationTarget).height()/2;
	var pointX = e.clientX;
	var pointY = e.clientY;
	var a = pointX-centerX;
	var b = pointY-centerY;
	var radians = Math.atan2(a, b);
	degree = ( radians * (180 / Math.PI) * -1 );
	
	$("#"+SelectedFigureId).css('-moz-transform', 'rotate(' + degree + 'deg)');
	$('#'+SelectedFigureId).css('-webkit-transform', 'rotate(' + degree + 'deg)');
	$('#'+SelectedFigureId).css('-o-transform', 'rotate(' + degree + 'deg)');
	$('#'+SelectedFigureId).css('-ms-transform', 'rotate(' + degree + 'deg)');
}
function stopRotation(e){
//	createBorder(e);
	rotationTarget = undefined;
	$('#b_border').css('-webkit-transform', 'rotate(' + degree + 'deg)');
	
	$('#div1').css('display', 'none');
	$('#div2').css('display', 'none');
	$('#div3').css('display', 'none');
	$('#div4').css('display', 'none');
	$('#div5').css('display', 'none');
	$('#div6').css('display', 'none');
	$('#div7').css('display', 'none');
	$('#div8').css('display', 'none');
	$('#divRotation').css('display', 'none');
	$('#divLine').css('display', 'none');
	
	$(document).unbind("mousemove");
	$(document).unbind("mouseup");
}