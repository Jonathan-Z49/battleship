import Ship from '../js/ship';

/* eslint-disable */
describe("Ship class testing", () => {
  let testShip;
  beforeEach(() => {
    testShip = new Ship();
  });

  test("Initializes a ship correctly where it is not sunk, and 0 hits.", (done) => {
    expect(testShip.isSunk()).toBeFalsy();
    expect(testShip.hitCount).toBe(0);
    done();
  });

  test("Creates a ship with a size of 5", () => {
    testShip.size = 5;
    expect(testShip.size).toBe(5);
  });

  test("Creates a ship with a size of 2", () => {
    testShip.size = 2;
    expect(testShip.size).toBe(2);
  });

  test("Creates a ship with a size of 2 and gets hit once", () => {
    testShip.size = 2;
    testShip.hit();
    expect(testShip.hitCount).toBe(1);
  });

  test("Creates a ship with a size of 2 and gets hit twice, sinking the ship", (done) => {
    testShip.size = 2;
    testShip.hit();
    testShip.hit();
    expect(testShip.hitCount).toBe(2);
    expect(testShip.isSunk()).toBeTruthy();
    done();
  });

});
