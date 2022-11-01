import Ship from './ship';
import GameBoard from './gameboard';
import Computer from './computer';

const computerPlayer = new Computer();
const board = new GameBoard();
const computerBoard = new GameBoard();
computerBoard.randomBoard();

export default function initialize() {
  createBoardDOM();
  createShipGridCells();
  setUpAxisButton();
}

function createBoardDOM(isComputerBoard = false) {
  console.log(board, computerBoard);
  const computerBoardDOM = document.createElement('div');
  const boardDOM = document.querySelector('.board');
  computerBoardDOM.classList.add('board');
  if (!isComputerBoard) {
    boardDOM.addEventListener('dragleave', dragLeave);
  }

  const boardToLoop = isComputerBoard ? computerBoard : board;

  boardToLoop.board.forEach((element) => {
    const gridCell = document.createElement('div');
    gridCell.classList.add('cell');
    gridCell.setAttribute('data-x', element.posX);
    gridCell.setAttribute('data-y', element.posY);
    if (!isComputerBoard) {
      gridCell.addEventListener('dragenter', dragEnter);
      gridCell.addEventListener('dragover', dragOver);
      gridCell.addEventListener('drop', dragDrop);
      // eslint-disable-next-line prefer-arrow-callback
      gridCell.addEventListener('hitPlayerTileEvent', function handler(e) {
        clickTileToHit(e, board, boardDOM, handler);
      });
      boardDOM.appendChild(gridCell);
    } else {
      // eslint-disable-next-line prefer-arrow-callback
      gridCell.addEventListener('click', function handler(e) {
        clickTileToHit(e, computerBoard, computerBoardDOM, handler, boardDOM, true);
      });
      computerBoardDOM.appendChild(gridCell);
    }
  });

  if (isComputerBoard) {
    return computerBoardDOM;
  }
  return false;
}

function createShipGridCells() {
  const shipList = document.querySelectorAll('.ship-container');

  shipList.forEach((shipContainer) => {
    shipContainer.addEventListener('dragstart', dragStart);
    shipContainer.addEventListener('dragend', dragEnd);

    const sizeOfShip = parseInt(shipContainer.getAttribute('data-ship'), 10);

    for (let index = 0; index < sizeOfShip; index++) {
      const shipCell = document.createElement('div');
      shipCell.classList.add('ship-cell');
      shipCell.setAttribute('data-shipcell', sizeOfShip);
      shipContainer.appendChild(shipCell);
    }
  });
}

function setUpAxisButton() {
  const axisButton = document.querySelector('#axis-btn');
  const ships = document.querySelectorAll('.ship-container');
  const allShips = document.querySelector('.all-ships');
  axisButton.innerText = 'X-AXIS';
  axisButton.setAttribute('data-axis', 'x');

  axisButton.addEventListener('click', () => {
    if (axisButton.getAttribute('data-axis') === 'x') {
      axisButton.setAttribute('data-axis', 'y');
      axisButton.innerText = 'Y-AXIS';
      allShips.classList.add('vertical');
      ships.forEach((cell) => {
        cell.classList.add('vertical');
      });
    } else {
      axisButton.setAttribute('data-axis', 'x');
      axisButton.innerText = 'X-AXIS';
      allShips.classList.remove('vertical');
      ships.forEach((cell) => {
        cell.classList.remove('vertical');
      });
    }
  });
}

function clickTileToHit(e, boardToAttack, boardDOM, func, playerBoardDOM, isComputer = false) {
  const coordX = parseInt(e.target.getAttribute('data-x'), 10);
  const coordY = parseInt(e.target.getAttribute('data-y'), 10);
  if (boardToAttack.receiveAttack(coordX, coordY)) {
    e.target.classList.add('hit', 'explode');
    const index = boardToAttack.findTileIndex(coordX, coordY);
    if (boardToAttack.board[index].ship.sunk === true) {
      const allHitTiles = boardDOM.querySelectorAll('.cell.hit');
      allHitTiles.forEach((cell) => {
        const xHitIndex = parseInt(cell.getAttribute('data-x'), 10);
        const yHitIndex = parseInt(cell.getAttribute('data-y'), 10);
        const indexHitTile = boardToAttack.findTileIndex(xHitIndex, yHitIndex);

        if (boardToAttack.board[indexHitTile].ship.sunk === true) {
          cell.classList.remove('hit');
          cell.classList.add('sunk');
        }
      });
    }
    setTimeout(() => {
      e.target.classList.remove('explode');
    }, 550);
  } else {
    e.target.classList.add('missed');
  }

  if (isComputer) {
    const coordObj = computerPlayer.makeMove();
    const x = coordObj.x.toString();
    const y = coordObj.y.toString();
    const tileToAttack = playerBoardDOM.querySelector(`[data-x='${x}'][data-y='${y}']`);
    tileToAttack.dispatchEvent(new CustomEvent('hitPlayerTileEvent'));
    if (tileToAttack.classList.contains('hit')) {
      computerPlayer.updateLastTileHit();
    }
    if (tileToAttack.classList.contains('sunk')) {
      computerPlayer.updateLastTileSunk();
    }
  }

  e.target.removeEventListener('click', func);
}

