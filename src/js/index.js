// eslint-disable-next-line import/no-extraneous-dependencies
import 'modern-normalize/modern-normalize.css';
import '../styles.scss';
import initialize from './display';
import GameBoard from './gameboard';

const myBoard = new GameBoard();
initialize(myBoard);
