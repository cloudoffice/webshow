var SelectedFigureId;
var zIndexFrontNum = 100;
var zIndexBackNum = 100;
var objectId;
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
//delete  event.which  46
function figureDelete(e){
//	console.log(e);
	if(e.which == 46){
		console.log("dd");
		$("#"+SelectedFigureId).remove();
		
		$("#b_border").remove();
		$("#div1").remove();
		$("#div2").remove();
		$("#div3").remove();
		$("#div4").remove();
		$("#div5").remove();
		$("#div6").remove();
		$("#div7").remove();
		$("#div8").remove();
		$("#rotation_div").remove();
		$("#rotation_div").remove();
		$("#rotation_div").remove();
		
		applyToWindowCapture();
	}
	
}
function findFigure(e){
	SelectedFigureId = e.currentTarget.id;
	objectId = e.target.id;

	console.log(SelectedFigureId);
}

