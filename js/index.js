console.log("index.js link");

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

/* https://medium.com/wdstack/fixing-html5-2d-canvas-blur-8ebe27db07da */

const dpi = window.devicePixelRatio;

function fixDpi() {
  let style = {
    height() {
      return +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2);
    },
    width() {
      return +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
    },
  };
  canvas.setAttribute("width", style.width() * dpi);
  canvas.setAttribute("height", style.height() * dpi);
}

let currentGame;
/* let frames = 0; */

document.getElementById("gameBoard").style.display = "none";

document.getElementById("startButton").onclick = () => {
  document.getElementById("gameBoard").style.display = "block";
  document.getElementById("gameIntro").style.display = "none";

  startGame();
};

document.getElementById("stopButton").onclick = () => {
  endGame();
  document.getElementById("gameBoard").style.display = "none";
  document.getElementById("gameIntro").style.display = "block";
  document.getElementById("gameIntro").style.display = "flex";
};

function startGame() {
  fixDpi();
  currentGame = new Game();
  currentGame.obstacle = new Obstacle(currentGame);
  currentGame.snake = new Snake(currentGame);
  cancelAnimationFrame(currentGame.animationId);
  updateCanvas();
}

function updateCanvas() {
  /* frames++; */
  context.clearRect(0, 0, canvas.width, canvas.height);
  currentGame.obstacle.draw();
  currentGame.snake.changeDirection();
  currentGame.snake.move();
  currentGame.snake.draw();
  currentGame.animationId = requestAnimationFrame(updateCanvas);
}

function endGame() {
  cancelAnimationFrame(currentGame.animationId);
  frames = 0;
}
