var LayaSample = (function () {
	(function(){
		Laya.init(800, 600);
		Laya.stage.bgColor = "#ffcccc";
		Laya.loader.load("res/atlas/comp.atlas", Laya.Handler.create(this, onLoaded), null
		,Laya.Loader.ATLAS);

	})();
	
	function onLoaded () {
		var game = new Game();
		Laya.stage.addChild(game);
	}
})();