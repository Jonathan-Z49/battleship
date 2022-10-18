export function createBoardDOM(Gameboard) {
  const boardDOM = document.querySelector('#board');
  boardDOM.addEventListener('dragleave', dragLeave);

  Gameboard.board.forEach((element) => {
    const gridCell = document.createElement('div');
    gridCell.classList.add('cell');
    gridCell.setAttribute('data-x', element.posX);
    gridCell.setAttribute('data-y', element.posY);
    gridCell.addEventListener('dragenter', dragEnter);
    gridCell.addEventListener('dragover', dragOver);
    gridCell.addEventListener('drop', dragDrop);
    boardDOM.appendChild(gridCell);
  });
}

export function createShipGridCells() {
  const shipList = document.querySelectorAll('.ship-container');

  shipList.forEach((shipContainer) => {
    shipContainer.addEventListener('dragstart', dragStart);
    shipContainer.addEventListener('dragend', dragEnd);

    const sizeOfShip = parseInt(shipContainer.getAttribute('data-ship'), 10);

    for (let index = 0; index < sizeOfShip; index++) {
      const shipCell = document.createElement('div');
      shipCell.classList.add('ship-cell');
      shipContainer.appendChild(shipCell);
    }
  });
}

export function setUpAxisButton() {
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
  }
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  console.log(e.dataTransfer.getData('text'));
  const hoveredCells = document.querySelectorAll('.dragHover');

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

  console.log(coords[axisToUse]);

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

  for (let i = 0; i < shipSize - 1; i++) {
    console.log(cellsToChange[i]);
    cellsToChange[i].classList.add('dragHover');
  }

  e.target.classList.add('dragHover');
}

function dragDrop(e) {
  e.preventDefault();
  console.log(e);
  const shipID = e.dataTransfer.getData('text');
  const shipDOMElement = document.querySelector(`[data-ship='${shipID}']`);
}

function dragLeave(e) {
  if (e.target.id === 'board') {
    const hoveredCells = document.querySelectorAll('.dragHover');
    hoveredCells.forEach((cell) => {
      cell.classList.remove('dragHover');
    });
  }
}
