var Game = (function(_super){
    function Game() {
        Game.super(this);
        this.mole = new Mole(this.normal, this.hit, 21)
        this.mole.show();
    }
    Laya.class(Game, "Game", _super);
    return Game;
})(ui.GameUI);