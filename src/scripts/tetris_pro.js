import { I, J, L, O, S, Z } from "./pieces";
import Piece from './piece';

const piece_array = [
  [I, "red"],
  [J, "orange"],
  [L, "cyan"],
  [O, "blue"],
  [S, "purple"],
  [Z, "green"],
];

export function generateRandomPiece() {
  const random = Math.floor(Math.random() * 5);
  return piece = new Piece(piece_array[random][0], piece_array[random][1]);
}

let piece = generateRandomPiece();

document.addEventListener("keydown", keydown_controller);

function keydown_controller(event) {
  if (event.keyCode == 37) {
        event.preventDefault();
        piece.moveLeft();
  } else if (event.keyCode === 38) {
        event.preventDefault();
        piece.rotate();
  } else if (event.keyCode === 39) {
        event.preventDefault();
        piece.moveRight();
  } else if (event.keyCode === 40) {
        event.preventDefault();
        piece.moveDown();
  }
};

let startTime = Date.now();
export function drop() {
  let currentTime = Date.now();
  let timeAccrued = currentTime - startTime;
  if (timeAccrued > 600) {
    piece.moveDown();
    startTime = Date.now();
  }
  // debugger
  if (piece.gameOver === false) {
    requestAnimationFrame(drop);
  }
};