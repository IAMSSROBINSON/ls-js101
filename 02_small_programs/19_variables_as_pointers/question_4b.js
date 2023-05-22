// Question 4
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

let myWords = ['Hello', 'Goodbye'];
let myOtherWords = myWords;
myWords = ['Hi', 'Bye'];

console.log(myWords);
console.log(myOtherWords);

/*

OUTPUT:
['Hi', 'Bye']
['Hello', 'Goodbye']

WHY:
The first console.log method invocation passes in a reference to the variable declared on the first line of code. It is initialized with the address of the array which it will point to. 

On the third line of code this variable is reassigned to point to an entirely new array, that is, the variable will now store the address of a completely new array and will no longer reference the previous one. 

The first console.log method will therefore output this new value to the console: 
['Hi', 'Bye'].

The second console.log method invocation passes in a reference to a variable declared on the second line of code. This value was initialized on the second line to the value that was stored in the first variable - an address to the original array. That array still exists at that address and it is that array that the second variable will reference thus outputting the array at that address to the console:
['Hello', 'Goodbye'].

*/