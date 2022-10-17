export function createBoardDOM(Gameboard) {
  const boardDOM = document.querySelector('#board');
  boardDOM.addEventListener('dragleave', dragLeave);

  Gameboard.board.forEach((element) => {
    const gridCell = document.createElement('div');
    gridCell.classList.add('cell');
    gridCell.setAttribute('data-x', element.posX);
    gridCell.setAttribute('data-y', element.posY);
    gridCell.addEventListener('dragenter', dragEnter);
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
      shipCell.addEventListener('dragstart', dragStart);
      shipCell.addEventListener('dragend', dragEnd);
      shipContainer.appendChild(shipCell);
    }
  });
}

function dragStart(e) {
  setTimeout(() => {
    e.target.classList.add('dragging');
  }, 0);
}

function dragEnd(e) {
  e.preventDefault();
  if (!e.target.classList.contains('.ship-cell')) {
    e.target.classList.remove('dragging');
  }
  console.log(e);
}

function dragEnter(e) {
  e.preventDefault();

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

  const cellsInDirection = document.querySelectorAll(`[data-y='${coords.y}']`);
  const cellsAfterCurrent = 9 - coords.x;
  const cellsBeforeCurrent = coords.x - 1;
  const cellsToChange = [];

  if (cellsAfterCurrent >= shipSize - 1) {
    for (let index = 0; index < cellsInDirection.length; index++) {
      if (parseInt(cellsInDirection[index].getAttribute('data-x'), 10) > coords.x) {
        cellsToChange.push(cellsInDirection[index]);
      }
    }
  } else if (cellsBeforeCurrent >= shipSize - 1) {
    for (let index = 0; index < cellsInDirection.length; index++) {
      if (parseInt(cellsInDirection[index].getAttribute('data-x'), 10) < coords.x) {
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
  const shipcont = document.querySelector('.dragging');
  const { childNodes } = shipcont;
  // const shipSize = shipcont.getAttribute('data-ship');
  // const currentPosition = parseInt(e.target.getAttribute('data-coord').slice(-1), 10);
  // console.log(shipSize, currentPosition);
  // console.log(e.target.nextSibling);
}

function dragLeave(e) {
  if (e.target.id === 'board') {
    const hoveredCells = document.querySelectorAll('.dragHover');
    hoveredCells.forEach((cell) => {
      cell.classList.remove('dragHover');
    });
  }
}
