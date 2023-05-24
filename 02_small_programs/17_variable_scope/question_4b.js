// Question 4
// What will the following code log to the console and why? 
// Don't run it until you have tried to answer.

let num = 5;

function myFunc() {
  console.log(num);
  let num = 10;
}

myFunc();
console.log(num);

/*

OUTPUT:
ReferenceError: Cannot access 'num' before initialization.

WHY:

The function body on the third line of code invokes the console.log() method and passes a reference to a variable: num as an argument - attempting to prints its value to the console.

There is a global variable with that name declared outside of the function however within the function on the second line of the function body a new variable declaration occurs with the same name as the global variable. The function therefore performs shadowing and only makes reference to the locally declared variable below the console.log() method invocation. The reason an error is produce however is because you cannot use access a variables value before it is declared in this way.

*/