function dragStart(e) {
  e.dataTransfer.setData('text', e.target.getAttribute('data-ship'));
  e.dataTransfer.effectAllowed = 'move';
  setTimeout(() => {
    e.target.classList.add('dragging');
  }, 0);
}

function dragEnd(e) {
  e.preventDefault();
  if (!e.target.classList.contains('.ship-cell')) {
    e.target.classList.remove('dragging');
    const hoveredCells = document.querySelectorAll('.dragHover');
    hoveredCells.forEach((cell) => {
      cell.classList.remove('dragHover');
    });
  }
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  const hoveredCells = document.querySelectorAll('.dragHover');
  const cellsWithBlockedImage = document.querySelectorAll('.blocked');
  cellsWithBlockedImage.forEach((cell) => {
    cell.classList.remove('blocked');
  });

  hoveredCells.forEach((cell) => {
    cell.classList.remove('dragHover');
  });

  const draggedCell = document.querySelector('.dragging');
  const shipSize = parseInt(draggedCell.getAttribute('data-ship'), 10);

  const coords = {
    x: e.target.getAttribute('data-x'),
    y: e.target.getAttribute('data-y'),
  };

  const axisButton = document.querySelector('#axis-btn');
  const axisToUse = axisButton.getAttribute('data-axis');

  let oppositeAxis;
  if (axisToUse === 'x') {
    oppositeAxis = 'y';
  } else {
    oppositeAxis = 'x';
  }

  const cellsInDirection = document.querySelectorAll(`[data-${oppositeAxis}='${coords[oppositeAxis]}']`);

  const cellsAfterCurrent = 9 - coords[axisToUse];
  const cellsBeforeCurrent = coords[axisToUse] - 1;
  const cellsToChange = [];

  if (cellsAfterCurrent >= shipSize - 1) {
    for (let index = 0; index < cellsInDirection.length; index++) {
      if (parseInt(cellsInDirection[index].getAttribute(`data-${axisToUse}`), 10) > coords[axisToUse]) {
        cellsToChange.push(cellsInDirection[index]);
      }
    }
  } else if (cellsBeforeCurrent >= shipSize - 1) {
    for (let index = 0; index < cellsInDirection.length; index++) {
      if (parseInt(cellsInDirection[index].getAttribute(`data-${axisToUse}`), 10) < coords[axisToUse]) {
        cellsToChange.push(cellsInDirection[index]);
      }
    }
    cellsToChange.reverse();
  }

  cellsToChange.splice(0 + shipSize - 1);

  let isCellUsed = false;
  let cellsToRemoveHover;

  e.target.classList.add('dragHover');

  for (let i = 0; i < cellsToChange.length; i++) {
    if (cellsToChange[i].classList.contains('used')) {
      isCellUsed = true;
      cellsToRemoveHover = document.querySelectorAll('.dragHover');
      break;
    } else {
      cellsToChange[i].classList.add('dragHover');
    }
  }

  if (isCellUsed) {
    cellsToRemoveHover.forEach((cell) => {
      cell.classList.remove('dragHover');
    });
    e.target.classList.add('blocked');
  }
}

function dragDrop(e) {
  e.preventDefault();
  const blockedCell = document.querySelector('.blocked');
  if (blockedCell) {
    blockedCell.classList.remove('blocked');
  } else {
    const shipID = e.dataTransfer.getData('text');
    const shipObj = new Ship(parseInt(shipID, 10));
    const shipDOMElement = document.querySelector(`[data-ship='${shipID}']`);
    const hoveredCells = document.querySelectorAll('.dragHover');
    const shipCell = shipDOMElement.firstChild;

    for (let i = 0; i < hoveredCells.length; i++) {
      hoveredCells[i].appendChild(shipCell.cloneNode(true));
      hoveredCells[i].classList.add('used');
      hoveredCells[i].removeEventListener('dragenter', dragEnter, false);
      hoveredCells[i].removeEventListener('dragover', dragOver, false);
      hoveredCells[i].removeEventListener('drop', dragDrop, false);
      const x = parseInt(hoveredCells[i].getAttribute('data-x'), 10);
      const y = parseInt(hoveredCells[i].getAttribute('data-y'), 10);
      board.place(shipObj, x, y);
    }

    shipDOMElement.remove();

    const remainingShips = document.querySelectorAll('.ship-container');
    if (remainingShips.length === 0) {
      const computerBoardDOM = createBoardDOM(true);
      const allShipsContainer = document.querySelector('.all-ships');
      setTimeout(() => {
        allShipsContainer.replaceWith(computerBoardDOM);
      }, 210);
      allShipsContainer.classList.add('fade-out');
    }
  }
}

function dragLeave(e) {
  if (e.target.id === 'board') {
    const hoveredCells = document.querySelectorAll('.dragHover');
    hoveredCells.forEach((cell) => {
      cell.classList.remove('dragHover');
    });
  }
}
