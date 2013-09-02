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
		
		var className = $(e.currentTarget).attr("class");
		this.orderArray[len] = {oName : objectId, aName : className};
		this.addAnimationList(this.orderArray[len], len);
	},
	
	//Animation list html에 추가
	addAnimationList : function(newAnimation, order) {
		console.log(newAnimation.aName);
		$(".aniListWrap").append("<div class='ani1' id='ani" + (order+1) + "'>" + 
				"<div class='num'>" + (order+1) + "</div>" + 
				"<div class='" + newAnimation.aName + "Img'></div>" +
				"<span class='text'>" + newAnimation.oName + "</span>" + 
				"<div class='aniDelete' href='#'></div>" +
				"</div>");
	},
	
	//Animation list 삭제
	deleteAnimationList : function(e) {
		var aniId = e.currentTarget.parentElement.id;
		var order = $("#" + aniId).children(".num").text();
		
		for (var i = 0 ; i < this.orderArray.length; i++) {
			$("#ani" + (i + 1)).remove();
		}
		
		this.deleteMappingObjectNAnimation(order-1);
		this.sortingAniList();
	},
	
	sortingAniList : function() { 
		for (var i = 0 ; i < this.orderArray.length; i++) {
			$(".aniListWrap").append("<div class='ani1' id='ani" + (i + 1) + "'>" + 
					"<div class='num'>" + (i + 1) + "</div>" + 
					"<div class='" + this.orderArray[i].aName + "Img'></div>" + 
					"<span class='text'>" + this.orderArray[i].oName + "</span>" + 
					"<div class='aniDelete' href='#'></div>" +
					"</div>");
		}	
	},
	
	//orderArray에서 해당 object&Animation 삭제
	deleteMappingObjectNAnimation : function(order) {
		var array = this.orderArray.splice(order, 1);
		console.log(array);
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
		
		//aniUp
		if (e.target.className == "aniUp") {			
			if ((order-2) >= 0) {
				//순서변경하기 원하는 list 위의 값 받기
				var array = this.orderArray.splice(order-2, 1);
				//해당 배열 property 가져오기
				var pro = array[0];
				//property 붙여넣기
				this.orderArray.splice((order-1), 0, pro);

			} else {
				window.alert("맨 처음 list 입니다.");
			}
			
			for (var i = 0 ; i < this.orderArray.length; i++) {
				$("#ani" + (i + 1)).remove();
			}
			this.sortingAniList();
		}
		
		//aniDown
		if (e.target.className == "aniDown") {
			if (order < this.orderArray.length) {
				//순서변경하기 원하는 list 아래 값 받기
				var array = this.orderArray.splice(order-1, 1);
				//해당 배열 property 가져오기
				var pro = array[0];
				//property 붙여넣기
				this.orderArray.splice(order, 0, pro);

			} else {
				window.alert("맨 마지막 list 입니다.");
			}
			
			for (var i = 0 ; i < this.orderArray.length; i++) {
				$("#ani" + (i + 1)).remove();
			}
			this.sortingAniList();
		}
	},
	
	playAnimation : function(e) {
		var ani = new AnimationCSS();
		var oName, aName;

		for (var i = 0; i < this.orderArray.length; i++) {
			oName = this.orderArray[i].oName;
			aName = this.orderArray[i].aName;
			
			switch (aName) {
			case "show":
				ani.show(oName, 2000 * i);
				break;
			case "flyUp":
				ani.flyUp(oName, 2000 * i);
				break;
			case "flyDown":
				ani.flyDown(oName, 2000 * i);
				break;
			case "flyLeft":
				ani.flyLeft(oName, 2000 * i);
				break;
			case "flyRight":
				ani.flyRight(oName, 2000 * i);
				break;
			case "fade":
				ani.fade(oName, 2000 * i);
				break;
			}
		}
	}, 
	
	//event
	event : function() {
		//도형선택 시 도형 id받아옴
//		$(".doc").on("click", "div", $.proxy(this.getSelectedObjectId, this));
		
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
		
		//애니메이션 play
		$(".aniPlay").on("click", $.proxy(this.playAnimation, this));
	}, 
};

function AnimationCSS() {
	
};

AnimationCSS.prototype = {
		show : function(oName, timeout) {
			var start = {
					opacity : "0",
			};
			
			var end = {
					opacity : "1",
					transition : "opacity 1.5s",
			};
			
			setTimeout(function() {$("#" + oName).css(start);}, timeout);
			setTimeout(function() {$("#" + oName).css(end);}, timeout + 800);			
		},
		
		fade : function(oName, timeout) {
			var start = {
					opacity : "1",
					transition : "opacity 1.5s"
			};
			
			var end = {
					opacity : "0",
			};
			
			var back = {
					opacity : "1",
					transition : "opacity 0s",
			};
			
			setTimeout(function() {$("#" + oName).css(start);}, timeout);
			setTimeout(function() {$("#" + oName).css(end);}, timeout);	
			setTimeout(function() {$("#" + oName).css(back);}, timeout + 800);
		},
		
		flyUp : function(oName, timeout) {			
			setTimeout(function() {
				$("#" + oName).css("left", "0px");
				$("#" + oName).css("top", "-500px");
				$("#" + oName).css("position", "relative");
				}, timeout);
			setTimeout(function() {$("#" + oName).animate({"top": "0px"}, 800);}, timeout);
		},
		
		flyDown : function(oName, timeout) {			
			setTimeout(function() {
				$("#" + oName).css("left", "0px");
				$("#" + oName).css("top", "1000px");
				$("#" + oName).css("position", "relative");
				}, timeout);
			setTimeout(function() {$("#" + oName).animate({"top": "0px"}, 800);}, timeout);
		},
		
		flyLeft : function(oName, timeout) {			
			setTimeout(function() {
				$("#" + oName).css("left", "-2000px");
				$("#" + oName).css("top", "0px");
				$("#" + oName).css("position", "relative");
				}, timeout);
			setTimeout(function() {$("#" + oName).animate({"left": "0px"}, 800);}, timeout);
		},
		
		flyRight : function(oName, timeout) {			
			setTimeout(function() {
				$("#" + oName).css("left", "2000px");
				$("#" + oName).css("top", "0px");
				$("#" + oName).css("position", "relative");
				}, timeout);
			setTimeout(function() {$("#" + oName).animate({"left": "0px"}, 800);}, timeout);
		}
};