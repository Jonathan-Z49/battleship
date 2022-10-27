import Ship from './ship';

export default class GameBoard {
  board = [];

  shipList = [];

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
      this.shipList.push(ship);
    }
  }

  receiveAttack(x, y) {
    const index = this.findTileIndex(x, y);

    if (!this.board[index].hit) {
      this.board[index].hit = true;
      if (this.board[index].ship != null) {
        this.board[index].ship.hit();
      }
    }
  }

  allShipsSunk() {
    for (let index = 0; index < this.shipList.length; index++) {
      if (!this.shipList[index].isSunk()) {
        return false;
      }
    }
    return true;
  }

  randomBoard() {
    const myShips = [new Ship(2), new Ship(3), new Ship(3), new Ship(4), new Ship(5)];
    let tilesToUse = [];
    let randX = Math.floor(Math.random() * 10);
    let randY = Math.floor(Math.random() * 10);
    let rollAxis = Math.floor(Math.random() * 2);
    let randCoordToUse = rollAxis === 1 ? randY : randX;
    let keyToUse = rollAxis === 1 ? 'posY' : 'posX';

    while (myShips.length !== 0) {
      const ship = myShips.pop();
      randX = Math.floor(Math.random() * 10);
      randY = Math.floor(Math.random() * 10);
      rollAxis = Math.floor(Math.random() * 2);
      randCoordToUse = rollAxis === 1 ? randY : randX;
      keyToUse = rollAxis === 1 ? 'posY' : 'posX';
      for (let index = 0; index < this.board.length; index++) {
        console.log(keyToUse, randCoordToUse);
        if (this.board[index][keyToUse] === randCoordToUse) {
          tilesToUse.push(this.board[index]);
        }
        if (tilesToUse.length === 10) {
          let i = 0;
          let flag = false;
          for (let j = 0; j < tilesToUse.length; j++) {
            if (tilesToUse[j].ship === null && flag === false) {
              i++;
            }
            if (tilesToUse[j].ship !== null && flag === false) {
              i = 0;
            }
            if (i === ship.size && flag === false) {
              flag = true;
              j -= ship.size;
            }
            if (flag && i !== 0) {
              console.log('here', tilesToUse[i].posX, tilesToUse[i].posY);
              this.place(ship, tilesToUse[i].posX, tilesToUse[i].posY);
              i--;
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
