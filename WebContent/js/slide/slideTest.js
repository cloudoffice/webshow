define(['jquery', 'simulate']
    , function ($, simulate) {
		// webkit browser 처리 
		$.browser = {webkit : true};
		console.log("S");

        asyncTest("slide Test", function() {

        	setTimeout(function () { 
        		$(".slideInsert").simulate('click');
        		
        		equal($("#doc2").attr("style"), "display: inline;", "created New slide");	
            	start();
        	}, 10);
        });
});