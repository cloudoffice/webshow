var SelectedFigureId;
var zIndexNum = 10;
function frontPosition(e){
	zIndexNum = zIndexNum+5;
//	$("#"+1).css('z-index', zIndexNum);
	$("#"+SelectedFigureId).css('z-index', zIndexNum);
//	console.log($("#"+SelectedFigureId).css('z-index'));
}
function backPosition(e){
	zIndexNum = zIndexNum-5;
}
function findFigure(e){
	SelectedFigureId = e.currentTarget.id;
	console.log(SelectedFigureId);
}

