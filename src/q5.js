
/*
    Task 1:
    - Link the file `external.js` to this file.
    - To test if the linking works, open q5-output.html in the browser and it should show "Hello World!"
*/

// Task 1: Add code here
<!DOCTYPE html>
<html>
<head>
    <title>Q5 Output</title>
    <script src="external.js"></script>
</head>
<body>
    <div id="test"></div>
</body>
</html>
// Do not change the code below
document.querySelector("#test").innerHTML = print();
