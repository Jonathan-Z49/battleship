import Computer from '../js/computer';

/* eslint-disable */
describe('Computer player class testing', () => {
  let computerPlayer;

  beforeEach(() => {
    computerPlayer = new Computer();
  });

  test('Checks if all out of bound index tiles are removed', (done) => {
    const tile1 = {
      x: 0, y: 1, hit: false, axis: 'x', sunk: false,
    };
    const tile2 = {
      x: 1, y: 0, hit: false, axis: 'x', sunk: false,
    };
    const tile3 = {
      x: -1, y: 0, hit: false, axis: 'y', sunk: false,
    };
    const tile4 = {
      x: 0, y: 10, hit: false, axis: 'y', sunk: false,
    };

    computerPlayer.adjacentTiles.push(tile1, tile2, tile3, tile4);
    computerPlayer.removeOutOfBounds();

    expect(computerPlayer.adjacentTiles.length).toBe(2);
    expect(computerPlayer.adjacentTiles[0]).toEqual(tile1);
    expect(computerPlayer.adjacentTiles[1]).toEqual(tile2);
    done();
  });

  test('Checks if the correct axis is filtered out of the adjacent tiles array', (done) => {
    const tile1 = {
      x: 0, y: 1, hit: false, axis: 'x', sunk: false,
    };
    const tile2 = {
      x: 1, y: 0, hit: false, axis: 'x', sunk: false,
    };
    const tile3 = {
      x: 0, y: 2, hit: false, axis: 'y', sunk: false,
    };
    const tile4 = {
      x: 0, y: 7, hit: false, axis: 'y', sunk: false,
    };

    computerPlayer.adjacentTiles.push(tile1, tile2, tile3, tile4);
    computerPlayer.filterByAxis('y');

    expect(computerPlayer.adjacentTiles.length).toBe(2);
    expect(computerPlayer.adjacentTiles[0]).toEqual(tile3);
    expect(computerPlayer.adjacentTiles[1]).toEqual(tile4);
    done();
  });

  test('Check if both adjacent tiles array and used tiles array reset', (done) => {
    const tile1 = {
      x: 0, y: 1, hit: false, axis: 'x', sunk: false,
    };
    const tile2 = {
      x: 1, y: 0, hit: false, axis: 'x', sunk: false,
    };
    computerPlayer.adjacentTiles.push(tile1);
    computerPlayer.usedTiles.push(tile2);
    computerPlayer.reset();
    expect(computerPlayer.adjacentTiles.length).toBe(0);
    expect(computerPlayer.usedTiles.length).toBe(0);
    done();
  });

  test('Check that after getting a confirmation on a tile being hit, adjacent tiles are generated.', (done) => {
    const tile1 = {
      x: 0, y: 1, hit: false, axis: 'x', sunk: false,
    };
    computerPlayer.usedTiles.push(tile1);
    computerPlayer.updateLastTileHit();
    expect(computerPlayer.usedTiles[0].hit).toBeTruthy();
    expect(computerPlayer.adjacentTiles.length).toBeGreaterThan(0);
    done();
  });

  test('Check that the last tile gets updated to be sunk and hit.', (done) => {
    const tile1 = {
      x: 0, y: 1, hit: false, axis: 'x', sunk: false,
    };
    computerPlayer.usedTiles.push(tile1);
    computerPlayer.updateLastTileSunk();
    expect(computerPlayer.usedTiles[0].sunk).toBeTruthy();
    expect(computerPlayer.usedTiles[0].hit).toBeTruthy();
    done();
  });

  test('Check that a tile is already used', () => {
    const tile1 = {
      x: 0, y: 1, hit: false, axis: 'x', sunk: false,
    };
    computerPlayer.usedTiles.push(tile1);
    expect(computerPlayer.checkIfUsed(0, 1, computerPlayer.usedTiles)).toBeTruthy();
  });

  test('Check that a random tile is generated to be used as a move', (done) => {
    const tile = computerPlayer.makeMove();
    expect(tile.x).toBeDefined();
    expect(tile.y).toBeDefined();
    done();
  });
});
