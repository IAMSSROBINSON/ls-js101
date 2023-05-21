// Question 7
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

function capitalize(word) { // receives primitive 'hello'
  return word[0].toUpperCase() + word.slice(1); // returns 'Hello'
}

function exclaim(word) { // 'Hello' received, local declared, shadowing occurs
  return word += '!!!'; // reassigns local variable to be: 'hello!!!' and returns that value
}

let word = 'hello'; // global declared, initialized to primitive string
let capitalizedWord = capitalize(word); // stores return, function invocation and primitive passed in // stores 'Hello'
let exclaimedWord = exclaim(capitalizedWord); // stores return, function invoked, 'Hello' passed in // stores 'hello!!!'

console.log(word); // prints value of word: 'hello'
console.log(capitalizedWord); // prints value of capitalizedWord: 'Hello'
console.log(exclaimedWord); // prints value of exclaimedWord: 'hello!!!'


/*

This code should output:

hello
Hello
Hello!!!

The console.log method invocation on line 17 should print string value: hello from the argument value passed in. The reason is because on line 13 a global variable is declared with the same name and initialize to a primitive string with the same value. 

The console.log method invocation on line 18 should print the string value: Hello. The reason is because the method invocation invoked passes in a reference to a variable declared on line 14 and initialized to the return value of invoking the capitalize function and passing the value of the variable declared on line 13 as its arguement. On line 5 a function declaration is defined and the argument is received and initialized to a local parameter variable. The function uses bracket notation on the local variable value and invokes the .toUpperCase() method to turn it into an uppercase character. The + operator concatenates that value to the return of the .slice method on the local variable value with the number 1 passed in as an argument instructing the method to return the value of the variable starting at index postion 1 and ending at the end of the string by default of not specifying a second arguement to the uppercase value and returning the result to the caller.

The console.log method invocation on line 19 should print the string value: Hello!!!. The method prints the value of the reference passed in and this reference is declared on line 15 and initialized to the value of the return from the function exclaim invocation passing in the value of the variable declared and initialized on line 14 which was previously established. The exclaim function when invoked returns the value of the argument received and uses the additional assignment operator to concatenate the string value '!!!' to its value and this is the value output on line 19.

*/