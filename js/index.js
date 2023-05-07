console.log("index.js link");

document.getElementById("gameBoard").style.display = "none";

document.getElementById("startButton").onclick = () => {
  document.getElementById("gameBoard").style.display = "block";
  document.getElementById("gameIntro").style.display = "none";
};

document.getElementById("stopButton").onclick = () => {
  document.getElementById("gameBoard").style.display = "none";
  document.getElementById("gameIntro").style.display = "block";
};
