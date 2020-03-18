const TYPE_COLORS = {
  "L": 'red',
  // "J": 'orange',
  "T": 'purple',
  // "I": 'green',
  // "Z": 'yellow',
  // "S": 'yellow',
  // "R": 'magenta'
}

const INITIAL_POSITIONS = {
  "L": [[9, 1], [8, 1], [8, 2], [8, 3]],
  "T": [[9, 2], [9, 3], [9, 4], [8, 3]],
  "I": [[9, 2], [8, 2], [7, 2]]
}


// const lPosition = [[9, 1], [8, 1], [8, 2], [8, 3]];
const lPosition = [[9, 0], [9, 1], [9, 2], [8, 0], [8, 1], [8, 2]];
const jPosition = [[9.3], [8, 1], [8, 2], [8, 3]];
// const tPosition = [[9, 1], [9, 2], [9, 3], [8, 2]];
const tPosition = [[9, 3], [9, 4]];
const iPosition = [[9, 2], [8, 2], [7, 2]];
const zPosition = [[9, 1], [9, 2], [8, 2], [8, 3]];
const sPosition = [[9, 2], [9, 3], [8, 1], [8, 2]];
const rPosition = [[9, 1], [9, 2], [8, 1], [8, 2]];

// Event keys
const DOWN = 40;
const LEFT = 39;
const RIGHT = 37;
const PAUSE = 32;