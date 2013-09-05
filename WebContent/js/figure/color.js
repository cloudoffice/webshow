
function setColorFigure(e){
	$("#"+objectId).css("background-color", $( e.target).css('background-color'));
	$("#selectedColor").css("background-color", $( e.target).css('background-color'));
	
	applyToWindowCapture();
}

function selectedColorSetFigure(e){
	$("#"+objectId).css("background-color", $( e.target).css('background-color'));
	applyToWindowCapture();
}

function showSubFigureColor(e){
	e.stopPropagation();
	$(".subFigureColor").css("display", "block");
	
	$(document).on("mousedown", closedSubFigureColor);
}
function closedSubFigureColor(e){

	$(".subFigureColor").css("display", "none");	
	$(document).unbind("mousedown",closedSubFigureColor);
}