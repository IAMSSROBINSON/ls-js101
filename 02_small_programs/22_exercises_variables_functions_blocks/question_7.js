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


*/