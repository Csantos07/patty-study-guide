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
function mazeSolver() {

}
