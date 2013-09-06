var SelectedFigureId;
var objectId;
var zIndexFrontNum = 100;
var zIndexBackNum = 100;
function findFigure(e){
	SelectedFigureId = e.currentTarget.id;
	objectId = e.target.id;
}
function frontPosition(e){
	zIndexFrontNum = zIndexFrontNum+5;
	$("#"+SelectedFigureId).css('z-index', zIndexFrontNum);
	applyToWindowCapture();
}
function backPosition(e){
	zIndexBackNum = zIndexBackNum-5;
	$("#"+SelectedFigureId).css('z-index', zIndexBackNum);
	applyToWindowCapture();
}
//delete  event.which  46
function figureDelete(e){
//	e.preventDefault();
//	e.stopPropagation();
	if(e.which == 46){
		$("#"+SelectedFigureId).remove();
		borderRemove();
	}else if(e.which == 8){
		e.preventDefault();
		$("#"+SelectedFigureId).remove();
		borderRemove();
	}else{
		/*
		var _x=$("#"+SelectedFigureId).offset().left + ($("#"+SelectedFigureId).width()/4);
		var _y=$("#"+SelectedFigureId).offset().top + ($("#"+SelectedFigureId).height()/4);
		
		var _width=$("#"+SelectedFigureId).width()/2;
		
		/*
		<div id="text" contenteditable="true" style="word-wrap:break-word; display:none; cursor:text; border: 0px; z-index:20;">&nbsp;</div>
		var text = document.createElement("text");
		text.style.width = _width+"px";
		text.style.height = "auto";
		text.style.position = "absolute";
		text.style.left = _x+"px";
		text.style.top = _y +"px";
		
		$("#text").css("display","inline");
		$("#text").focus();
		*/
	}	
	
//	$(document).unbind("keydown",figureDelete);
//	$(document).on("keydown", figureDelete);
}