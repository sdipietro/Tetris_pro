import { open_box, plug, hook, long, box, corner } from "./pieces";
import Piece from './piece';

const piece_array = [
  [open_box, "red"],
  [plug, "orange"],
  [hook, "cyan"],
  [long, "blue"],
  [box, "purple"],
  [corner, "green"],
];

export function generateRandomPiece() {
  const random = Math.floor(Math.random() * 5);
  return piece = new Piece(piece_array[random][0], piece_array[random][1]);
}

let piece = generateRandomPiece();

document.addEventListener("keydown", CONTROL);

function CONTROL(event) {
  if (event.keyCode == 37) {
    piece.moveLeft();
  } else if (event.keyCode === 38) {
    piece.rotate();
  } else if (event.keyCode === 39) {
    piece.moveRight();
  } else if (event.keyCode === 40) {
    piece.moveDown();
  }
};

let startTime = Date.now();
export function drop() {
  let currentTime = Date.now();
  let difference = currentTime - startTime;
  if (difference > 1000) {
    piece.moveDown();
    startTime = Date.now();
  }
  requestAnimationFrame(drop);
};