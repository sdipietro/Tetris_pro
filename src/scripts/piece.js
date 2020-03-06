import { drawSquare, board, drawBoard, drawGameOver } from './board';
import { generateRandomPiece } from "./tetris_pro";

class Piece {
  constructor(piece, color) {
    this.piece = piece;
    this.color = color;
    this.flipNum = 0;
    this.currentPiece = this.piece[this.flipNum];
    this.x = 3;
    this.y = 0;
    this.board = board;
    this.gameOver = false;
    this.gamePaused = false;
    this.scoreElement = document.getElementById("score");
    this.score = 0;
  };

  placePiece() {
    for (let i = 0; i < this.currentPiece.length; i++) {
      for (let j = 0; j < this.currentPiece.length; j++) {
        if (this.currentPiece[i][j]) {
          drawSquare(this.x + j, this.y + i, this.color);
        }
      }
    }
  };

  removePiece() {
    for (let i = 0; i < this.currentPiece.length; i++) {
      for (let j = 0; j < this.currentPiece.length; j++) {
        if (this.currentPiece[i][j]) {
          drawSquare(this.x + j, this.y + i, "white");
        }
      }
    }
  };

  moveDown() {
    // if there is no collision
    if (!this.collision(0, 1, this.currentPiece)) {
        // move piece down 1 spot
        this.removePiece();
        this.y++;
        this.placePiece();
    } else {
        //freeze piece at bottom and drop new piece
        this.freeze();
        this.piece = generateRandomPiece();
    }
  }
  
  moveLeft() {
      if (!this.collision(-1, 0, this.currentPiece)) {
        this.removePiece();
        this.x--;
        this.placePiece();
      }
  }

  moveRight() {
      // if there is no collision
      if (!this.collision(1, 0, this.currentPiece)) {
        this.removePiece();
        this.x++;
        this.placePiece();
      }
  }

  rotate() {
      let next = this.piece[(this.flipNum + 1) % this.piece.length];
      if (!this.collision(0, 0, next)) {
        this.removePiece();
        this.flipNum = (this.flipNum + 1) % this.piece.length;
        this.currentPiece = this.piece[this.flipNum];
        this.placePiece();
      }
  };

  collision(x, y, piece) {
      for (let i = 0; i < piece.length; i++) {
        for (let j = 0; j < piece.length; j++) {
          if (!piece[i][j] || (this.y + i + y) < 0) {
            continue;
          }
          if (
            (this.x + j + x) < 0 ||
            (this.x + j + x) >= 15 ||
            (this.y + i + y) >= 21
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

  freeze() {
    for (let i = 0; i < this.currentPiece.length; i++) {
      for (let j = 0; j < this.currentPiece.length; j++) {
        if (!this.currentPiece[i][j]) {
          continue;
        }
        if (this.y + i < 1) {
            // debugger
            alert("GAME OVER");
            this.gameOver = true;
            // drawGameOver();
            break;
        }
        board[this.y + i][this.x + j] = this.color
      }
    }

    //remove full rows
    for (let i = 0; i < 21; i++) {
        let full = true;
        for (let j = 0; j < 15; j++) {
            full = full && (board[i][j] != "white");
        }
        if (full) {
            for (let y = i; y > 1; y--) {
                for (let j = 0; j < 15; j++) {
                  board[y][j] = board[y - 1][j];
                }
            }

            for (let j = 0; j < 15; j++) {
                board[0][j] = "white";
            }
            // increase score
            this.score += 100
        }
    }
    drawBoard();
    this.scoreElement.innerHTML = this.score;
  };
  
};

export default Piece;