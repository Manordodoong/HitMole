var Game = (function(_super){
    function Game() {
        Game.super(this);
    }
    Laya.class(Game, "Game", _super);
    return Game;
})(ui.GameUI);