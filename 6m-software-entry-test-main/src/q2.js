/*
    Task 1: 
    - Declare an array that are going to be used to store patient's name.    

    Task 2: 
    - Add code to add patient's name into the array declared in task 1.

    Task 3: 
    - Implement listPatient() function to print all patient's name stored in the array
*/


// Task 1: Add code here
let patientNames = [];


function addPatient(patientName){
    
    // Task 2: Add code here
    patientNames.push(patientName);   
}

// Task 3: Add code here

addPatient("John");
addPatient("Mary");
addPatient("Mark");

function listPatient() { 
   console.log(patientNames);
}

listPatient(); // This should list ["John", "Mary", "Mark"]
