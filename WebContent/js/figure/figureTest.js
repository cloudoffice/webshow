define(['jquery', 'figure', 'color']
    , function ($, figure, color) {
		// webkit browser 처리 
		$.browser = {webkit : true};
	console.log("F");
        asyncTest("figure Test", function() {
        	setTimeout(function () {
        		var objColor = $("#circle1").css("background-color"), selectedColor = $("#selectedColor").css("background-color");
            	equal(objColor, selectedColor, "changing object color");
            	
            	$(".square").simulate('click');
            	equal($("#circle1").next().attr("id"), "square1", "insert Object:pass");
            	
            	start();  
        	}, 10);     	    	     	       
        });
});