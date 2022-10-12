import Ship from '../js/ship';
import GameBoard from '../js/gameboard';

/* eslint-disable */
describe('Gameboard class testing', () => {
    let testShip;
    let testShip2;
    let testBoard;
    beforeEach(() => {
        testShip = new Ship();
        testShip2 = new Ship();
        testBoard = new GameBoard();
      });

    test('Creates a gameboard', (done) => {
        expect(testBoard).toBeDefined();
        expect(testBoard.board.length).toBe(100);
        done();
    });

    test('Receives the index of a specific tile on the board, with no ship or hits.', () => {
        expect(testBoard.board[testBoard.findTileIndex(5,5)]).toEqual({
          posX: 5,
          posY: 5,
          hit: false,
          ship: null,
        });
    });

    test('Places a ship of size 2 on the coordinates (2,2) (3,2)', (done) => {
        testShip.size = 2;
        testBoard.place(testShip, 2, 2);
        testBoard.place(testShip, 3, 2);
        expect(testBoard.board[testBoard.findTileIndex(2,2)]).toEqual({
            posX: 2,
            posY: 2,
            hit: false,
            ship: testShip,
        });
        expect(testBoard.board[testBoard.findTileIndex(3,2)]).toEqual({
            posX: 3,
            posY: 2,
            hit: false,
            ship: testShip,
          });
          done();
    });

    test('Should not place a ship on a tile that is already taken', (done) => {
        testShip.size = 1;
        testShip2.size = 2;
        testBoard.place(testShip, 1, 1);
        testBoard.place(testShip2, 1, 1);
        expect(testBoard.board[testBoard.findTileIndex(1,1)]).toEqual({
            posX: 1,
            posY: 1,
            hit: false,
            ship: testShip,
        });
        expect(testBoard.board[testBoard.findTileIndex(1,1)]).not.toEqual({
            posX: 1,
            posY: 1,
            hit: false,
            ship: testShip2,
        });
        done();
    });

    test('Places a ship of size 1 on coordinates (1,1) and attacks the same tile.', () => {
       testShip.size = 1;
       testBoard.place(testShip, 1, 1);
       testBoard.receiveAttack(1, 1);
       let indexHit = testBoard.findTileIndex(1, 1);
       expect(testBoard.board[indexHit].hit).toBeTruthy();
    });

    test('Places a ship of size 1 on coordinates (1,1) and attacks the same tile. All ships on the board should be sunk', () => {
        testShip.size = 1;
        testBoard.place(testShip, 1, 1);
        testBoard.receiveAttack(1, 1);
        expect(testBoard.allShipsSunk()).toBeTruthy();
    });

    test('Places 2 ships on the board, sinking only one. All ships on the board should not be sunk', () => {
        testShip.size = 1;
        testShip2.size = 1;
        testBoard.place(testShip, 1, 1);
        testBoard.place(testShip2, 2, 2);
        testBoard.receiveAttack(1, 1);
        expect(testBoard.allShipsSunk()).toBeFalsy();
    });

});