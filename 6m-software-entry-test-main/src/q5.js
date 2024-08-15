
/*
    Task 1:
    - Link the file `external.js` to this file.
    - To test if the linking works, open q5-output.html in the browser and it should show "Hello World!"
*/

// Task 1: Add code here
import randomName from "./external.js";         //reference: https://www.scaler.com/topics/javascript/import-js-file-in-js/
const print = randomName;

// Do not change the code below
document.querySelector("#test").innerHTML = print();
