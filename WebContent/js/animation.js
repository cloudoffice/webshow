function Animation() {
	this.init();
};

Animation.prototype = {
	init : function() {
		this.orderArray = new Array();
		this.event1();
	},
	
	mappingObjectNAnimation : function(e) {
		var data = e.data;
		console.log(data);
		var len = this.orderArray.length;
		this.orderArray[len] = data;
		console.log(this.orderArray);
		this.addAnimationList();
	},
	
	addAnimationList : function() {
		
	},
	
	getSelectedObjectClassName : function(e) {
		console.log(e);
		console.log(e.currentTarget.id);
		this.objectId = e.currentTarget.id;
		this.event2(this.objectId);
	},
	
	changeAnimationOrder : function() {
		
	},
	
	playAnimation : function() {
		
	}, 
	
	event1: function() {
/*		$(".show").on("click", {oName: "oName", aName: "show"}, $.proxy(this.mappingObjectNAnimation, this));
		$(".flyUp").on("click", {oName: "oName", aName: "flyUp"}, $.proxy(this.mappingObjectNAnimation, this));
		$(".flyDown").on("click", {oName: "oName", aName: "flyDown"}, $.proxy(this.mappingObjectNAnimation, this));
		$(".flyLeft").on("click", {oName: "oName", aName: "flyLeft"}, $.proxy(this.mappingObjectNAnimation, this));
		$(".flyRight").on("click", {oName: "oName", aName: "flyRight"}, $.proxy(this.mappingObjectNAnimation, this));
		$(".fade").on("click", {oName: "oName", aName: "fade"}, $.proxy(this.mappingObjectNAnimation, this));*/
		$(".doc").delegate("div", "click", $.proxy(this.getSelectedObjectClassName, this));
	},
	
	event2: function(objectId) {
		$(".show").on("click", {oName: objectId, aName: "show"}, $.proxy(this.mappingObjectNAnimation, this));
		$(".flyUp").on("click", {oName: objectId, aName: "flyUp"}, $.proxy(this.mappingObjectNAnimation, this));
		$(".flyDown").on("click", {oName: objectId, aName: "flyDown"}, $.proxy(this.mappingObjectNAnimation, this));
		$(".flyLeft").on("click", {oName: objectId, aName: "flyLeft"}, $.proxy(this.mappingObjectNAnimation, this));
		$(".flyRight").on("click", {oName: objectId, aName: "flyRight"}, $.proxy(this.mappingObjectNAnimation, this));
		$(".fade").on("click", {oName: objectId, aName: "fade"}, $.proxy(this.mappingObjectNAnimation, this));
	}
};