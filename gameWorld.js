const DELTA = 1/100;

function GameWorld(){

  this.yellowBall = new Ball(new Vector2(413, 413));
  this.stick = new Stick(new Vector2(413, 413), this.yellowBall.shoot.bind(this.yellowBall));
}

GameWorld.prototype.update = function () {

  this.stick.update();
  this.yellowBall.update(DELTA);

};

GameWorld.prototype.draw = function () {

  Canvas.drawImage(sprites.background, {x:0, y:0});

  this.stick.draw();
  this.yellowBall.draw();
};
