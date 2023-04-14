// Question 5
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

let myWords = ['Hello', 'Goodbye'];
let myWord = myWords[0];
myWords[0] = 'Hi';

console.log(myWords);
console.log(myWord);

/*

variable: myWords declared and initialized to array object at 1 address
new variable: myWord declared and initialized to 1st element in array: 'Hello'
value of first element in array reassigned: 'Hi' via first variable

the console will print:
myWords => ['Hi', 'Goodbye']
myWord => 'Hello';

*/