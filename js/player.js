class Player {
  constructor() {
    this.width = 10;
    this.height = 10;
    this.x = 100;
    this.y = 100;
    this.color = "black";
  }

  draw() {
    gameContext.fillStyle = this.color;
    gameContext.fillRect(this.x, this.y, this.width, this.height);
  }
}
