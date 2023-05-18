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
    // Task 1: Add code here
  if(( (typeof x) == ('number'))& ( (typeof y) == ('number'))){
   x = x + y;
   y = x - y;
   x = x - y;
   document.write("After Swap<br>");
document.write("x = " + x+"<br>" ); 
document.write("y = " + y+"<br>" ); 
        return(1);
}else{
    return(-1);
}
}

// Task 2: Add code here
var x = 'a';
var y = 2;
var z = 0;
document.write("Before Swap<br>");
document.write("x = " + x+"<br>" ); 
document.write("y = " + y+"<br>" ); 
z = swap(x , y);
if(z>0){
document.write("Completed Succesfully<br>" );
}else{
document.write("Variables are not Numeric<br>" );
}
module.exports = swap;
