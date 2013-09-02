var SelectedFigureId;
var objectId;
function findFigure(e){
	SelectedFigureId = e.currentTarget.id;
	objectId = e.target.id;

//	console.log($("#"+objectId));
}
function setColorFigure(e){
	console.log($( e.target).css('background-color'));
	$("#"+objectId).css("background-color", $( e.target).css('background-color'));
	$("#selectedColor").css("background-color", $( e.target).css('background-color'));
	
	applyToWindowCapture();
}
