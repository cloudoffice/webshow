define(['jquery',
        'figure', 'color']
    , function ($, figure, color) {
		// webkit browser 처리 
		$.browser = {webkit : true};
	
        test("figure Test", function() {
        	var objColor = $("#circle1").css("background-color"), selectedColor = $("#selectedColor").css("background-color");
        	console.log(objColor);
        	console.log(selectedColor);
        	equal(objColor, selectedColor, "changing object color: pass");
        	

//            var styleSourceEl = $('<span style="font-size: 20pt;">test</span>').get(0)
//            , styleObject = EditUtil.getStyleObject(styleSourceEl);
//            equal(styleObject["font-size"], "20pt", "getStyleObject passed");
//            
//            var attrSourceEl = $('<img src="http://daum.net">').get(0)
//            , attrObject = EditUtil.getAttrObject(attrSourceEl);
//            equal(attrObject["src"], "http://daum.net", "getAttrObject passed");
//            
//            var $frontParagraph = $('<p style="text-align:right;"><span>test</span></p>')
//        	, $backParagraph = $('<p style="text-align:left;"><span>test2</span></p>')
//            , $mergedParagraph = EditUtil.mergeParagraph($frontParagraph, $backParagraph);
//            equal($mergedParagraph[0].outerHTML, '<p style="text-align:right;"><span>testtest2</span></p>', "mergeParagraph passed");
//            
//            var paragraph = $('<p><span></span><span>test1</span></p>').get(0)
//        	, node = paragraph.childNodes[0]
//        	, mergeableNode = null;
//        	mergeableNode = EditUtil.findMergeableNode(node);
//            equal(mergeableNode.outerHTML, '<span>test1</span>', "findMergeableNode passed");
        });
});