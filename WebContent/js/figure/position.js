var SelectedFigureId;
var zIndexFrontNum = 100;
var zIndexBackNum = 100;
var objectId;
var zIndexNum = 10;
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
	objectId = e.target.id;

	console.log(SelectedFigureId);
}

