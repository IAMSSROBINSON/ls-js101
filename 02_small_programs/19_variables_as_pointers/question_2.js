// Question 2
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

let myWord = 'Hello';
let myOtherWord = myWord;
myWord = 'Goodbye';

console.log(myWord);
console.log(myOtherWord);

/*

variable: myWord declared and initialized to string value: 'Hello'
variable: myOther declared and initialized to value myWord points to: 'Hello'
value at address myWord points to reassigned at same address to value: 'Goodbye'

the console will print:
myWord => 'Goodbye'
myOtherWord => 'Hello'


*/