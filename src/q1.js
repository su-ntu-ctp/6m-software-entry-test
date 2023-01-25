/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if x and y is not numeric.
    - print the swapped values in the console

    Task 2
    - invoke the function "swap"
*/

//function swap(x, y){
    // Task 1: Add code here
    
    def swap_values(x, y):
    if isinstance(x, (int, float)) and isinstance(y, (int, float)):
        x, y = y, x
        print("x =", x, "y =", y)
    else:
        return -1
//}

// Task 2: Add code here
x = 10
y = 20
swap_values(x, y);
x = "Hello"
y = "world"
swap_values(x, y)

module.exports = swap;
