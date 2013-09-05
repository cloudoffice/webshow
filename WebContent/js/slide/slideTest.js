define(['jquery', 'simulate']
    , function ($, simulate) {
		// webkit browser 처리 
		$.browser = {webkit : true};
		console.log("S");

        asyncTest("slide Test", function() {

        	setTimeout(function () { 
        		$(".slideInsert").simulate('click');       		
        		equal($("#doc2").attr("style"), "display: inline;", "created New slide");	
        		
        		$("#thum1").simulate('click');
        		equal($("#doc1").attr("style"), "display: inline;", "selected 1st slide");	
        		
        		$("#thum2").simulate('click');
        		$(".slideDelete").simulate('click'); 
        		ok(!$("#thumbnailbox1").next().attr("id"), "delete 2nd slide");
        		
            	start();
        	}, 100);
        });
});