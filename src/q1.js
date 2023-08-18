/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if x and y is not numeric.
    - print the swapped values in the console

    Task 2
    - invoke the function "swap"
*/

swap = function (x, y) {
  if (isNaN(x) || isNaN(y) == true) {
    return -1;
  } else {
    // Task 1: Add code here
    swapPosition = [y, x];
    return swapPosition;
  }
};

// Task 2: Add code here
swap(100, 800);

swap("Tiger", 800);

swap(100, "Elephant");

module.exports = swap;
