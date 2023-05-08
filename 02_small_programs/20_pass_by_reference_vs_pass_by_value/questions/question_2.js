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

PLAY BY PLAY

primitive value initialized and assigned to newly declared variable myWord
myWord reassigned to store the value returned from function call
function called and myWord passed in as argument
function received in parameter as word and becomes new local variable
'Hello' logged to the console
local variable word reassigned to word.toUpperCase(); and returned to caller
caller return is stored in myWord and printed to the console: 'HELLO'

*/