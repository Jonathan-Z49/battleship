export default class Computer {
  usedTiles = [];

  adjacentTiles = [];

  makeMove() {
    let tile = {
      x: null, y: null, hit: false, axis: null, sunk: false,
    };

    if (this.usedTiles.length > 0) {
      tile = this.usedTiles[this.usedTiles.length - 1];
    }

    if (this.adjacentTiles.length === 0 || this.usedTiles.length === 0) {
      let randX = Math.floor(Math.random() * 10);
      let randY = Math.floor(Math.random() * 10);
      tile = {
        x: randX, y: randY, hit: false, axis: null, sunk: false,
      };
      while (this.checkIfUsed(randX, randY, this.usedTiles)) {
        randX = Math.floor(Math.random() * 10);
        randY = Math.floor(Math.random() * 10);
        tile = {
          x: randX, y: randY, hit: false, axis: null, sunk: false,
        };
      }
      this.usedTiles.push(tile);

      return tile;
    }

    if (tile.axis === null && tile.hit) {
      const adjTile = this.adjacentTiles.shift();
      this.usedTiles.push(adjTile);
      return adjTile;
    }

    if (tile.axis !== null && tile.hit) {
      this.filterByAxis(tile.axis);
      const adjTile = this.adjacentTiles.shift();
      this.usedTiles.push(adjTile);
      return adjTile;
    }

    if (tile.axis !== null && !tile.hit) {
      const adjTile = this.adjacentTiles.shift();
      this.usedTiles.push(adjTile);
      return adjTile;
    }

    return null;
  }

  checkIfUsed(x, y, arr) {
    for (let index = 0; index < arr.length; index++) {
      if (arr[index].x === x && arr[index].y === y) {
        return true;
      }
    }
    return false;
  }

  updateLastTileHit() {
    const lastTile = this.usedTiles[this.usedTiles.length - 1];
    lastTile.hit = true;

    const leftTile = {
      x: lastTile.x - 1, y: lastTile.y, hit: false, axis: 'x', sunk: false,
    };
    const rightTile = {
      x: lastTile.x + 1, y: lastTile.y, hit: false, axis: 'x', sunk: false,
    };
    const topTile = {
      x: lastTile.x, y: lastTile.y - 1, hit: false, axis: 'y', sunk: false,
    };
    const bottomTile = {
      x: lastTile.x, y: lastTile.y + 1, hit: false, axis: 'y', sunk: false,
    };

    this.adjacentTiles.push(leftTile, topTile, rightTile, bottomTile);
    this.removeOutOfBounds();

    let result = [];
    result = this.adjacentTiles.filter((tile) => !this.checkIfUsed(tile.x, tile.y, this.usedTiles));

    this.adjacentTiles = result;
  }

  updateLastTileSunk() {
    this.usedTiles[this.usedTiles.length - 1].sunk = true;
    this.usedTiles[this.usedTiles.length - 1].hit = true;
    this.adjacentTiles = [];
  }

  filterByAxis(axis) {
    const result = this.adjacentTiles.filter((tile) => tile.axis === axis);
    this.adjacentTiles = result;
  }

  removeOutOfBounds() {
    const result = this.adjacentTiles.filter((tile) => tile.x >= 0 && tile.y >= 0
    && tile.x <= 9 && tile.y <= 9);
    this.adjacentTiles = result;
  }

  reset() {
    this.adjacentTiles = [];
    this.usedTiles = [];
  }
}
