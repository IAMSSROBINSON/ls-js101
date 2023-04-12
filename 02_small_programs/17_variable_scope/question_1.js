// What will the following code log to the console and why? 
// Don't run it until you have tried to answer.

let num = 5;

function myFunc() {
  num = 10;
}

myFunc();
console.log(num); // 10

/*

This will log 10
the reason is because num has global scope
At the of function call it accesses the global scope of num
num is then reassigned to value: 10.
num is referenced in the console.log
the value that was reassigned: 10 is printed

*/
