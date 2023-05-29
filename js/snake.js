class Snake {
  constructor() {
    this.width = 100;
    this.height = 100;
    this.x = 0;
    this.y = 0;
    this.color = "black";
    this.changeOnX = 10;
    this.changeOnY = 0;
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
    fix_dpi();
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
  }

  move() {
    this.x = this.x + this.changeOnX;
    this.y = this.y + this.changeOnY;

    if (this.left() > canvas.width - this.width) {
      this.x = 0;
    } else if (this.right() <= 0) {
      this.x = canvas.width - this.width;
    } else if (this.top() < 0) {
      this.y = canvas.height - this.height;
    } else if (this.bottom() > this.height) {
      this.y = 0;
    }
  }
}
