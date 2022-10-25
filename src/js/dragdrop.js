export function dragStart(e) {
  e.dataTransfer.setData('text', e.target.getAttribute('data-ship'));
  e.dataTransfer.effectAllowed = 'move';
  setTimeout(() => {
    e.target.classList.add('dragging');
  }, 0);
}

export function dragEnd(e) {
  e.preventDefault();
  if (!e.target.classList.contains('.ship-cell')) {
    e.target.classList.remove('dragging');
    const hoveredCells = document.querySelectorAll('.dragHover');
    hoveredCells.forEach((cell) => {
      cell.classList.remove('dragHover');
    });
  }
}

export function dragOver(e) {
  e.preventDefault();
}

export function dragEnter(e) {
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

export function dragDrop(e) {
  e.preventDefault();
  const blockedCell = document.querySelector('.blocked');
  if (blockedCell) {
    console.log('drop');
    blockedCell.classList.remove('blocked');
  }
  const shipID = e.dataTransfer.getData('text');
  const shipDOMElement = document.querySelector(`[data-ship='${shipID}']`);
  const hoveredCells = document.querySelectorAll('.dragHover');
  const shipCell = shipDOMElement.firstChild;

  for (let i = 0; i < hoveredCells.length; i++) {
    hoveredCells[i].appendChild(shipCell.cloneNode(true));
    hoveredCells[i].classList.add('used');
    hoveredCells[i].removeEventListener('dragenter', dragEnter, false);
    hoveredCells[i].removeEventListener('dragover', dragOver, false);
    hoveredCells[i].removeEventListener('drop', dragDrop, false);
  }

  shipDOMElement.remove();
}

export function dragLeave(e) {
  if (e.target.id === 'board') {
    const hoveredCells = document.querySelectorAll('.dragHover');
    hoveredCells.forEach((cell) => {
      cell.classList.remove('dragHover');
    });
  }
}
