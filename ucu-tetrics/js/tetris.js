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
  // 1. get current object - done
  let currentObject = getCurrentObject();
  if (currentObject == undefined) {
    gameOver();
    return;
  }

  // 2. re-define objects - done
  setMovement(currentObject, playground);
  console.log(objects)
  if (checkDown(currentObject, playground))
    currentObject.position.forEach(position => (position[0] > 0 && (position[0] -= 1)));
  console.log(objects)

  // 3. re-define clear playground
  playground = createPlayground();

  // 4. re-renderPositions
  // 5. re-renderPlayground
  renderPlayground()
}

function moveRight(obj) {
  console.log('moving right')
  let currentObject = getCurrentObject();
  console.log(currentObject);
  if (checkRight(currentObject, playground)) {
    console.log('moving right')
    currentObject.position.forEach(position => (position[1] < 4 && (position[1] += 1)));
  }
  setMovement(currentObject, playground);
  playground = createPlayground();
  renderPlayground();
}

function moveLeft(obj) {
  console.log('moving left')
  let currentObject = getCurrentObject();
  console.log(currentObject);

  if (checkLeft(currentObject, playground))
    currentObject.position.forEach(position => (position[1] > 0 && (position[1] -= 1)));
  setMovement(currentObject, playground);
  playground = createPlayground();
  renderPlayground();
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
  gameEnd=true;
}

// function createObj() {}

// Events
// 1. move to bottom
// 2. move right
// 3. move left
// 4. pause
// 5. game over
// 6. (re)render playground

renderPlayground();

// interval 2 seconds
var gameInterval = setInterval(() => {
  moveDown();
}, 2000);