import { Z, S, T, O, L, I, J } from './pieces';

const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

const ROW = 20;
const COLUMN = 10;
const SQUARE = 20;
const VACANT = "WHITE";

export function drawSquare(x,y,color) {
    context.fillStyle = color;
    context.fillRect(x * SQUARE, y * SQUARE, SQUARE, SQUARE);

    context.strokeStyle = "BLACK";
    context.strokeRect(x * SQUARE, y * SQUARE, SQUARE, SQUARE);
}

// drawSquare(0,0,"red");

let board = [];
for (let r = 0; r < ROW; r++) {
    board[r] = [];
    for (let c = 0; c < COLUMN; c++) {
        board[r][c] = VACANT;
    }
};

function drawBoard() {
    for (let r = 0; r < ROW; r++) {
      for (let c = 0; c < COLUMN; c++) {
        drawSquare(c,r,board[r][c])
      }
    }
};

drawBoard();

// const PIECES = [
//     [Z, "red"],
//     [S, "green"],
//     [T, "yellow"],
//     [O, "blue"],
//     [L, "purple"],
//     [I, "cyan"],
//     [J, "orange"]
// ];

// let p = new Piece(PIECES[0][0], PIECES[0][1]);

// function Piece(piece, color) {
//     this.piece = piece;
//     this.color = color;

//     this.pieceNum = 0;
//     this.activePiece = this.piece[this.pieceNum];

//     this.x = 0;
//     this.y = 0;
// };

// Piece.prototype.draw = function() {
//     for (r = 0; r < this.activePiece.length; r++) {
//       for (c = 0; c < this.activePiece.length; c++) {
//           if (this.activePiece[r][c]) {
//               drawSquare(this.x + c, this.y + r, this.color);
//           }
//       }
//     }
// };

// // p.draw();

// Piece.prototype.moveDown = function() {
//     this.y++;
//     this.draw();
// };

// let startTime = Date.now();
// function drop() {
//     let currentTime = Date.now();
//     let difference = currentTime - startTime;
//     if (difference > 1000) {
//         p.moveDown();
//         startTime = Date.now();
//     }
//     requestAnimationFrame(drop);
// };

// drop();
