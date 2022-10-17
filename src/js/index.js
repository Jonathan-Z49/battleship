// eslint-disable-next-line import/no-extraneous-dependencies
import 'modern-normalize/modern-normalize.css';
import '../styles.scss';
import * as displayDOM from './display';
import GameBoard from './gameboard';

const myBoard = new GameBoard();
displayDOM.createBoardDOM(myBoard);
displayDOM.createShipGridCells();
