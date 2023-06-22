console.log("snake.js link");

class Snake {
  constructor(game) {
    this.game = game;
    this.x = 200;
    this.y = 200;
    this.width = this.game.gridUnit;
    this.height = this.game.gridUnit;
    this.color = "black";
    this.velocity = this.game.gridUnit / 2;
    this.changeOnX = this.velocity;
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
    fixDpi();
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
  }

  move() {
    this.x = this.x + this.changeOnX;
    this.y = this.y + this.changeOnY;

    if (this.left() > canvas.width) {
      this.x = 0;
    } else if (this.right() < 0) {
      this.x = canvas.width;
    } else if (this.top() > canvas.height) {
      this.y = 0;
    } else if (this.bottom() < 0) {
      this.y = canvas.height;
    }
  }

  changeDirection() {
    window.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowUp":
          if (this.changeOnY === 0) {
            this.changeOnY = -this.velocity;
            this.changeOnX = 0;
          }
          break;
        case "ArrowDown":
          if (this.changeOnY === 0) {
            this.changeOnY = this.velocity;
            this.changeOnX = 0;
          }
          break;
        case "ArrowRight":
          if (this.changeOnX === 0) {
            this.changeOnX = this.velocity;
            this.changeOnY = 0;
          }
          break;
        case "ArrowLeft":
          if (this.changeOnX === 0) {
            this.changeOnX = -this.velocity;
            this.changeOnY = 0;
          }
          break;
        default:
          break;
      }
    });
  }
}
