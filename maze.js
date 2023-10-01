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
  ['Stepped Left', 'Starting Point', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

let maze_trouble_shooting_TESTING_STEP_UP = [
  [' ', ' ', 'Stepped Up ', '*', ' ', ' ', ' '],
  ['*', 'Stepped Left', 'Starting Point', 'Stepped Right', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];


// ---------------------------------------------- FUNCTION DEFINITION HERE --------------------------------------------------//
// ----------------------------------------------                          --------------------------------------------------//

// For the above maze, a possible exit path can be RRDDLLDDRRRRRR.
// Write a function that accepts a two - dimensional array for the maze and an array with two values for the current position in the maze.For example, you may call the function like this: mazeSolver(maze, [0, 0]) to indicate that the starting position is at the top - left corner.

// [0, 0] ---> [row, column]
function mazeSolver(maze, origin = [0, 0]) {
  let stillLost = true;
  let currentLocation = origin;
  let iterator = 0;                                       // Shouldn't need this in final implementation
  const locationsVisited = [];
  const directions = [];

  while (stillLost && iterator < 6) {
    const newLocation = stepRight(maze, currentLocation); // If not able to step right step down
    // Step right should bee looking to see if it is ineed a valid step
    // If it is an asterisk go down
    // If it is another asterisk go left
    // If another go up

    // Should create a function to find if the content is an asterisk...
    // We should already have something to find what the content is

    currentLocation = newLocation;
    locationsVisited.push(currentLocation);

    iterator++;
  }

  console.log(locationsVisited);
  console.log(directions);


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

    target = [currentRowCoordinate, newColumnCoordinate];
    console.log(`Return Location Contents: ${returnContentInLocation(maze, target)}\n`)
    directions.push("right");

    return target;
  }

  //  ------ STEP DOWNWARD -----------
  function stepDown(maze, currentLocationCoordinates = [0, 0]) {
    const currentRowCoordinate = currentLocationCoordinates[0];
    const currentColumnCoordinate = currentLocationCoordinates[1];
    let newRowCoordinate = currentRowCoordinate + 1;

    target = [newRowCoordinate, currentColumnCoordinate];
    console.log(`this is indicitive of the next step down Coordinates: ${target}`);
    logCurrentLocation(maze, target);
  }

  //  ------ STEP LEFT -----------
  function stepLeft(maze, currentLocationCoordinates = [0, 1]) {
    const currentRowCoordinate = currentLocationCoordinates[0];
    const currentColumnCoordinate = currentLocationCoordinates[1];
    let newColumnCoordinate = currentColumnCoordinate - 1;

    target = [currentRowCoordinate, newColumnCoordinate];
    console.log(`this is indicitive of the next step left Coordinates: ${target}`);
    logCurrentLocation(maze, target);
  }

  //  ------ STEP UPWARD -----------
  function stepUp(maze, currentLocationCoordinates = [1, 2]) {
    const currentRowCoordinate = currentLocationCoordinates[0];
    const currentColumnCoordinate = currentLocationCoordinates[1];
    let newRowCoordinate = currentRowCoordinate - 1;

    target = [newRowCoordinate, currentColumnCoordinate];
    console.log(`this is indicitive of the next step up Coordinates: ${target}`);
    logCurrentLocation(maze, target);
  }

  // I believe this returns the locations contents
  // We can use this for the asterisk
  function returnContentInLocation(maze, coordinates = [0, 0]) {
    return maze[coordinates[0]][coordinates[1]];
  }

  // Would we want something similar to find the coordinates?



} // ----------------------------------------- END OF MAZE SOLVER -----------------------------------------------------------//

// ---------------------------------------------- PRINTING FUNCTIONS HERE --------------------------------------------------//
// ----------------------------------------------                          --------------------------------------------------//
// PRINTING STARTING POINT
// Logs the starting point coordinate and contents
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

  target = [currentRowCoordinate, currentColumnCoordinate];
  console.log(`this is indicitive of the Current Point Coordinate: ${target}`);
  console.log(`This is indicitive of our Current Point Content: ${returnContentInLocation(maze, [currentRowCoordinate, currentColumnCoordinate])}`);
}

// PRINTING
function returnContentInLocation(maze, coordinates = [0, 0]) {
  return maze[coordinates[0]][coordinates[1]];
}





// ---------------------------------------------- FUNCTION CALL HERE --------------------------------------------------//
// ----------------------------------------------                          --------------------------------------------//
mazeSolver(maze_trouble_shooting_TESTING_STEP_RIGHT, [0, 0]);
// ---------------------------------------------- FUNCTION CALL ENDS HERE ---------------------------------------------//
// ----------------------------------------------                          --------------------------------------------//

