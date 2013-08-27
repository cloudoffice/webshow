require.config({
    paths : {
        jquery : 'libs/jquery/jquery',
        figure : 'create',
        drag : 'drag',
        resize : 'resize'
    }
});


require([
    'jquery', 'figure', 'drag', 'resize'
], function($){
	console.log("dddd");
	//$("#contents").append($("<img>").attr("src", "http://www.google.co.kr/webhp?hl=ko&tab=ww"));
	$("#one").click(function(e){
			createFigure(e, this);
			$(document).unbind("click");
	});
	$("#two").click(function(e){
		createFigure(e, this);
		$(document).unbind("click");
	});	
	$("#three").click(function(e){
		console.log(e);
		createFigure(e, this);
		$(document).unbind("click");
	});	
	$("#four").click(function(e){
		createFigure(e, this);
		$(document).unbind("click");
	});	
	$("#five").click(function(e){
		createFigure(e, this);
		$(document).unbind("click");
	});	
	$("#six").click(function(e){
		createFigure(e, this);
		$(document).unbind("click");
	});	
	$("#seven").click(function(e){
		createFigure(e, this);
		$(document).unbind("click");
	});	
});