var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var GameUI=(function(_super){
		function GameUI(){
			
		    this.bg=null;
		    this.normal=null;
		    this.hit=null;

			GameUI.__super.call(this);
		}

		CLASS$(GameUI,'ui.GameUI',_super);
		var __proto__=GameUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameUI.uiView);

		}

		GameUI.uiView={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Image","props":{"y":25,"x":25,"var":"bg","skin":"comp/back.png","name":"bg"}},{"type":"Box","props":{"y":196,"x":154},"child":[{"type":"Image","props":{"y":-1,"x":8,"var":"normal","skin":"comp/mouse_normal_1.png"}},{"type":"Image","props":{"y":14,"x":8,"var":"hit","skin":"comp/mouse_hit_1.png"}},{"type":"Image","props":{"y":83,"x":5,"skin":"comp/mask-01.png"}}]}]};
		return GameUI;
	})(View);