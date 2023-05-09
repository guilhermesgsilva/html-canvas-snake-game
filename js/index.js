console.log("index.js link");

const gameCanvas = document.getElementById("gameCanvas");
const gameContext = gameCanvas.getContext("2d");
let currentGame;

document.getElementById("gameBoard").style.display = "none";

document.getElementById("startButton").onclick = () => {
  document.getElementById("gameBoard").style.display = "block";
  document.getElementById("gameIntro").style.display = "none";

  startGame();
  console.log(currentGame.player)
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
