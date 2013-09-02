
function setColorFigure(e){
	$("#"+objectId).css("background-color", $( e.target).css('background-color'));
	$("#selectedColor").css("background-color", $( e.target).css('background-color'));
	
	applyToWindowCapture();
}
