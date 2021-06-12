var GameStart = (function(_super) {
    function GameStart () {
        GameStart.super(this);
        this.startButton.on(Laya.Event.CLICK, this, this.onStartGame);
    }
    
    Laya.class(GameStart, "GameStart", _super);
 
    var _proto = GameStart.prototype;
    _proto.onStartGame = function () {
        this.removeSelf();
        if (!LayaSample.game) {
            LayaSample.game = new Game();
        }
        Laya.stage.addChild(LayaSample.game);
    }
    return GameStart;
})(ui.GameStartUI);