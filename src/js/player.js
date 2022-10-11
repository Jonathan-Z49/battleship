export default class Player {
  turn = false;

  constructor(name, isComputer) {
    this.name = name;
    this.isComputer = isComputer;
  }

  takeTurn() {
    this.turn = false;
  }

  isTurn() {
    return this.turn;
  }
}
