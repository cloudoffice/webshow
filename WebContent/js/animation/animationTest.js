define(['jquery', 'animation', 'simulate']
    , function ($, animation, simulate) {
		// webkit browser 泥�━ 
		$.browser = {webkit : true, isTest: true};
		if ($.browser.isTest) {
			return;
		}
	console.log("A");
        asyncTest("animation Test", function() {
        	setTimeout(function () { 
        		$("#thum1").simulate('click');
            	$(".circle").simulate('click');
            	$(".show").simulate('click');
        		equal($(".aniWrap").css("display"), "block", "animation menu display status:block");
        		
            	var array = ani.getThisOrderArray();
            	equal(array.oName, $(".circle").attr("id"), "array:object Name");
            	equal(array[0].aName, "show", "array:animation Name");
            	
            	$(".slideInsert").simulate('click');         
            	var array2 = ani.getThisOrderArray();
            	ok(array != array2, "slide 異�� ��animation list 蹂�꼍���吏����");
            	
//            	$("#ani1").simulate('click');
//            	$(".aniUp").simulate('click');
            	
            	
            	$(".aniDelete").simulate('click');
        		ok(!($(".aniWrap").children().hasClass()), "delete animation list: pass");
        		
        		
        		
            	start();
        	}, 200);
        });
});