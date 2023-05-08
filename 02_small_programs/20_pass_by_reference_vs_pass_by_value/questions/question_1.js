// What will the following code log to the console and why?
// Don't run it until you have tried to answer.


function changeMyWord(word) {
  console.log(word);
  word = word.toUpperCase();
}

let myWord = 'Hello';
changeMyWord(myWord);
console.log(myWord);

/*

PLAY BY PLAY

let myWord declared and initialized to primitive string value: 'Hello'
changeMyWord function called and myWord argument passed in
parameter received argument
copy of variable printed to console: 'Hello'
local variable reassigned value to = myWord.toUpperCase()
myWord is a primitive so .toUpperCase() only affects the locally scoped variable
variable outside function is unaffected and 'Hello' logged to the console

*/