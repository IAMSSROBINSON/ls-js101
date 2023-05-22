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

OUTPUT:
['Hi', 'Goodbye']
Hello


WHY:
The first console.log method invocation passes in a reference to the variable declared on the first line of code. This variable is initialized to store the address in computer memory that points to an array object. 

On the third line of code this variable is referenced using bracket notation to access the array values directly and the element at the index position 0 is reassigned to store the value of a variable declared on the second line of code: 'Hi'.

On the fourth line of code the value of the variable on the third line is reassigned to reference 'Hello' instead of 'Hi' but this has no bearing on the previous assignment as primitive values are not pointers and cannot be changed. 

The first console.log method invocation therefore passes in a reference to the first mutation of the array and outputs: ['Hi', 'Goodbye'].

The second console.log method invocation passes in a reference to the current value of the variable and outputs: 
'Hello'.

*/