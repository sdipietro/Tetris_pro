const canvas = document.getElementById("game");
const context = canvas.getContext("2d");

export function drawSquare(x, y, color) {
  context.fillStyle = color;
  context.fillRect(x * 25, y * 25, 25, 25);
  context.strokeStyle = "lightblue";
  context.strokeRect(x * 25, y * 25, 25, 25);
};

export let board = [];
for (let i = 0; i < 21; i++) {
  board[i] = [];
  for (let j = 0; j < 15; j++) {
    board[i][j] = "white";
  }
};

export function drawBoard() {
  for (let i = 0; i < 21; i++) {
    for (let j = 0; j < 15; j++) {
      drawSquare(j, i, board[i][j]);
    }
  }
};

export function drawGameOver() {
  context.rect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "black";
  context.fill();
  context.font = "30px Arial";
  context.fillStyle = "white";
  context.textAlign = "center";
  context.fillText("GAME OVER", canvas.width / 2, canvas.height / 2);
  context.fillText(
    "Press N to start a new game",
    canvas.width / 2,
    canvas.height / 2 + 100
  );
};