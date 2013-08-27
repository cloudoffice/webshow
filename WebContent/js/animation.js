function Animation() {
	this.init();
};

Animation.prototype = {
	init : function() {
		this.orderArray = new Array();
		this.event1();
		this.event2();
	},
	
	mappingObjectNAnimation : function(e) {
		var len = this.orderArray.length;
		
		var className = $(e.target).attr("class");
		this.orderArray[len] = {oName : this.objectId, aName : className};
		this.addAnimationList(this.orderArray[len], len);
	},
	
	addAnimationList : function(newAnimation, order) {
		$(".aniListWrap").append("<div class='ani1' id='ani" + (order+1) + "'>" + 
				"<div class='num'>" + (order+1) + "</div>" + 
				"<span class='text'>" + $("." + newAnimation.aName).text() + "</span>" + 
				"<div class='aniDelete' href='#'></div>" +
				"</div>");
	},
	
	deleteAnimationList : function() {
		
	},
	
	getSelectedObjectClassName : function(e) {
		this.objectId = e.currentTarget.id;
	},
	
	changeAnimationOrder : function() {
		
	},
	
	playAnimation : function() {
		
	}, 
	
	event1: function() {
		$(".doc").on("click", "div", $.proxy(this.getSelectedObjectClassName, this));
	},
	
	event2: function() {
		$(".show").on("click", $.proxy(this.mappingObjectNAnimation, this));
		$(".flyUp").on("click", $.proxy(this.mappingObjectNAnimation, this));
		$(".flyDown").on("click", $.proxy(this.mappingObjectNAnimation, this));
		$(".flyLeft").on("click", $.proxy(this.mappingObjectNAnimation, this));
		$(".flyRight").on("click", $.proxy(this.mappingObjectNAnimation, this));
		$(".fade").on("click", $.proxy(this.mappingObjectNAnimation, this));
	}, 
};