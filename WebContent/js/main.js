require.config({
    paths : {
        jquery : 'libs/jquery/jquery',
        canvas : 'libs/html2canvas',
        figure : 'figure/create',
        drag : 'figure/drag',
        resize : 'figure/resize',
        position : 'figure/position',
        slide : 'slide/slide'
    }
});


require([
    'jquery', 'canvas', 'figure', 'drag', 'resize', 'position', 'slide'
], function($){
	console.log("dddd");
	//$("#contents").append($("<img>").attr("src", "http://www.google.co.kr/webhp?hl=ko&tab=ww"));
	$("#circleBox").on("click", $.proxy(this.createFigure, this));
	$("#squareBox").on("click", $.proxy(this.createFigure, this));
	$("#triangleBox").on("click", $.proxy(this.createFigure, this));
	$("#twelve-point-starBox").on("click", $.proxy(this.createFigure, this));
	$("#six-point-starBox").on("click", $.proxy(this.createFigure, this));
	$("#pacmanBox").on("click", $.proxy(this.createFigure, this));
	$("#heartBox").on("click", $.proxy(this.createFigure, this));
	
	$(".slideInsert").on("click", $.proxy(this.createSlide, this));
	$(".slideDelete").on("click", $.proxy(this.deleteSlide,this));
	
	$(".doc").delegate("div","mousedown", $.proxy(this.findFigure,this));
	
//	$(".doc").delegate("click", "div", $.proxy(this.findFigure, this));
	$(".figureFontIcon").on("click", $.proxy(this.frontPosition, this));
	$(".figureBackIcon").on("click", $.proxy(this.backPosition, this));
});