/*
    Task 1:
    - Add a new property "breed" with the value "Poodle"

    Task 2: 
    - Implement a for-in to loop through the keys in "dog" object and print it with console.log()
*/




const dog = {
    petName:"Bobby"
}

// Task 1: Add code here
// Task 1: Add a new property "breed" with the value "Poodle"
dog.breed = "Poodle";
// Task 2: Add code here
console.log("Keys in the 'dog' object:");
for (let key in dog) {
    console.log(key);
}
