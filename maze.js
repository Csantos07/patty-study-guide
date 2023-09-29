// The maze is represented as an N x M matrix(in the above case, a 3x3 or a 5x7 array).
// The starting point is the top - left corner, and the exit is indicated by e.
// You can't go outside the boundaries of the maze. The maze has passages that are blocked,
// and you can't go through them.These blocked passages are indicated by *.
// Passing through a blocked cell as well as passing through a cell that you have already passed before
// are forbidden.


let maze_original = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

let maze_trouble_shooting_TESTING_STEP_RIGHT = [
  ['Starting Point', 'Stepped Right', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

let maze_trouble_shooting_TESTING_STEP_DOWN = [
  ['Starting Point', ' ', ' ', '*', ' ', ' ', ' '],
  ['Stepped Down', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

let maze_trouble_shooting_TESTING_STEP_LEFT = [
  ['Stepped Left', 'Start', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

let rightBoundCoordinates = [0, 6];


// ---------------------------------------------- FUNCTION DEFINITION HERE --------------------------------------------------//
// ----------------------------------------------                          --------------------------------------------------//

// For the above maze, a possible exit path can be RRDDLLDDRRRRRR.
// Write a function that accepts a two - dimensional array for the maze and an array with two values for the current position in the maze.For example, you may call the function like this: mazeSolver(maze, [0, 0]) to indicate that the starting position is at the top - left corner.
function mazeSolver(maze, origin = [0, 0]) {
  // console.log(returnContentInLocation(maze, origin));
  logStartingPoint(maze, origin);
  // logCurrentLocation(maze, origin);
  // stepRight(maze, origin);
  // stepDown(maze, origin);
  stepLeft(maze, origin);
}

// ---------------------------------------------- FUNCTION DEFINITION ENDS HERE --------------------------------------------------//
// ----------------------------------------------                          --------------------------------------------------//


// Utility functions
//


// ---------------------------------------------- STEPPING FUNCTIONS HERE --------------------------------------------------//
// ----------------------------------------------                          --------------------------------------------------//
//  ------ STEP RIGHT -----------
function stepRight(maze, currentLocationCoordinates = [0, 0]) {
  const currentRowCoordinate = currentLocationCoordinates[0];
  const currentColumnCoordinate = currentLocationCoordinates[1];
  let newColumnCoordinate = currentColumnCoordinate + 1;

  // logCurrentLocation(currentLocationCoordinates);
  // console.log(newColumnCoordinate);
  target = [currentRowCoordinate, newColumnCoordinate];
  console.log(`this is indicitive of the next step right: ${target}`);
  logCurrentLocation(maze, target);
}

//  ------ STEP DOWN -----------
function stepDown(maze, currentLocationCoordinates = [0, 0]) {
  const currentRowCoordinate = currentLocationCoordinates[0];
  const currentColumnCoordinate = currentLocationCoordinates[1];
  let newColumnCoordinate = currentRowCoordinate + 1;

  // logCurrentLocation(currentLocationCoordinates);
  // console.log(newColumnCoordinate);
  target = [currentRowCoordinate, newColumnCoordinate];
  console.log(`this is indicitive of the next step down: ${target}`);
  logCurrentLocation(maze, target);
}

//  ------ STEP LEFT -----------
function stepLeft(maze, currentLocationCoordinates = [0, 0]) {
  const currentRowCoordinate = currentLocationCoordinates[0];
  const currentColumnCoordinate = currentLocationCoordinates[1];
  let newColumnCoordinate = currentColumnCoordinate - 1;

  // logCurrentLocation(currentLocationCoordinates);
  // console.log(newColumnCoordinate);
  target = [currentRowCoordinate, newColumnCoordinate];
  console.log(`this is indicitive of the next step left: ${target}`);
  logCurrentLocation(maze, target);
}

// PRINTING STARTING POINT
function logStartingPoint(maze, origin = [0, 0]) {
  const startingRowCoordinate = origin[0];
  const startingColumnCoordinate = origin[1];

  target = [startingRowCoordinate, startingColumnCoordinate];
  console.log(`this is indicitive of the Starting Point Coordinate: ${target}`);
  console.log(`This is indicitive of a Starting Point Content: ${returnContentInLocation(maze, [startingRowCoordinate, startingColumnCoordinate])}`);
}

// PRINTING CURRENT LOCATION
function logCurrentLocation(maze, coordinates = [0, 0]) {
  const currentRowCoordinate = coordinates[0];
  const currentColumnCoordinate = coordinates[1];

  console.log(`This is indicitive of our Current Location: ${returnContentInLocation(maze, [currentRowCoordinate, currentColumnCoordinate])}`);
}

// PRINTING
function returnContentInLocation(maze, coordinates = [0, 0]) {
  return maze[coordinates[0]][coordinates[1]];
}





// ---------------------------------------------- FUNCTION CALL HERE --------------------------------------------------//
// ----------------------------------------------                          --------------------------------------------//
mazeSolver(maze_trouble_shooting_TESTING_STEP_LEFT, [0, 1]);
// ---------------------------------------------- FUNCTION CALL ENDS HERE ---------------------------------------------//
// ----------------------------------------------                          --------------------------------------------//
