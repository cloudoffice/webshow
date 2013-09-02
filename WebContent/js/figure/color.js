var SelectedFigureId;
var objectId;
function findFigure(e){
	SelectedFigureId = e.currentTarget.id;
	objectId = e.target.id;

}
function setColorFigure(e){
	$("#"+objectId).css("background-color", $( e.target).css('background-color'));
	$("#selectedColor").css("background-color", $( e.target).css('background-color'));
	
	applyToWindowCapture();
}
