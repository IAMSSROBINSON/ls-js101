// Question 6
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

let myWords = ['Hello', 'Goodbye'];
let myWord = 'Hi';
myWords[0] = myWord;
myWord = 'Hello';

console.log(myWords);
console.log(myWord);


/*

variable: myWords declared and initialized to array object at 1 address
new variable: myWord declared and initialized to string: 'Hi'
myWords array element1 reassigned to value: 'Hi'
myWord variable reassigned to value: "Hello"

the console will print:
myWords => ['Hi', 'Goodbye']
myWord => 'Hello';

*/