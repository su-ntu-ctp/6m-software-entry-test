/*
    Task 1: 
    - Declare an array that are going to be used to store patient's name.

    Task 2: 
    - Add code to add patient's name into the array declared in task 1.

    Task 3: 
    - Implement listPatient() function to print all patient's name stored in the array
*/


// Task 1: Add code here
let patient_names = [];

function addPatient(patientName){
    // Task 2: Add code here
     patient_names.push(patientName);
   
}

// Task 3: Add code here
let patient_names = [];


function addPatient(patientName) {
    patient_names.push(patientName);
}

function listPatients() {
    for (let i = 0; i < patient_names.length; i++) {
        console.log(patient_names[i]);
    }
}


addPatient("John");
addPatient("Mary");
addPatient("Mark");

listPatient(); // This should list ["John", "Mary", "Mark"]
