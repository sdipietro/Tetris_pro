import { drawSquare, board } from './board';
import { generateRandomPiece } from './tetris_pro';

class Piece {
  constructor(piece, color) {
    this.piece = piece;
    this.color = color;
    this.pieceNum = 0;
    this.currentPiece = this.piece[this.pieceNum];
    this.x = 0;
    this.y = 0;
    this.board = board;
  };

  placePiece() {
    this.input(this.color);
  };

  removePiece() {
    this.input("white");
  };

  input(color) {
    for (let i = 0; i < this.currentPiece.length; i++) {
      for (let j = 0; j < this.currentPiece.length; j++) {
        if (this.currentPiece[i][j]) {
          drawSquare(this.x + i, this.y + j, color);
        }
      }
    }
  };

  moveDown() {
    if (!this.collision(0, 1, this.currentPiece)) {
        // move piece down 1 spot
        this.removePiece();
        this.y++;
        this.placePiece();
    } else {
        this.piece = generateRandomPiece();
    }
  }

  moveRight() {
      if (!this.collision(1, 0, this.currentPiece)) {
        this.removePiece();
        this.x++;
        this.placePiece();
      }
  }

  moveLeft() {
      if (!this.collision(-1, 0, this.currentPiece)) {
        this.removePiece();
        this.x--;
        this.placePiece();
      }
  }

  rotate() {
      let next = this.piece[(this.pieceNum + 1) % this.piece.length];
      if (!this.collision(0, 0, next)) {
        this.removePiece();
        this.pieceNum = (this.pieceNum + 1) % this.piece.length;
        this.currentPiece = this.piece[this.pieceNum];
        this.placePiece();
      }
  };

  collision(x, y, piece) {
      for (let i = 0; i < piece.length; i++) {
        for (let j = 0; j < piece.length; j++) {
          if (!piece[i][j] || (this.y + i + y < 0)) {
            continue;
          }
          if (
            (this.x + j + x) < 0 ||
            (this.x + j + x) >= 20 ||
            (this.y + i + y) >= 24
          ) {
            return true;
          }
          if (this.board[(this.y + i + y)][(this.x + j + x)] != "white") {
            return true;
          }
        }
      }
      return false;
  };

  
};

export default Piece;