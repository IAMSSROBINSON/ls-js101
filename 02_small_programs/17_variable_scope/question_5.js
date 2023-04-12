// Question 5
// What will the following code log to the console and why? 
// Don't run it until you have tried to answer.

let num = 5;

function myFunc(num) {
  num = 10;
}

myFunc();
console.log(num); // 5

/*

let num declared, global scope
function called
local num parameter assigned to 10
console.log accesses the global num and prints 5

*/