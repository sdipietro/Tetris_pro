import { Z, S, T, O, L, I, J } from "./pieces";
import { drawSquare } from './tetris_pro';

const PIECES = [
  [Z, "red"],
  [S, "green"],
  [T, "yellow"],
  [O, "blue"],
  [L, "purple"],
  [I, "cyan"],
  [J, "orange"]
];

class Piece {
  constructor(piece, color) {
    this.piece = piece;
    this.color = color;
    this.pieceNum = 0;
    this.activePiece = this.piece[this.pieceNum];

    this.x = 0;
    this.y = 0;
  };

  placePiece() {
    this.input(this.color);
  };

  removePiece() {
    this.input("white");
  };

  input(color) {
    for (let r = 0; r < this.activePiece.length; r++) {
      for (let c = 0; c < this.activePiece.length; c++) {
        if (this.activePiece[r][c]) {
          drawSquare(this.x + c, this.y + r, color);
        }
      }
    }
  };



  moveDown() {
    this.removePiece();
    this.y++;
    this.placePiece();
  }

  moveRight() {
    this.removePiece();
    this.x++;
    this.placePiece();
  }

  moveLeft() {
    this.removePiece();
    this.x--;
    this.placePiece();
  }

  rotate() {
    this.removePiece();
    this.pieceNum = (this.pieceNum + 1) % this.piece.length;
    this.activePiece = this.piece[this.pieceNum];
    this.placePiece();
  };
}

let p = new Piece(PIECES[0][0], PIECES[0][1]);

document.addEventListener("keydown", CONTROL);

function CONTROL(event) {
    if (event.keyCode == 37) {
        p.moveLeft();
    } else if (event.keyCode === 38) {
        p.rotate();
    } else if (event.keyCode === 39) {
        p.moveRight();
    } else if (event.keyCode === 40) {
       p.moveDown();
    }
};

let startTime = Date.now();
function drop() {
  let currentTime = Date.now();
  let difference = currentTime - startTime;
  if (difference > 1000) {
    p.moveDown();
    startTime = Date.now();
  }
  requestAnimationFrame(drop);
};

drop();