
function setColorFigure(e){
	$("#"+objectId).css("background-color", $( e.target).css('background-color'));
	$("#selectedColor").css("background-color", $( e.target).css('background-color'));
	
	applyToWindowCapture();
}

function selectedColorSetFigure(e){
	$("#"+objectId).css("background-color", $( e.target).css('background-color'));
	applyToWindowCapture();
}