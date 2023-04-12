// Question 4
// What will the following code log to the console and why? 
// Don't run it until you have tried to answer.

let num = 5;

function myFunc() {
  console.log(num);
  let num = 10;
}

myFunc();
console.log(num); // ReferenceError: Cannot access 'num' before initialization

/*

let num declares and initializes variable to value: 5
myFunc is called
console.log looks for num but shadowing occurs as a new variable with
the same name will be declared after the console.log however the console
cannot print this value as it declare after so an error will occur.

ran program and error was printed:
ReferenceError: Cannot access 'num' before initialization

*/