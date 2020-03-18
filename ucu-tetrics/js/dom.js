// render DOM nodes according to the playground definition
function renderPlayground() {
  renderPositions();
  let playgroundNode = document.getElementById('playground')
  playgroundNode.innerHTML = '';

  for (let rowIndex = playground.length - 1; rowIndex >= 0; rowIndex--) {
    let rowNode = createRow(rowIndex)
    for (let cellIndex = 0; cellIndex < playground[rowIndex].length; cellIndex++) {
      rowNode.appendChild(createCell(cellIndex, playground[rowIndex][cellIndex]))
    }
    playgroundNode.appendChild(rowNode);
  }
}

// Creates <div class="row" id="row-9">
function createRow(rowIndex) {
  let rowNode = document.createElement('div');
  rowNode.setAttribute('id', `row-${rowIndex}`);
  rowNode.setAttribute('class', 'row');
  return rowNode;
}

// Creates <div class="cell cell-1">1</div>
function createCell(cellIndex, color) {
  let cellNode = document.createElement('div');
  cellNode.setAttribute('class', `cell cell-${cellIndex} ${color}`);
  return cellNode;
}

function deleteLines() {
  console.log("In delete");
  toDelete = [];
  flag = true;
  i = 0; imax = 10;
  nLines = 0
  while (i < imax) {
    flag = checkLine(i);
    if (flag) {
      nLines ++;
      console.log("So....");
      console.log(JSON.parse(JSON.stringify(playground)));
    }
    toDelete.push(flag ? -1 : nLines);
    i++;
  }
  moveAllObjects(toDelete)
}