// Question 2
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

function changeMyWord(word) {
  console.log(word);
  word = word.toUpperCase();
  return word;
}

let myWord = 'Hello';
myWord = changeMyWord(myWord);
console.log(myWord);


/*

OUTPUT:
Hello
HELLO

WHY:
On the final line of code the console.log method invocation passes in a reference to a variable declared two lines prior, which is initialized to a primitive string value: 'Hello'.

On the penultimate line of code however the variable value is reassigned to the return value of invoking the function: changeMyWord and passing in the current value of the variable as a reference. 

The function is declared on the first line of code and the argument is passed by value and received and initialized as a local parameter variable. 

On the first line of the function body a console.log method is invoked and the local variable is reference to output its value to the console: 'Hello'.

The second line of the function body references the local variable and reassigns its value to the return of invoking the .toUpperCase() method on it thereby transforming all characters of the character string array to be uppercase. The last line of the function body returns this value to the caller on the penultimate line of code and it is this value that is reassigned as the value of the variable declared above it.

The console.log method invocation on the final line of code therefore prints the uppercase string value to the console: 'HELLO'.

*/