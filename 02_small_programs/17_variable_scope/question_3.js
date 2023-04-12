// Question 3
// What will the following code log to the console and why? 
// Don't run it until you have tried to answer.

let num = 5;

function myFunc() {
  let num = 10;
}

myFunc();
console.log(num); // 5


/*

num is declared and initialized with value: 5
myFunc is called
new variable let num is declared and initialized with value: 10 with local scope
final console.log accesses global num and prints value: 5


*/