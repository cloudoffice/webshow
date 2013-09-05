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
        animation : 'animation/animation',
        simulate : 'libs/jquery.simulate'
    }
});

require([
], function(){
    require.config({
        baseUrl: "../js"
    });

    var testModules = [
          "../js/slide/slideTest.js",
          "../js/figure/figureTest.js",
          "../js/animation/animationTest.js"
    ];

    require(testModules, function(){
    	
    });
});