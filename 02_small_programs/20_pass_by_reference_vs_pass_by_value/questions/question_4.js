// Question 4
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

function changeMyWords(words) {
  console.log(words);
  words[0] = 'Hi';
}

let myWords = ['Hello', 'Goodbye'];
changeMyWords(myWords);
console.log(myWords);

/*

PLAY BY PLAY

myWords variable declared and initialized to point to array
function called and myWords address passed into function to word with original
array received into the function as char *pointerArray[]
console prints array values: ['Hello', 'Goodbye']
first element in array reassigned to: 'Hi'
the array is a pointer array so this works on the original directly
console prints: ['Hi', 'Goodbye']

*/