const canvas = document.getElementById("game");
const context = canvas.getContext("2d");

export function drawSquare(x, y, color) {
  context.fillStyle = color;
  context.fillRect(x * 25, y * 25, 25, 25);
  context.strokeStyle = "lightblue";
  context.strokeRect(x * 25, y * 25, 25, 25);
};

export let board = [];
for (let i = 0; i < 24; i++) {
  board[i] = [];
  for (let j = 0; j < 20; j++) {
    board[i][j] = "white";
  }
};

export function drawBoard() {
  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 20; j++) {
      drawSquare(j, i, board[i][j]);
    }
  }
};