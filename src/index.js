import './styles/index.scss';
import { drawBoard } from "./scripts/board";
import { drop } from './scripts/tetris_pro';

document.addEventListener("DOMContentLoaded", () => {
  drawBoard();
  drop();
});
