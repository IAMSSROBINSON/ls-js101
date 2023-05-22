// Question 3
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

function changeMyWord(word) {
  console.log(word);
  word = word.toUpperCase();
  return word;
}

let myWord = 'Hello';
let myOtherWord = changeMyWord(myWord);
console.log(myWord);
console.log(myOtherWord);

/*

OUTPUT:
Hello
Hello
HELLO

WHY:
The first console.log method invocation passes in a reference to a globally declared variable two line higher which is initialized to a primitive string value: 'Hello'. One line below that a new global variable is declated and initialized to the return value of a function invocation passing the value of the first variable in as an argument.

On the first line of code this function is declared and the argument is received by value and initialized to a local parameter variable. 

The first line of code inside the function body prints this value to the console: 'Hello'.
The second line of code inside the function body reassigns the value of the local variable to the return value of invoking the .toUpperCase() method on it: 'HELLO'. This value is returned to the caller and saved in the variable: myOtherWord. 

The first console.log method invocation therefore outputs the value of the variable myWord to be: 'Hello' and the second console.log method invocation prints the value of the variable myOtherWord to be: 'HELLO'

*/