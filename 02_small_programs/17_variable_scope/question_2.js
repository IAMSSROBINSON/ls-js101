// Question 2
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

let num = 5;

function myFunc() {
  console.log(num); // 5
  num = 10;
}

myFunc();
console.log(num); // 10

/*

let num declares variable with global scope
myFunc is called and accesses the global scope when printing value of num: 5
the global num is then reassigned to value: 1
the final console.log then references the value of global num and prints: 10


*/