var Mole = (function () {
    function Mole (normalState, hitState, downY) {
        this.normalState = normalState;
        this.hitState = hitState;
        this.downY = downY;
        this.upY = this.normalState.y;
        this.reset();
        this.normalState.on(Laya.Event.CLICK, this, this.hit);
    };
    var _proto = Mole.prototype;
    _proto.reset = function () {
        console.log('reset');
        this.isActive = false;
        this.isShow = false;
        this.isHit = false;
        this.normalState.visible = false;
        this.hitState.visible = false;
    };
    _proto.show = function () {
        console.log('show Y: ', this.downY, " -> ", this.upY);
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
        console.log('showComplete');
        if (this.isShow && !this.isHit) {
            Laya.timer.once(2000, this, this.hide);
        } 
    };
    _proto.hide = function () {
        console.log('hide Y: ', this.normalState.y, " -> ", this.downY);
        if (this.isShow && !this.isHit) {
            this.isShow = false;
            Laya.Tween.to(this.normalState,{y:this.downY},
            								300,
            								Laya.Ease.backIn,
            								Laya.Handler.create(this,this.reset));
        } 
    };
    _proto.hit = function () {

    };
    return Mole;
})();