require.config({
    paths : {
        jquery : 'libs/jquery/jquery',
        canvas : 'libs/html2canvas',
        figure : 'figure/create',
        drag : 'figure/drag',
        resize : 'figure/resize',
        rotation : 'figure/rotation',
        position : 'figure/position',
        color : 'figure/color',
        slide : 'slide/slide',
        animation : 'animation/animation',
        simulate : 'libs/jquery.simulate'
    }
});


require([
    'jquery', 'canvas', 'figure', 'drag', 'resize', 'rotation', 'position', 'color', 'slide', 'animation', 'simulate'
], function($){
	ani = new Animation();
	console.log("dddd");
	//$("#contents").append($("<img>").attr("src", "http://www.google.co.kr/webhp?hl=ko&tab=ww"));
	$("#circleBox").on("click", $.proxy(this.createFigure, this));
	$("#squareBox").on("click", $.proxy(this.createFigure, this));
	$("#rectangleBox").on("click", $.proxy(this.createFigure, this));
	$("#a-quater-circleBox").on("click", $.proxy(this.createFigure, this));
	$("#semicircleBox").on("click", $.proxy(this.createFigure, this));
	$("#egg-circleBox").on("click", $.proxy(this.createFigure, this));
	
	$(".slideInsert").on("click", $.proxy(this.createSlide, this));
	$(".slideDelete").on("click", $.proxy(this.deleteSlide,this));
	
	$(document).on("keydown", $.proxy(this.figureDelete,this));

	$(".figureFontIcon").on("click", $.proxy(this.frontPosition, this));
	$(".figureBackIcon").on("click", $.proxy(this.backPosition, this));
	
	$(".figureColorIcon").on("mousedown", $.proxy(this.showSubFigureColor, this));

	$(".s1").on("click", $.proxy(this.setColorFigure, this));
	$(".s2").on("click", $.proxy(this.setColorFigure, this));
	$(".s3").on("click", $.proxy(this.setColorFigure, this));
	$(".s4").on("click", $.proxy(this.setColorFigure, this));
	$(".s5").on("click", $.proxy(this.setColorFigure, this));
	$(".s6").on("click", $.proxy(this.setColorFigure, this));
	$(".s7").on("click", $.proxy(this.setColorFigure, this));
	$(".s8").on("click", $.proxy(this.setColorFigure, this));
	$(".s9").on("click", $.proxy(this.setColorFigure, this));
	$(".s10").on("click", $.proxy(this.setColorFigure, this));
	$("#selectedColor").on("click", $.proxy(this.selectedColorSetFigure, this));
	
//	var windowWidth = $(window).width();
//	var windowHeight =  $(window).height();
//	$(window).resize(function(e){	
//	   changeLeft = (windowWidth - $(window).width())/10;
//	   changeTop = (windowHeight - $(window).height())/10;
//
//	   for(var i=1;i<n+1;i++){
//		   originalLeft = $("#"+i).position().left;
//		   originalTop = $("#"+i).position().top;
//		   
//		   var changedLeft = originalLeft-changeLeft;
//		   var changedTop = originalTop-changeTop;
//	
//		   $("#"+i).css("left",changedLeft);
//		   $("#"+i).css("top",changedTop);
//		   
//		   createBorder();
//	   }
//	   
//	   windowWidth = $(window).width();
//	   windowHeight = $(window).height();
//	});

});

require([
], function(){
    require.config({
        baseUrl: "../js"
    });

    var testModules = [
          "../js/figure/figureTest.js",
          "../js/slide/slideTest.js",
          "../js/animation/animationTest.js"
    ];

    require( testModules, function() {
    });
});