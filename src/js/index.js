// eslint-disable-next-line import/no-extraneous-dependencies
import 'modern-normalize/modern-normalize.css';
import '../styles.scss';
import initialize from './display';
import GameBoard from './gameboard';

const myBoard = new GameBoard();
const testBoard = new GameBoard();
testBoard.randomBoard();
console.log(testBoard.board);
console.log(testBoard.shipList);
initialize(myBoard);
