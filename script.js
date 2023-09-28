// Problem 1: The missing number
// A marathon organizer numbered the runners in the marathon from 1 to N, where N is the number of runners taking part in the race.As each runner passes the finish line, their number is recorded in a list.It was found that only N - 1 numbers were recorded.That means that one of the runners did not pass the finish line.The organizer of the race wants to know which runner was missing from the list.

// You are given an array of the numbers of the N - 1 runners in the order in which they pass the finish line.Write an algorithm that will determine the missing number.

// For example, if there were 10 runners and the array[8, 3, 4, 1, 2, 9, 10, 5, 7] was given, the algorithm would return 6 as the missing number.

// The following assumptions hold true:

// N is an integer number in the range 1 to 100,000.That is, there could be as many as 100,000 runners in the race.
// The array contains distinct numbers.That is, no duplicates.After all, a runner would not pass the finish line twice.
// The missing number algorithm 1
// The following algorithm is written in pseudocode.Your task is to implement it in JavaScript.

// This algorithm works by iterating over all numbers from 1 to N.For each number, it searches the array for that number.If the number is found, the algorithm continues.If it is not found, the number that was not found is returned.

// function missing1
//   // accepts: A an array of N - 1 numbers

//   declare a variable N and set it equal to the length of A + 1
// for i = 1 to N do
//   declare variable found and set it to false
// declare variable j and set it to 0
// while found is false AND j is less than the length of A do
//   if i is equal to A[j] then
//         set found to true
//       increment j
// if found is false then
// return i

let testArrayOfRunners = [2, 4, 3, 5, 7, 8, 9, 10, 1] // # 6 i missing


// I want to loop through the array
// and check to see if each number is accounted for
function missing1(finshedRunnerArrray) {
  // I want to loop through finshedRunnerArrray using j as an index to look
  // and see if j is present at all in finishedRunnerArray
  // when it loops we don't want to determine if it was found
  // until the end of the loop on finishedRunnerArray

  for (let i = 1; i <= finshedRunnerArrray.length; i++) {
    let j = 0;
    let found = false;
    while (!found && j < finshedRunnerArrray.length) {
      if (i === finshedRunnerArrray[j]) {
        found = true;
      }
      j++;
    }
    if (found === false) {
      return i;
    }
  }
}

console.log(missing1(testArrayOfRunners));
