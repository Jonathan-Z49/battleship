import * as dragdrop from './dragdrop';

function createBoardDOM(Gameboard) {
  const boardDOM = document.querySelector('#board');
  boardDOM.addEventListener('dragleave', dragdrop.dragLeave);
  Gameboard.board.forEach((element) => {
    const gridCell = document.createElement('div');
    gridCell.classList.add('cell');
    gridCell.setAttribute('data-x', element.posX);
    gridCell.setAttribute('data-y', element.posY);
    gridCell.addEventListener('dragenter', dragdrop.dragEnter);
    gridCell.addEventListener('dragover', dragdrop.dragOver);
    gridCell.addEventListener('drop', dragdrop.dragDrop);
    boardDOM.appendChild(gridCell);
  });
}

function createShipGridCells() {
  const shipList = document.querySelectorAll('.ship-container');

  shipList.forEach((shipContainer) => {
    shipContainer.addEventListener('dragstart', dragdrop.dragStart);
    shipContainer.addEventListener('dragend', dragdrop.dragEnd);

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

export default function initialize(Gameboard) {
  createBoardDOM(Gameboard);
  createShipGridCells();
  setUpAxisButton();
}
