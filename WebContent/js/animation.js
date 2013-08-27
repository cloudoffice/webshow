function Animation() {
	this.init();
};

Animation.prototype = {
	init : function() {
		this.orderArray = new Array();
		this.event();
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
	
	deleteAnimationList : function(e) {
		console.log(e);
	},
	
	getSelectedObjectId : function(e) {
		this.objectId = e.currentTarget.id;
	},
	
	changeAnimationOrder : function(e) {

	},
	
	playAnimation : function() {
		
	}, 
	
	event : function() {
		//도형선택 시 도형 id받아옴
		$(".doc").on("click", "div", $.proxy(this.getSelectedObjectId, this));
		
		//애니메이션 선택 시 도형+애니매이션 mapping 배열에 추가
		$(".show").on("click", $.proxy(this.mappingObjectNAnimation, this));
		$(".flyUp").on("click", $.proxy(this.mappingObjectNAnimation, this));
		$(".flyDown").on("click", $.proxy(this.mappingObjectNAnimation, this));
		$(".flyLeft").on("click", $.proxy(this.mappingObjectNAnimation, this));
		$(".flyRight").on("click", $.proxy(this.mappingObjectNAnimation, this));
		$(".fade").on("click", $.proxy(this.mappingObjectNAnimation, this));
		
		//애니메이션 순서 변경
		$(".aniUp").on("click", $.proxy(this.changeAnimationOrder(), this));
		$(".aniDown").on("click", $.proxy(this.changeAnimationOrder(), this));
		
		//애니메이션 list에서 삭제
		$(".aniDelete").live("click", this.deleteAnimationList());
	}, 
};