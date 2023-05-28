// What is the output of the following code?

let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8);

/*

OUTPUT: 
34

WHY:

The console.log() method invocation references the value of the variable declared and initialized on the first line of code: 42. The subtraction arithmetic operator is used to subtract the number 8 from this value returning the value of the expression to the console.log method to print. 42 - 8 = 34 and thus this is logged to the console. The value of the variable is never reassigned as primitive values are passed by value not reference meaning their values are not mutated within functions.

*/