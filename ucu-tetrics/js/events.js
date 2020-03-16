document.addEventListener("keydown", event => {
  switch (event.keyCode) {
    case DOWN:
      if (!paused)
        moveDown();
      break;
    case LEFT:
      if (!paused)
        moveRight();
      break;
    case RIGHT:
      if (!paused)
        moveLeft();
      break;
    case PAUSE:
      pauseGame();
      break;
    default:
      break;
  }
});