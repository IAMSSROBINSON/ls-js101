// Question 4
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

let myWords = ['Hello', 'Goodbye'];
let myOtherWords = myWords;
myWords = ['Hi', 'Bye'];

console.log(myWords);
console.log(myOtherWords);

/*

variable: myWords declared and initialized to array object at 1 address
variable: myOtherWords declared and initialized to value myWords references
myWords reassigned to reference new array object as new address
myOtherWords points to address of original array

the console will print:
myWords => ['Hi', 'Bye']
myOtherWords => ['Hello', 'Goodbye'];

*/