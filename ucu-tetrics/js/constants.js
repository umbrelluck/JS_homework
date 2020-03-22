const N = 7;
const M = 14;

const TYPE_COLORS = {
  "L": 'red',
  "J": 'orange',
  "T": 'purple',
  "I": 'green',
  "Z": 'yellow',
  "S": 'blue',
  "R": 'magenta'
}

const INITIAL_POSITIONS = {
  "L": [[9, 1], [8, 1], [8, 2], [8, 3]],
  "T": [[9, 2], [9, 3], [9, 4], [8, 3]],
  "I": [[9, 2], [8, 2], [7, 2]]
}


const lPosition = [[M - 1, 1], [M - 2, 1], [M - 2, 2], [M - 2, 3]];
const jPosition = [[M - 1, 3], [M - 2, 1], [M - 2, 2], [M - 2, 3]];
const tPosition = [[M - 1, 1], [M - 1, 2], [M - 1, 3], [M - 2, 2]];
const iPosition = [[M - 1, 2], [M - 2, 2], [M - 3, 2]];
const zPosition = [[M - 1, 1], [M - 1, 2], [M - 2, 2], [M - 2, 3]];
const sPosition = [[M - 1, 2], [M - 1, 3], [M - 2, 1], [M - 2, 2]];
const rPosition = [[M - 1, 1], [M - 1, 2], [M - 2, 1], [M - 2, 2]];

// Event keys
const DOWN = 40;
const LEFT = 39;
const RIGHT = 37;
const PAUSE = 32;