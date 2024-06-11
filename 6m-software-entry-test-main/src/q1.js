/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if x and y is not numeric.
    - print the swapped values in the console

    Task 2
    - invoke the function "swap"
*/

// Task 1: Add code here  

function swap(x, y){
    
    if(typeof x != 'number' || typeof y != 'number')
        return -1;    
    else {
        [x,y]=[y,x];        //use of destructing assignment
        console.log(`x is: ${x}, y is ${y}`);        
    }
}

// Task 2: Add code here

swap(11,223);
swap('1',2);
swap(234,'12');

module.exports = swap();
