// Question 5
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

function changeMyWords(words) {
  console.log(words);
  words = ['Hi', 'Goodbye'];
}

let myWords = ['Hello', 'Goodbye'];
changeMyWords(myWords);
console.log(myWords);

/*

PLAY BY PLAY

variable myWords declared and initialized to array object
function called and myWords address passed in so original can be worked on
array address received into the function as char *pointer[]
console prints =>arrayValues: ['Hello', 'Goodbye']
reassignment non-destructive, argument reassigned to point to new address values
console prints myWord value at original address: ['Hello', 'Goodbye']


*/