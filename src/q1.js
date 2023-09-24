/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if x and y is not numeric.
    - print the swapped values in the console

    Task 2
    - invoke the function "swap"
*/

function swap(x, y){
    if (typeof x !== 'number' || typeof y !== 'number') {
        console.log("X = ", x ,"and Y =", y ," must be both numeric.");
		return -1;
	}
	x = x+y;
	y = x-y;
	x = x-y;
	
	 console.log("Swapped values: x =", x, "y =", y);

     return [x, y];
}

const result = swap(100,"A");

if (result !== -1) {
    console.log("Swap successful, result: ", result);
} else {
    console.log("One or both values are not numeric.");
}

module.exports = swap;
