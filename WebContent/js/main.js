require.config({
    paths : {
        jquery : 'libs/jquery/jquery',
        canvas : 'libs/html2canvas',
        figure : 'figure/create',
        drag : 'figure/drag',
        resize : 'figure/resize'
    }
});


require([
    'jquery', 'canvas', 'figure', 'drag', 'resize'
], function($){
	console.log("dddd");
	//$("#contents").append($("<img>").attr("src", "http://www.google.co.kr/webhp?hl=ko&tab=ww"));
	$("#circleBox").click(function(e){
			createFigure(e, this);
			$(document).unbind("click");
	});
	$("#squareBox").click(function(e){
		createFigure(e, this);
		$(document).unbind("click");
	});	
	$("#triangleBox").click(function(e){
		createFigure(e, this);
		$(document).unbind("click");
	});	
	$("#twelve-point-starBox").click(function(e){
		createFigure(e, this);
		$(document).unbind("click");
	});	
	$("#six-point-starBox").click(function(e){
		createFigure(e, this);
		$(document).unbind("click");
	});	
	$("#pacmanBox").click(function(e){
		createFigure(e, this);
		$(document).unbind("click");
	});	
	$("#heartBox").click(function(e){
		createFigure(e, this);
		$(document).unbind("click");
	});	
});