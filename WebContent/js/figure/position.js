var SelectedFigureId;
var zIndexFrontNum = 100;
var zIndexBackNum = 100;
function frontPosition(e){
	zIndexFrontNum = zIndexFrontNum+5;
//	$("#"+1).css('z-index', zIndexNum);
	$("#"+SelectedFigureId).css('z-index', zIndexFrontNum);
//	console.log($("#"+SelectedFigureId).css('z-index'));
}
function backPosition(e){
	zIndexBackNum = zIndexBackNum-5;
	$("#"+SelectedFigureId).css('z-index', zIndexBackNum);
}
function findFigure(e){
	SelectedFigureId = e.currentTarget.id;
//	console.log(SelectedFigureId);
}

