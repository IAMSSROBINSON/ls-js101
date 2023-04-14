// Question 3
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

let myWords = ['Hello', 'Goodbye'];
let myOtherWords = myWords;
myWords[0] = 'Hi';

console.log(myWords);
console.log(myOtherWords);

/*

variable: myWords declared and initialized to array object
variable: myOtherWords declared and initialized to value myWords points to
element at index0 of myWords reassigned to value: 'Hi'
arrays are pointer objects & are not stored at the same address as the variable
myWords will point to the start of the array address and acts as a reference
myOtherWords acts as a pointer to myWords and will encounter the changes


the console will print:
myWords => ['Hi', 'Goodbye']
myOtherWords => ['Hi', 'Goodbye']

*/