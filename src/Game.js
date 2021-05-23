var Game = (function(_super){
    function Game() {
        Game.super(this);
        this.moles = new Array;
        this.moleNum = 9  
        for (var index = 0 ; index < this.moleNum; index++) {
            this.box = this.getChildByName("item" + index);
            this.mole = new Mole(this.box.getChildByName("normal"), this.box.getChildByName("hit"), 21);
            this.moles.push(this.mole);
        }
        Laya.timer.loop(1000, this, this.onLoop)
    }
    Laya.class(Game, "Game", _super);
    var _proto = Game.prototype;
    _proto.onLoop = function (){
        this.index = Math.floor(Math.random() * this.moleNum);
        this.moles[this.index ].show();
    };

    return Game;
})(ui.GameUI);