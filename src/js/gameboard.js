import Ship from './ship';

export default class GameBoard {
  board = [];

  hitCount = 0;

  totalShipTiles = 0;

  constructor() {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        this.board.push({
          posX: j,
          posY: i,
          hit: false,
          ship: null,
        });
      }
    }
  }

  findTileIndex(x, y) {
    const index = this.board.findIndex((e) => {
      if (e.posX === x && e.posY === y) {
        return e;
      }
    });
    return index;
  }

  place(ship, coordX, coordY) {
    const index = this.findTileIndex(coordX, coordY);
    if (this.board[index].ship === null) {
      this.board[index].ship = ship;
      this.totalShipTiles += 1;
    }
  }

  receiveAttack(x, y) {
    const index = this.findTileIndex(x, y);

    if (!this.board[index].hit) {
      this.board[index].hit = true;
      if (this.board[index].ship != null) {
        this.board[index].ship.hit();
      }
      this.hitCount += 1;
      return true;
    }
    return false;
  }

  allShipsSunk() {
    if (this.hitCount === this.totalShipTiles && this.totalShipTiles !== 0) {
      return true;
    }
    return false;
  }

  randomBoard() {
    const myShips = [new Ship(2), new Ship(3), new Ship(3), new Ship(4), new Ship(5)];
    let tilesToUse = [];

    while (myShips.length !== 0) {
      const ship = myShips.pop();
      let randX = Math.floor(Math.random() * 10);
      let randY = Math.floor(Math.random() * 10);
      let rollAxis = Math.floor(Math.random() * 2);
      let randCoordToUse = rollAxis === 1 ? randY : randX;
      let keyToUse = rollAxis === 1 ? 'posY' : 'posX';
      for (let index = 0; index < this.board.length; index++) {
        if (this.board[index][keyToUse] === randCoordToUse) {
          tilesToUse.push(this.board[index]);
        }
        if (tilesToUse.length === 10) {
          let flag = false;
          let freeCells = [];
          for (let j = 0; j < tilesToUse.length; j++) {
            if (tilesToUse[j].ship === null && flag === false) {
              freeCells.push(tilesToUse[j]);
            }
            if (tilesToUse[j].ship !== null && flag === false) {
              freeCells = [];
            }
            if (freeCells.length === ship.size && flag === false) {
              flag = true;
              freeCells.forEach((tile) => {
                this.place(ship, tile.posX, tile.posY);
              });
              break;
            }
            if (j === tilesToUse.length - 1 && flag === false) {
              randX = Math.floor(Math.random() * 10);
              randY = Math.floor(Math.random() * 10);
              rollAxis = Math.floor(Math.random() * 2);
              randCoordToUse = rollAxis === 1 ? randY : randX;
              keyToUse = rollAxis === 1 ? 'posY' : 'posX';
              index = 0;
            }
          }
          tilesToUse = [];
        }
      }
    }
  }
}
