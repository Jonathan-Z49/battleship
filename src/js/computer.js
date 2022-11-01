export default class Computer {
  usedTiles = [];

  adjacentTiles = [];

  makeMove() {
    let tile;
    if (this.adjacentTiles.length === 0) {
      let randX = Math.floor(Math.random() * 10);
      let randY = Math.floor(Math.random() * 10);
      while (this.checkIfUsed(randX, randY)) {
        randX = Math.floor(Math.random() * 10);
        randY = Math.floor(Math.random() * 10);
        tile = { x: randX, y: randY, hit: false };
      }
      this.usedTiles.push(tile);
      return tile;
    }
    return null;
  }

  checkIfUsed(x, y) {
    for (let index = 0; index < this.usedTiles.length; index++) {
      if (this.usedTiles[index].x === x && this.usedTiles[index].y === y) {
        return true;
      }
    }
    return false;
  }

  updateLastTileHit() {
    this.usedTiles[this.usedTiles.length - 1].hit = true;
    const randX = Math.floor(Math.random() * 10);
    const randY = Math.floor(Math.random() * 10);
    const leftTile = { x: randX - 1, y: randY };
    const rightTile = { x: randX + 1, y: randY };
    const topTile = { x: randX, y: randY - 1 };
    const bottomTile = { x: randX, y: randY + 1 };
    this.adjacentTiles.push(leftTile, rightTile, topTile, bottomTile);
  }

  updateLastTileSunk() {
    this.updateLastTileHit();
    this.adjacentTiles = [];
  }
}
