var playground = createPlayground();

console.log(playground);

// will add object positions to the emply playground array
function renderPositions() {
  objects.forEach(object => {
    object.position.forEach(([rowIndex, cellIndex]) => {
      playground[rowIndex][cellIndex] = TYPE_COLORS[object.type]
    })
  });
}

function moveDown(obj) {
  console.log('moving down')
  let currentObject = getCurrentObject();
  console.log(`Here is my falling Object ${currentObject}`);
  if (currentObject == undefined) {
    createObj();
    return;
  }
  console.log(objects)
  if (checkDown(currentObject)) {
    currentObject.position.forEach(position => position[0] -= 1);
    console.log(objects)
    playground = createPlayground();
    renderPlayground()
  }
  setMovement(currentObject, playground);
}

function moveRight(obj) {
  console.log('moving right')
  let currentObject = getCurrentObject();
  console.log(currentObject);
  if (currentObject == undefined) {
    createObj();
    return;
  }
  if (checkRight(currentObject)) {
    console.log('moving right IN IF')
    currentObject.position.forEach(position => position[1] += 1);
    playground = createPlayground();
    renderPlayground();
  }
  setMovement(currentObject, playground);
}

function moveLeft(obj) {
  console.log('moving left')
  let currentObject = getCurrentObject();
  console.log(`${currentObject.position}`);
  if (currentObject == undefined) {
    createObj();
    return;
  }

  if (checkLeft(currentObject)) {
    currentObject.position.forEach(position => position[1] -= 1);
    playground = createPlayground();
    renderPlayground();
  }
  setMovement(currentObject, playground);
}

function pauseGame() {
  if (!paused) {
    console.log('pausing the game');
    clearInterval(gameInterval);
  }
  else {
    console.log("resuming the game");
    gameInterval = setInterval(() => { moveDown(); }, 2000);
  }
  paused = !paused;
}

function gameOver() {
  console.log("Game over");
  clearInterval(gameInterval);
  gameEnd = true;
}

function createObj() {
  console.log("creating...");
  var objType = randomObjType();
  var posit = []
  switch (objType) {
    case "L":
      posit = JSON.parse(JSON.stringify(lPosition));
      break;
    case "J":
      posit = JSON.parse(JSON.stringify(jPosition));;
      break;
    case "T":
      posit = JSON.parse(JSON.stringify(tPosition));
      break;
    case "I":
      posit = JSON.parse(JSON.stringify(iPosition));
      break;
    case "Z":
      posit = JSON.parse(JSON.stringify(zPosition));
      break;
    case "S":
      posit = JSON.parse(JSON.stringify(sPosition));
      break;
    case "R":
      posit = JSON.parse(JSON.stringify(rPosition));
      break;
    default:
      break;
  }

  if (!checkFreeSpace(posit, playground)) {
    gameOver();
    console.log(playground);
    return;
  }
  objects.push({ type: objType, state: 'falling', position: posit });
  // console.log(`Objects ${objects}`);
  console.log(`Adding ${objType}`);
  playground = createPlayground();
  renderPlayground();
}


renderPlayground();

// interval 2 seconds
var gameInterval = setInterval(() => {
  moveDown();
}, 2000);