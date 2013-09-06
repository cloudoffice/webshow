function Animation() {
	this.init();
	
};

Animation.prototype = {
	//Animation Class �ʱ�ȭ
	init : function() {
		this.arrayList = new Array();
//		var orderArray = new Array();
		this.orderArray = new Array();		
		this.event();
		this.arrayList[1] = this.orderArray;
	},
	
	getThisOrderArray : function() {
		return this.orderArray;
	},
	
	createNewArray : function(target) {
		objectId = undefined;
		var orderArray = new Array();
		index = target;
		this.arrayList[index] = orderArray;
		this.orderArray = orderArray;
		this.sortingAniList();
	},
	
	displayAniList : function() {
		if($(".aniWrap").css("display") == "none") {
			$(".aniWrap").css("display", "block");
		} else if($(".aniWrap").css("display") == "block") {
			$(".aniWrap").css("display", "none");
		}
	},
	
	//Object, Animation �� �´� �迭�� ����
	mappingObjectNAnimation : function(e) {
		if (objectId != undefined) {
			var len = this.orderArray.length;
			
			var className = $(e.currentTarget).attr("class");
			this.orderArray[len] = {oName : objectId, aName : className};
			this.addAnimationList(this.orderArray[len], len);
		}	
	},
	
	//Animation list html�� �߰�
	addAnimationList : function(newAnimation, order) {
		var kor = "";
		var getClass = $("#" + newAnimation.oName).attr("class");

		if (getClass == "circle") {
			kor = "원";
		} else if (getClass == "square") {
			kor = "정사각형";
		} else if (getClass == "rectangle") {
			kor = "직사각형";
		} else if (getClass == "a-quater-circle") {
			kor = "부채꼴";
		} else if (getClass == "semicircle") {
			kor = "반원";
		} else if (getClass == "egg-circle") {
			kor = "달갈형";
		}
		
		$(".aniListWrap").append("<div class='ani1' id='ani" + (order+1) + "'>" + 
				"<div class='num'>" + (order+1) + "</div>" + 
				"<div class='" + newAnimation.aName + "Img'></div>" +
				"<span class='text'>" + kor + "</span>" + 
				"<div class='aniDelete' href='#'></div>" +
				"</div>");
		for (var i = 0; i < this.orderArray.length; i++) {
			$("#ani" + (i+1)).css("background-color", "");
		}
	},
	
	//Animation list ����
	deleteAnimationList : function(e) {
		var aniId = e.currentTarget.parentElement.id;
		var order = $("#" + aniId).children(".num").text();
		
		for (var i = 0 ; i < this.orderArray.length; i++) {
			$("#ani" + (i + 1)).remove();
		}
		
		this.deleteMappingObjectNAnimation(order-1);
		this.sortingAniList();
		
		this.aniListId = e.currentTarget.id;
		
//		console.log(this.orderArray.length);
//		console.log(order);
	},
	
	sortingAniList : function() { 
		if (this.orderArray.length != 0) {
			for (var i = 0 ; i < 20; i++) {
				$("#ani" + (i + 1)).remove();
			}
		} else {
			for (var i = 0 ; i < 20; i++) {
				$("#ani" + (i + 1)).remove();
			}
		}
		
		var kor = "";
		
		for (var i = 0 ; i < this.orderArray.length; i++) {
			var getClass = $("#" + this.orderArray[i].oName).attr("class");

			if (getClass == "circle") {
				kor = "원";
			} else if (getClass == "square") {
				kor = "정사각형";
			} else if (getClass == "rectangle") {
				kor = "직사각형";
			} else if (getClass == "a-quater-circle") {
				kor = "부채꼴";
			} else if (getClass == "semicircle") {
				kor = "반원";
			} else if (getClass == "egg-circle") {
				kor = "달갈형";
			}
			
			$(".aniListWrap").append("<div class='ani1' id='ani" + (i + 1) + "'>" + 
					"<div class='num'>" + (i + 1) + "</div>" + 
					"<div class='" + this.orderArray[i].aName + "Img'></div>" + 
					"<span class='text'>" + kor + "</span>" + 
					"<div class='aniDelete' href='#'></div>" +
					"</div>");
		}	
	},
	
	//orderArray���� �ش� object&Animation ����
	deleteMappingObjectNAnimation : function(order) {
		var array = this.orderArray.splice(order, 1);
		console.log(array);
	},
	
	getSelectedAniListId : function(e) {
		for (var i = 0; i < this.orderArray.length; i++) {
			$("#ani" + (i+1)).css("background-color", "");
		}
		
		this.aniListId = e.currentTarget.id;
		console.log($("#"+this.aniListId).children(".num").text());
		if ($("#"+this.aniListId).children(".num").text() == "") {
			$("#ani"+this.orderArray.length).css("background-color", "#ffd0c5");
		} else {
			$("#"+this.aniListId).css("background-color", "#ffd0c5");
		}
		
	},
	
	changeAniList : function(target) {
		index = target;
		this.orderArray = this.arrayList[index];
		this.sortingAniList();
	},
	
	//Animation list �� ����
	changeAnimationOrder : function(e) {
		console.log(e);
		console.log(this.orderArray);
		var order = $("#" + this.aniListId).children(".num").text();
		var aniText = $("#" + this.aniListId).children(".text").text();
		
		//aniUp
		if (e.target.className == "aniUp") {			
			if ((order-2) >= 0) {
				//�����ϱ� ���ϴ� list ���� �� �ޱ�
				var array = this.orderArray.splice(order-2, 1);
				//�ش� �迭 property ��������
				var pro = array[0];
				//property �ٿ��ֱ�
				this.orderArray.splice((order-1), 0, pro);

			} else {
				window.alert("�� ó�� list �Դϴ�.");
			}
			
			for (var i = 0 ; i < this.orderArray.length; i++) {
				$("#ani" + (i + 1)).remove();
			}
			this.sortingAniList();
			$("#ani"+(order-1)).focus();
			$("#ani"+(order-1)).css("background-color", "#ffd0c5");
			this.aniListId = "ani"+(order-1);
		}
		
		//aniDown
		if (e.target.className == "aniDown") {
			if (order < this.orderArray.length) {
				//�����ϱ� ���ϴ� list �Ʒ� �� �ޱ�
				var array = this.orderArray.splice(order-1, 1);
				//�ش� �迭 property ��������
				var pro = array[0];
				//property �ٿ��ֱ�
				this.orderArray.splice(order, 0, pro);

			} else {
				window.alert("�� ������ list �Դϴ�.");
			}
			
			for (var i = 0 ; i < this.orderArray.length; i++) {
				$("#ani" + (i + 1)).remove();
			}
			order++;
			this.sortingAniList();
			console.log($("#ani"+order));
			$("#ani"+order).focus();
			$("#ani"+order).css("background-color", "#ffd0c5");
			this.aniListId = "ani"+order;
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
		//������ �� ���� id�޾ƿ�
//		$(".doc").on("click", "div", $.proxy(this.getSelectedObjectId, this));
		
		//�ִϸ��̼� �޴� ���̱�/�Ⱥ��̱�
		$(".animation").on("click", $.proxy(this.displayAniList, this));
		
		//�ִϸ��̼� ���� �� ����+�ִϸ��̼� mapping �迭�� �߰�
		$(".show").on("click", $.proxy(this.mappingObjectNAnimation, this));
		$(".flyUp").on("click", $.proxy(this.mappingObjectNAnimation, this));
		$(".flyDown").on("click", $.proxy(this.mappingObjectNAnimation, this));
		$(".flyLeft").on("click", $.proxy(this.mappingObjectNAnimation, this));
		$(".flyRight").on("click", $.proxy(this.mappingObjectNAnimation, this));
		$(".fade").on("click", $.proxy(this.mappingObjectNAnimation, this));
		
		//�ִϸ��̼� �� ����
		$(".aniUp").on("click", $.proxy(this.changeAnimationOrder, this));
		$(".aniDown").on("click", $.proxy(this.changeAnimationOrder, this));
		
		//�ִϸ��̼� list���� ����
		$(".aniListWrap").delegate(".aniDelete", "click", $.proxy(this.deleteAnimationList, this));
		
		//�ִϸ��̼� list ����
		$(".aniListWrap").delegate(".ani1", "click", $.proxy(this.getSelectedAniListId, this));
		
		//�ִϸ��̼� play
		$(".aniPlay").on("click", $.proxy(this.playAnimation, this));		
	}
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
					transition : "opacity 0.7s",
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
			setTimeout(function() {$("#" + oName).css(back);}, timeout + 1500);
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