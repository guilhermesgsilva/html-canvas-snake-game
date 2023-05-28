console.log("index.js link");

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

/* https://medium.com/wdstack/fixing-html5-2d-canvas-blur-8ebe27db07da */

const dpi = window.devicePixelRatio;

function fix_dpi() {
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

document.getElementById("gameBoard").style.display = "none";

document.getElementById("startButton").onclick = () => {
  document.getElementById("gameBoard").style.display = "block";
  document.getElementById("gameIntro").style.display = "none";

  startGame();
};

document.getElementById("stopButton").onclick = () => {
  document.getElementById("gameBoard").style.display = "none";
  document.getElementById("gameIntro").style.display = "block";
};

function startGame() {
  currentGame = new Game();
  currentGame.player = new Player();
  currentGame.player.draw();
}
