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

PLAY BY PLAY

primitive myWord declared and initialized to string: 'Hello'
new variable myOtherWord stores value returned from function call
function called and myWord passed in
received by function through parameter as word and is now local
console prints parameter value: 'Hello'
local parameter reassigned to value.toUpperCase() and returned to the caller
myOtherWord now stores: 'HELLO'
myWord prints: 'Hello'
myOtherWord prints: 'HELLO'

*/