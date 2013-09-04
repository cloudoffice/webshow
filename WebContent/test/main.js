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
        animation : 'animation/animation'
    }
});

require([
], function(){
	
	console.log("load");

    require.config({
        baseUrl: "../js"
    });

    var testModules = [
          "../js/figure/figureTest.js"
//        "js/modules/common/test_editUtil.js",
//        "js/modules/functional/insert/test_table.js",
//        "js/modules/functional/insert/test_bookmark.js",
//        "js/modules/functional/insert/test_hyperlink.js",
//        "js/modules/functional/insert/test_headerFooter.js",
//        "js/modules/functional/edit/test_clipboard.js",
//        "js/modules/functional/format/test_format.js"
    ];

    require( testModules, function() {
    });
});