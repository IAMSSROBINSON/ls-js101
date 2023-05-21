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

