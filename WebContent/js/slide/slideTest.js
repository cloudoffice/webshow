define(['jquery', 'simulate']
    , function ($, simulate) {
		// webkit browser 처리 
		$.browser = {webkit : true};
		console.log("S");

        asyncTest("slide Test", function() {

        	setTimeout(function () { 
        		$(".slideInsert").simulate('click');
        		
        		equal($("#doc3").css("display"), "inline", "created New slide");	
            	start();
        	}, 4000);
        });
});