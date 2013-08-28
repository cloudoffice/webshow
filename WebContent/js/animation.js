function Animation() {
	this.init();
};

Animation.prototype = {
	//Animation Class 초기화
	init : function() {
		this.orderArray = new Array();
		this.event();
	},
	
	//Object, Animation 순서에 맞는 배열에 삽입
	mappingObjectNAnimation : function(e) {
		var len = this.orderArray.length;
		
		var className = $(e.target).attr("class");
		this.orderArray[len] = {oName : this.objectId, aName : className};
		this.addAnimationList(this.orderArray[len], len);
	},
	
	//Animation list html에 추가
	addAnimationList : function(newAnimation, order) {
		$(".aniListWrap").append("<div class='ani1' id='ani" + (order+1) + "'>" + 
				"<div class='num'>" + (order+1) + "</div>" + 
				"<span class='text'>" + $("." + newAnimation.aName).text() + "</span>" + 
				"<div class='aniDelete' href='#'></div>" +
				"</div>");
	},
	
	//Animation list 삭제
	deleteAnimationList : function(e) {
		var aniId = e.currentTarget.parentElement.id;
		var order = $("#" + aniId).children(".num").text();
		
		$("#" + aniId).remove();
		this.deleteMappingObjectNAnimation(order-1);
	},
	
	//orderArray에서 해당 object&Animation 삭제
	deleteMappingObjectNAnimation : function(order) {
		var array = this.orderArray.splice(order, 1);
	},
	
	//클릭한 도형의 object ID 얻기
	getSelectedObjectId : function(e) {
		this.objectId = e.currentTarget.id;
	},
	
	getSelectedAniListId : function(e) {
		this.aniListId = e.currentTarget.id;
	},
	
	//Animation list 순서 변경
	changeAnimationOrder : function(e) {
		console.log(e);
		console.log(this.orderArray);
		var order = $("#" + this.aniListId).children(".num").text();
		var aniText = $("#" + this.aniListId).children(".text").text();
		
		console.log(this.aniListId);
		//aniUp
		if (e.target.className == "aniUp") {
			$("#" + this.aniListId).remove();
			$("<div class='ani1' id='ani" + (order) + "'>" + 
					"<div class='num'>" + (order - 1) + "</div>" + 
					"<span class='text'>" + aniText + "</span>" + 
					"<div class='aniDelete' href='#'></div>" +
					"</div>").insertBefore("#ani" + (order - 1));
			$("#ani" + (order - 1)).children(".num").html(order);
			
			$("#ani"+(order - 1)).attr("id", "ani" + order);
			$("#ani"+(order)).attr("id", "ani" + (order - 1));
		}
		
		//aniDown
		if (e.target.className == "aniDown") {
			$("#" + this.aniListId).insertAfter('#ani' + (order + 1));
//			$("#ani" + (order)).children(".num").html(order + 1);
//			
//			$("#ani"+(order)).attr("id", "ani" + (order + 1));
//			$("#ani"+(order + 1)).attr("id", "ani" + (order));
		}
	},
	
	playAnimation : function() {
		
	}, 
	
	//event
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
		$(".aniUp").on("click", $.proxy(this.changeAnimationOrder, this));
		$(".aniDown").on("click", $.proxy(this.changeAnimationOrder, this));
		
		//애니메이션 list에서 삭제
		$(".aniListWrap").delegate(".aniDelete", "click", $.proxy(this.deleteAnimationList, this));
		
		//애니메이션 list 선택
		$(".aniListWrap").delegate(".ani1", "click", $.proxy(this.getSelectedAniListId, this));
	}, 
};