class Player {
  constructor() {
    this.width = 100;
    this.height = 100;
    this.x = 0;
    this.y = 0;
    this.color = "black";
    this.changeOnX = 0;
    this.changeOnY = 10;
  }

  draw() {
    fix_dpi();
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
  }

  move() {
    this.x = this.x + this.changeOnX;
    this.y = this.y + this.changeOnY;
  }
}
