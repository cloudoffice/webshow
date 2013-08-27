var n=0;
var figureLeft=230;
var figureTop=200;
var classvalue;

function createFigure(e, target){
	n++;
	classvalue = $(target).attr("class");
	$("<div id="+n+" class="+ classvalue+ "></div>").appendTo(".doc" );
	var f=document.getElementById(n);
	f.style.position="absolute";
	f.style.left=figureLeft+"px";
	f.style.top= figureTop+"px";
	f.style.zIndex="10";
	
	figureLeft = figureLeft + 25;
	figureTop = figureTop + 25;
	
	$("#"+n).click(function(e){
		createBorder(e, this);
		$(document).unbind("click");
	});
	
	$("#"+n).mousedown(function(e){
		startDrag(e,this);
	});
	
	$("#"+n).mouseout(function(e){
		$(document).click(function(e){
			$("#b_border").remove();
			$("#div1").remove();
			$("#div2").remove();
			$("#div3").remove();
			$("#div4").remove();
			$("#div5").remove();
			$("#div6").remove();
			$("#div7").remove();
			$("#div8").remove();
			$(document).unbind("click");
			$("#box").unbind("click");							
		});
	});	
};

var div = document.createElement("div");
var div1 = document.createElement("div");
var div2 = document.createElement("div");
var div3 = document.createElement("div");
var div4 = document.createElement("div");
var div5 = document.createElement("div");
var div6 = document.createElement("div");
var div7 = document.createElement("div");
var div8 = document.createElement("div");
var w, h, l, t; 
function createBorder(e, target){	
	w = $(target).width();
	h = $(target).height();
	l = $(target).offset().left;	
	t = $(target).offset().top;
	
	div.id= "b_border";
	div.style.width= w+"px";
	div.style.height= h+"px";
	div.style.position = "absolute";
	div.style.left = l-2+"px";
	div.style.top = t-2+"px";
	div.style.border = "3px solid rgba(0,0,0,.2)";
	div.style.cursor = "move";
	div.style.zIndex = "1";
		
	document.getElementById("docu").appendChild(div);
	
	div1.id = "div1";
	div1.style.position = "absolute";
	div1.style.left = l-5+"px";
	div1.style.top = t-5+"px";
	div1.style.width = "10px";
	div1.style.height = "10px";
	div1.style.background ="rgba(0,0,0,.4)";
	div1.style.border ="0px";
	div1.style.cursor = "nw-resize";
	div1.style.zIndex = "50";
	$("#div1").mousedown(function(e){startDiv1Resize(e, target);});
	document.getElementById("docu").appendChild(div1);
	
	div2.id = "div2";
	div2.style.position = "absolute";
	div2.style.left = l+(w/2)-5+"px";
	div2.style.top = t-5+"px";
	div2.style.width = "10px";
	div2.style.height = "10px";
	div2.style.background ="rgba(0,0,0,.4)";
	div2.style.border ="0px";
	div2.style.cursor = "n-resize";
	div2.style.zIndex = "50";
	$("#div2").mousedown(function(e){startDiv2Resize(e, target);});
	document.getElementById("docu").appendChild(div2);
	
	div3.id = "div3";
	div3.style.position = "absolute";
	div3.style.left = l+w-5+1+"px";
	div3.style.top = t-5+"px";
	div3.style.width = "10px";
	div3.style.height = "10px";
	div3.style.background ="rgba(0,0,0,.4)";
	div3.style.border ="0px";
	div3.style.cursor = "ne-resize";
	div3.style.zIndex = "50";
	$("#div3").mousedown(function(e){startDiv3Resize(e, target);});
	document.getElementById("docu").appendChild(div3);
	
	div4.id = "div4";
	div4.style.position = "absolute";
	div4.style.left = l-5+"px";
	div4.style.top = t+h/2-5+"px";
	div4.style.width = "10px";
	div4.style.height = "10px";
	div4.style.background ="rgba(0,0,0,.4)";
	div4.style.border ="0px";
	div4.style.cursor = "e-resize";
	div4.style.zIndex = "50";
	$("#div4").mousedown(function(e){startDiv4Resize(e, target);});	
	document.getElementById("docu").appendChild(div4);
	
	div5.id = "div5";
	div5.style.position = "absolute";
	div5.style.left = l+w-5+1+"px";
	div5.style.top = t+h/2-5+"px";
	div5.style.width = "10px";
	div5.style.height = "10px";
	div5.style.background ="rgba(0,0,0,.4)";
	div5.style.border ="0px";
	div5.style.cursor = "w-resize";
	div5.style.zIndex = "50";
	$("#div5").mousedown(function(e){startDiv5Resize(e, target);});	
	document.getElementById("docu").appendChild(div5);
	
	div6.id = "div6";
	div6.style.position = "absolute";
	div6.style.left = l-5+"px";
	div6.style.top = t+h-5+1+"px";
	div6.style.width = "10px";
	div6.style.height = "10px";
	div6.style.background ="rgba(0,0,0,.4)";
	div6.style.border ="0px";
	div6.style.cursor = "sw-resize";
	div6.style.zIndex = "50";
	$("#div6").mousedown(function(e){startDiv6Resize(e, target);});	
	document.getElementById("docu").appendChild(div6);
	
	div7.id = "div7";
	div7.style.position = "absolute";
	div7.style.left = l+w/2-5+"px";
	div7.style.top = t+h-5+1+"px";
	div7.style.width = "10px";
	div7.style.height = "10px";
	div7.style.background ="rgba(0,0,0,.4)";
	div7.style.border ="0px";
	div7.style.cursor = "s-resize";
	div7.style.zIndex = "50";	
	$("#div7").mousedown(function(e){startDiv7Resize(e, target);});	
	document.getElementById("docu").appendChild(div7);
	
	div8.id = "div8";
	div8.style.position = "absolute";
	div8.style.left = l+w-5+1+"px";
	div8.style.top = t+h-5+1+"px";
	div8.style.width = "10px";
	div8.style.height = "10px";
	div8.style.background ="rgba(0,0,0,.4)";
	div8.style.border ="0px";
	div8.style.cursor = "se-resize";
	div8.style.zIndex = "50";
	$("#div8").mousedown(function(e){startResize(e, target);});
	document.getElementById("docu").appendChild(div8);
}
