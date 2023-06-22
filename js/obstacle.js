console.log("obstale.js link");

class Obstacle {
  constructor(game) {
    this.game = game;
    this.width = this.game.gridUnit;
    this.height = this.game.gridUnit;
    this.x = Math.floor(Math.random() * (canvas.width - this.width));
    this.y = Math.floor(Math.random() * (canvas.height - this.height));
    this.color = "green";
  }

  left() {
    return this.x;
  }

  right() {
    return this.x + this.width;
  }

  top() {
    return this.y;
  }

  bottom() {
    return this.y + this.height;
  }

  draw() {
    fixDpi();
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
  }
}
