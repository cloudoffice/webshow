function Animation() {
	this.init();
};

Animation.prototype = {
	init : function() {
		this.orderArray = new Array();
		this.event();
	},
	
	mappingObjectNAnimation : function(e) {
		var data = e.data;
		console.log(data);
		var len = this.orderArray.length;
		this.orderArray[len] = data;
		console.log(this.orderArray);
	},
	
	changeAnimationOrder : function() {
	
	},
	
	playAnimation : function() {
		
	}, 
	
	event: function() {
		$(".show").on("click", {oName: "oName", aName: "show"}, $.proxy(this.mappingObjectNAnimation, this));
		$(".flyUp").on("click", {oName: "oName", aName: "flyUp"}, $.proxy(this.mappingObjectNAnimation, this));
		$(".flyDown").on("click", {oName: "oName", aName: "flyDown"}, $.proxy(this.mappingObjectNAnimation, this));
		$(".flyLeft").on("click", {oName: "oName", aName: "flyLeft"}, $.proxy(this.mappingObjectNAnimation, this));
		$(".flyRight").on("click", {oName: "oName", aName: "flyRight"}, $.proxy(this.mappingObjectNAnimation, this));
		$(".fade").on("click", {oName: "oName", aName: "fade"}, $.proxy(this.mappingObjectNAnimation, this));
	}
};