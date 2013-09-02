var n=0;
var figureLeft=500;
var figureTop=250;
var classvalue;
var width, height;
var mainNum;
function createFigure(e){
	n++;
	classvalue = $(e.currentTarget).attr("value");
	width = $(e.currentTarget).width();
	height = $(e.currentTarget).height();	
	mainNum = mainSlideSearch();
	
	$("<div id="+n+"></div>").appendTo("#doc"+mainNum);
	$("#"+n).css("width", width);
	$("#"+n).css("height", height);
	$("#"+n).css("position", 'absolute');
	$("#"+n).css("left", figureLeft);
	$("#"+n).css("top", figureTop);
	$("#"+n).css("cursor", "move");
	$("#"+n).css("z-index", "100");
	
	$("<div id="+ classvalue+n+" class="+classvalue+"></div>").appendTo("#"+n);
	/*
	var f_canvas = $(target).get(0);
	html2canvas(f_canvas, {
		onrendered: function(canvas){
			$(canvas).attr("id", classvalue+n);
	//		$(canvas).attr("class",classvalue);
			$(canvas).attr("style","width:"+width+"px; height:"+height+"px");
			
			$("#"+n).empty();
			$("#"+n).append(canvas);
		},
		width:f_canvas.width,
		height:f_canvas.height		
	});
	*/
	applyToWindowCapture();
	
	figureLeft = figureLeft + 25;
	figureTop = figureTop + 25;
	
	$(".doc").delegate("#"+n,"mousedown", $.proxy(this.findFigure,this));
//	$(".doc").delegate("#"+n,"click", $.proxy(this.createBorder,this));
	$(".doc").delegate("#"+n,"mousedown", $.proxy(this.startDrag,this));
	$(".doc").delegate("#"+n,"mouseout",function(){
		$(".doc").click(function(e){
			$("#b_border").remove();
			$("#div1").remove();
			$("#div2").remove();
			$("#div3").remove();
			$("#div4").remove();
			$("#div5").remove();
			$("#div6").remove();
			$("#div7").remove();
			$("#div8").remove();
			$("#divRotation").remove();
			$("#divLine").remove();
			$(".doc").unbind("click");
			applyToWindowCapture();
		});
	});	
};
var div = document.createElement("div"); var div1 = document.createElement("div"); var div2 = document.createElement("div"); var div3 = document.createElement("div");
var div4 = document.createElement("div"); var div5 = document.createElement("div"); var div6 = document.createElement("div"); var div7 = document.createElement("div");
var div8 = document.createElement("div"); var divRotation = document.createElement("div"); var divLine = document.createElement("div");
var w, h, l, t; 
function createBorder(e){		
	w = $("#"+SelectedFigureId).width()-1;
	h = $("#"+SelectedFigureId).height()-1;
	l = $("#"+SelectedFigureId).offset().left;	
	t = $("#"+SelectedFigureId).offset().top;
	/*if($("#"+objectId).attr('class') == 'triangle'){
		l = l-12;
		w = w+9;
	}*/
	if($("#"+objectId).attr('class') =='pacman'){
		w=w-7;
		h=h-2;
	}
	div.id= "b_border";
	div.style.width= w+"px";
	div.style.height= h+"px";
	div.style.position = "absolute";
	div.style.left = l-2+"px";
	div.style.top = t-2+"px";
	div.style.border = "3px solid rgba(0,0,0,.2)";
	div.style.cursor = "move";
	div.style.zIndex = "1";
	document.getElementById("doc"+mainNum).appendChild(div);
	
	div1.id = "div1";
	div1.style.position = "absolute";
	div1.style.left = l-5+"px";
	div1.style.top = t-5+"px";
	div1.style.width = "10px";
	div1.style.height = "10px";
	div1.style.background ="rgba(0,0,0,.4)";
	div1.style.border ="0px";
	div1.style.cursor = "nw-resize";
	div1.style.zIndex = "1";
	div1.onmousedown = $.proxy(this.startDiv1Resize, this);
	document.getElementById("doc"+mainNum).appendChild(div1);
	
	div2.id = "div2";
	div2.style.position = "absolute";
	div2.style.left = l+(w/2)-5+"px";
	div2.style.top = t-5+"px";
	div2.style.width = "10px";
	div2.style.height = "10px";
	div2.style.background ="rgba(0,0,0,.4)";
	div2.style.border ="0px";
	div2.style.cursor = "n-resize";
	div2.style.zIndex = "1";
	div2.onmousedown = $.proxy(this.startDiv2Resize, this);
	document.getElementById("doc"+mainNum).appendChild(div2);
	
	divRotation.id = "divRotation";
	divRotation.style.position = "absolute";
	divRotation.style.left = l+(w/2)-5+"px";
	divRotation.style.top = t-20+"px";
	divRotation.style.width = "10px";
	divRotation.style.height = "10px";
	divRotation.style.background ="rgba(0,0,0,.4)";
	divRotation.style.border ="0px";
	divRotation.style.cursor = "crosshair";
	divRotation.style.zIndex = "1";
	document.getElementById("doc"+mainNum).appendChild(divRotation);
//	$(".doc").delegate("#divRotation","mousedown", $.proxy(this.startRotation,this));
	$("#divRotation").mousedown($.proxy(this.startRotation,this));
	
	divLine.id = "divLine";
	divLine.style.position = "absolute";
	divLine.style.left = l+(w/2)+"px";
	divLine.style.top =  t-15+"px";
	divLine.style.width = "1px";
	divLine.style.height = "20px";
	divLine.style.background ="rgba(0,0,0,.4)";
	divLine.style.border ="0px";
	divLine.style.zIndex = "1";
	document.getElementById("doc"+mainNum).appendChild(divLine);
	
	div3.id = "div3";
	div3.style.position = "absolute";
	div3.style.left = l+w-5+1+"px";
	div3.style.top = t-5+"px";
	div3.style.width = "10px";
	div3.style.height = "10px";
	div3.style.background ="rgba(0,0,0,.4)";
	div3.style.border ="0px";
	div3.style.cursor = "ne-resize";
	div3.style.zIndex = "1";
	div3.onmousedown = $.proxy(this.startDiv3Resize, this);
	document.getElementById("doc"+mainNum).appendChild(div3);
	
	div4.id = "div4";
	div4.style.position = "absolute";
	div4.style.left = l-5+"px";
	div4.style.top = t+h/2-5+"px";
	div4.style.width = "10px";
	div4.style.height = "10px";
	div4.style.background ="rgba(0,0,0,.4)";
	div4.style.border ="0px";
	div4.style.cursor = "e-resize";
	div4.style.zIndex = "1";
	div4.onmousedown = $.proxy(this.startDiv4Resize, this);	
	document.getElementById("doc"+mainNum).appendChild(div4);
	
	div5.id = "div5";
	div5.style.position = "absolute";
	div5.style.left = l+w-5+1+"px";
	div5.style.top = t+h/2-5+"px";
	div5.style.width = "10px";
	div5.style.height = "10px";
	div5.style.background ="rgba(0,0,0,.4)";
	div5.style.border ="0px";
	div5.style.cursor = "w-resize";
	div5.style.zIndex = "1";
	div5.onmousedown = $.proxy(this.startDiv5Resize, this);	
	document.getElementById("doc"+mainNum).appendChild(div5);
	
	div6.id = "div6";
	div6.style.position = "absolute";
	div6.style.left = l-5+"px";
	div6.style.top = t+h-5+1+"px";
	div6.style.width = "10px";
	div6.style.height = "10px";
	div6.style.background ="rgba(0,0,0,.4)";
	div6.style.border ="0px";
	div6.style.cursor = "sw-resize";
	div6.style.zIndex = "1";
	div6.onmousedown = $.proxy(this.startDiv6Resize, this);
	document.getElementById("doc"+mainNum).appendChild(div6);
	
	div7.id = "div7";
	div7.style.position = "absolute";
	div7.style.left = l+w/2-5+"px";
	div7.style.top = t+h-5+1+"px";
	div7.style.width = "10px";
	div7.style.height = "10px";
	div7.style.background ="rgba(0,0,0,.4)";
	div7.style.border ="0px";
	div7.style.cursor = "s-resize";
	div7.style.zIndex = "1";	
	div7.onmousedown = $.proxy(this.startDiv7Resize, this);	
	document.getElementById("doc"+mainNum).appendChild(div7);
	
	div8.id = "div8";
	div8.style.position = "absolute";
	div8.style.left = l+w-5+1+"px";
	div8.style.top = t+h-5+1+"px";
	div8.style.width = "10px";
	div8.style.height = "10px";
	div8.style.background ="rgba(0,0,0,.4)";
	div8.style.border ="0px";
	div8.style.cursor = "se-resize";
	div8.style.zIndex = "1";
	div8.onmousedown = $.proxy(this.startResize, this);
	document.getElementById("doc"+mainNum).appendChild(div8);
	
}

function applyToWindowCapture(){
	var mainWindow = $("#doc"+mainNum).get(0);
	html2canvas(mainWindow, {
		onrendered: function(canvas){
			$(canvas).attr("style","width:114px; height:85px");
			
			$("#thum"+mainNum).empty();
			$("#thum"+mainNum).append(canvas);
		},
		width : mainWindow.width,
		height : mainWindow.height
	});
} 
