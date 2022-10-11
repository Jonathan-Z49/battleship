export default class Ship {
  sunk = false;

  size = 0;

  hitCount = 0;

  constructor(size) {
    this.size = size;
  }

  hit() {
    this.hitCount += 1;
    if (this.hitCount === this.size) {
      this.sunk = true;
    }
  }

  isSunk() {
    return this.sunk;
  }
}
