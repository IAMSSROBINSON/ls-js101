// Question 6
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

function capitalize() { // no parameter in place to receive the one sent
  return word[0].toUpperCase() + word.slice(1); // operates on global word and returns value to caller: 'Hello'
}

function exclaim() { // no parameter in place to receive the one sent
  return word += '!!!'; // works on global word 'hello' and reassigns value to hello!!!' then returns 'hello!!!' to caller
}

let word = 'hello'; // global string primtive
let capitalizedWord = capitalize(word); // stores return from function invocation, primitive passed in // stores primitive 'Hello'
let exclaimedWord = exclaim(capitalizedWord); // stores return from function invocation, primitive 'Hello' passed in // stores 'hello!!!'

console.log(word); // prints value of word: 'hello!!!''
console.log(capitalizedWord); // prints value of capitalizedWord 'Hello'
console.log(exclaimedWord); // prints value of exclaimedWord 'hello!!!'

/*

Line 17 should output the string: hello; It is declared an initialized on line 13 and the value of the variable is not changed thus it prints the value to which it has been assigned.

Line 18 prints the value of the argument passed in which is declared on line 14 and initialized to the return value of the capitalize function invocation. The function invocation passes in an argument but this reference is not received in the parameter of the function. Therefore the function makes use of the globally declared variable from line 13 because it is the variable with the same name and defined with global scope. The function returns the capitalized first character of the global variable and concatenates this to the characters of the global string variable from index character 1 to the end of the string as per the conditions of passing the value 1 into the .slice() method on the caller. The value output to the console is: Hello.

Line 19 should output the string: hello!!! The reference passed into the console.log method invocation references the value declared on line 15 and it it initialized to the return value of function invocation exclaim. The exclaim function invocation passes in an argument but it is not received by the function definition on line 9 as no parameters are defined. The function body therefore references the globally declared variable value from line 13 and the function uses the addtional assignment operator to concatenate the string '!!!' to its value and return it.

*/