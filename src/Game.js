var Game = (function(_super){
    function Game() {
        Game.super(this);
        this.moles = new Array;
        this.moleNum = 9;
        this.timeBar.value = 1;
        this.score = 0;
        this.hitCallBack = Laya.Handler.create(this, this.setScore, null, false);
        for (var index = 0 ; index < this.moleNum; index++) {
            this.box = this.getChildByName("item" + index);
            this.mole = new Mole(this.box.getChildByName("normal"), this.box.getChildByName("hit"), 21 , this.hitCallBack, this.box.getChildByName("scoreImg"));
            this.moles.push(this.mole);
        }
        this.hammer = new Hammer();
        this.addChild(this.hammer);
        this.hammer.start();
        Laya.timer.loop(1000, this, this.isShow)
    }
    Laya.class(Game, "Game", _super);
    var _proto = Game.prototype;
    _proto.isShow = function (){
        this.timeBar.value -= (1 / 90);
        if (this.timeBar.value <= 0.001) {
            this.gameOver();
            return;
        }
        this.index = Math.floor(Math.random() * this.moleNum);
        this.moles[this.index ].show();
    };
    _proto.setScore =function (type) {
        console.log("score:", this.score);
        this.score += type == 1 ? -100 : 100;
        if (this.score <= 0 ) {
            this.score = 0;
        }
        console.log("score:", this.score);
        this.updateScorceUI();
    };
    _proto.updateScorceUI = function () {
        var data = {};
        var temp = this.score;
        for (let i = 9; i >= 0; i--) {
            data["item" + i] = { index: Math.floor(temp % 10)};
            temp /= 10;
            // if (temp <= 1) {
            //     break ;
            // }
        }
        this.scoreNum.dataSource = data;
    };
    _proto.gameOver = function () {
        Laya.timer.clear(this, this.isShow);
        console.log('gameOver');
    }

    return Game;
})(ui.GameUI);