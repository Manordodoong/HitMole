var Mole = (function () {
    function Mole (normalState, hitState, downY, hitCallBack, scoreImg) {
        this.normalState = normalState;
        this.hitState = hitState;
        this.downY = downY;
        this.upY = this.normalState.y;
        this.hitCallBack = hitCallBack;
        this.scoreImg = scoreImg;
        this.scoreY = this.scoreImg.y;
        this.reset();
        this.normalState.on(Laya.Event.CLICK, this, this.hit);
    };
    var _proto = Mole.prototype;
    _proto.reset = function () {
        // console.log('reset');
        this.isActive = false;
        this.isShow = false;
        this.isHit = false;
        this.normalState.visible = false;
        this.hitState.visible = false;
        this.type = Math.random() <= 0.5 ? 1 : 2;
        this.normalState.skin = "comp/mouse_normal_" + this.type + ".png";
        this.hitState.skin = "comp/mouse_hit_" + this.type + ".png";
        this.scoreImg.skin = "comp/score_" + this.type + ".png";
        this.scoreImg.visible = false;
    };
    _proto.show = function () {
        // console.log('show Y: ', this.downY, " -> ", this.upY);
        if (this.isActive) {return;}
        this.isActive = true;
        this.isShow = true;
        this.normalState.y = this.downY;
        this.normalState.visible = true;
        Laya.Tween.to(this.normalState, 
                     {y:this.upY}, 
                     500, 
                     Laya.Ease.backInOut, 
                     Laya.Handler.create(this, this.showComplete));
    };
    _proto.showComplete = function () {
        // console.log('showComplete');
        if (this.isShow && !this.isHit) {
            Laya.timer.once(2000, this, this.hide);
        } 
    };
    _proto.hide = function () {
        // console.log('hide Y: ', this.normalState.y, " -> ", this.downY);
        if (this.isShow && !this.isHit) {
            this.isShow = false;
            Laya.Tween.to(this.normalState,{y:this.downY},
            								300,
            								Laya.Ease.backIn,
            								Laya.Handler.create(this,this.reset));
        } 
    };
    _proto.hit = function () {
        if(this.isShow && !this.isHit) {
            this.hitCallBack.runWith(this.type);
            this.isHit =true;
            this.isShow = false;
            Laya.timer.clear(this, this.hide);
            this.normalState.visible = false;
            this.hitState.visible =true;
            Laya.timer.once(500, this, this.reset);
            this.showScore();
        }
    };
    _proto.showScore = function () {
        this.scoreImg.visible = true;
        this.scoreImg.y = this.scoreY + 30;
        this.scoreImg.scale(0, 0);
        Laya.Tween.to(this.scoreImg, 
                     {y: this.scoreY, scaleX: 1, 
                     scaleY:1},
                     300,
                     Laya.Ease.backOut);
    };
    return Mole;
})();