var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var GameUI=(function(_super){
		function GameUI(){
			
		    this.bg=null;
		    this.timeBar=null;
		    this.scoreNum=null;

			GameUI.__super.call(this);
		}

		CLASS$(GameUI,'ui.GameUI',_super);
		var __proto__=GameUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameUI.uiView);

		}

		GameUI.uiView={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Image","props":{"y":25,"x":25,"var":"bg","skin":"comp/back.png","name":"bg"}},{"type":"Box","props":{"y":196,"x":154,"name":"item0"},"child":[{"type":"Image","props":{"y":-1,"x":8,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":14,"x":8,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":83,"x":5,"skin":"comp/mask-01.png"}}]},{"type":"Box","props":{"y":196,"x":337,"name":"item1"},"child":[{"type":"Image","props":{"y":-1,"x":8,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":14,"x":8,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":83,"x":5,"skin":"comp/mask-02.png"}}]},{"type":"Box","props":{"y":196,"x":520,"name":"item2"},"child":[{"type":"Image","props":{"y":-1,"x":8,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":14,"x":8,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":83,"x":5,"skin":"comp/mask-03.png"}}]},{"type":"Box","props":{"y":284,"x":124,"name":"item3"},"child":[{"type":"Image","props":{"y":-1,"x":8,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":14,"x":8,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":83,"x":5,"skin":"comp/mask-04.png"}}]},{"type":"Box","props":{"y":287,"x":343,"name":"item4"},"child":[{"type":"Image","props":{"y":-1,"x":8,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":14,"x":8,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":83,"x":5,"skin":"comp/mask-05.png"}}]},{"type":"Box","props":{"y":288,"x":538,"name":"item5"},"child":[{"type":"Image","props":{"y":-1,"x":8,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":14,"x":8,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":83,"x":5,"skin":"comp/mask-06.png"}}]},{"type":"Box","props":{"y":382,"x":117,"name":"item6"},"child":[{"type":"Image","props":{"y":-1,"x":8,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":14,"x":8,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":83,"x":5,"skin":"comp/mask-07.png"}}]},{"type":"Box","props":{"y":394,"x":345,"name":"item7"},"child":[{"type":"Image","props":{"y":-1,"x":8,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":14,"x":8,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":83,"x":5,"skin":"comp/mask-08.png"}}]},{"type":"Box","props":{"y":394,"x":555,"name":"item8"},"child":[{"type":"Image","props":{"y":-1,"x":8,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":14,"x":8,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":83,"x":5,"skin":"comp/mask-09.png"}}]},{"type":"Box","props":{"y":5,"x":5},"child":[{"type":"ProgressBar","props":{"var":"timeBar","value":1,"skin":"comp/progress_time.png"}},{"type":"Box","props":{"y":26,"x":4,"var":"scoreNum"},"child":[{"type":"Clip","props":{"skin":"comp/clip_number.png","name":"item0","clipX":10}},{"type":"Clip","props":{"x":18,"skin":"comp/clip_number.png","name":"item1","clipX":10}},{"type":"Clip","props":{"x":36,"skin":"comp/clip_number.png","name":"item2","clipX":10}},{"type":"Clip","props":{"x":54,"skin":"comp/clip_number.png","name":"item3","clipX":10}},{"type":"Clip","props":{"x":72,"skin":"comp/clip_number.png","name":"item4","clipX":10}},{"type":"Clip","props":{"x":90,"skin":"comp/clip_number.png","name":"item5","clipX":10}},{"type":"Clip","props":{"x":108,"skin":"comp/clip_number.png","name":"item6","clipX":10}},{"type":"Clip","props":{"x":126,"skin":"comp/clip_number.png","name":"item7","clipX":10}},{"type":"Clip","props":{"x":144,"skin":"comp/clip_number.png","name":"item8","clipX":10}},{"type":"Clip","props":{"x":162,"skin":"comp/clip_number.png","name":"item9","clipX":10}}]}]}]};
		return GameUI;
	})(View);