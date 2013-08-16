require.config({
    paths : {
        jquery : 'libs/jquery/jquery'
    }
});


require([
    'jquery'
], function($){
	$("#contents").append($("<img>").attr("src", "http://www.google.co.kr/webhp?hl=ko&tab=ww"));
});