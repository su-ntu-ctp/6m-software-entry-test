
/*
    Understand pass by reference with the following articles:
    - https://www.geeksforgeeks.org/pass-by-value-and-pass-by-reference-in-javascript/
    - https://medium.com/front-end-weekly/understanding-pass-by-value-and-pass-by-reference-in-javascript-8e2a0806b175


    Task 1: Modify the code below by using spread operator to clone dog object instead of assignment operator.
    
    Explanation:
    - Currently, console.log("dog", dog) in the last line prints {breed: "cat"}. 
    - When `const cat = dog;` is executed, the reference of dog object is passed to cat. Hence, both cat and dog object shares the same reference
    - This is why assigned a new value to cat.breed like this: `cat.breed = "cat"`, will also modify the value of `dog.breed`
    - The objective of this task is to not pass dog object as reference to cat object. 
    - We have to clone it. Spread operator is one of many ways to perform cloning in JavaScript.

    Note: Object and Array are passed by reference in JavaScript
*/

const dog = {
    breed: "dog"
}

const cat = dog; // Modify this line

cat.breed = "cat";

console.log("dog", dog); // If success, prints "dog { breed: 'dog' }"

