// Question 7
// What will the following code log to the console and why? 
// Don't run it until you have tried to answer.

let num = 1;

while (num < 3) {
  let num = 5;
  num += 1;
}

console.log(num);

/*

let num = 1, global scope
while loop uses global num to enter loop as condition is true
local block scope established
new variable declared and value assigned: 5
num value with local scope increase by +1
while loop condition still true but global num value is the same
infinite loop created and nothing ever prints to the console, loop never broken

*/