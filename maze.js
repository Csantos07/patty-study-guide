// The maze is represented as an N x M matrix(in the above case, a 3x3 or a 5x7 array).
// The starting point is the top - left corner, and the exit is indicated by e.
// You can't go outside the boundaries of the maze. The maze has passages that are blocked,
// and you can't go through them.These blocked passages are indicated by *.
// Passing through a blocked cell as well as passing through a cell that you have already passed before
// are forbidden.


let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

// For the above maze, a possible exit path can be RRDDLLDDRRRRRR.
// Write a function that accepts a two - dimensional array for the maze and an array with two values for the current position in the maze.For example, you may call the function like this: mazeSolver(maze, [0, 0]) to indicate that the starting position is at the top - left corner.


//Check which direction can we go from here
// Refactor later
function mazeSolver(maze, index = [0, 0]) {
  let row = index[0];
  let column = index[1];
  let currentStepInQuestion = "";
  let currentRow = maze[row];
  let rightBound = currentRow.length;

  let arrayOfSteps = [];

  //right first
  // ------------------------------------------
  // currentStepInQuestion = maze[row][column + 1]
  for (let i = 0; i < row.length; i++) {
    
  }


  if (column + 1 >= rightBound) {
    console.log("we can't continue")
  } else {
    if (currentStepInQuestion === " ") {
      console.log("Yayyyy");
      arrayOfSteps.push("Right");
      column += 1;
    } else if (currentStepInQuestion === "*") {
      console.log("Can't Go Here :( ");
    }
  }




  // down
  // left
  // up
}

mazeSolver(maze);
