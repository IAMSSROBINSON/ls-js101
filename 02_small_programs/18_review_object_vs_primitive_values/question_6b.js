// Question 6
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

let myWords = ['Hello'];
myWords[0] = myWords[0].toUpperCase();

console.log(myWords);

/*

OUTPUT:
['HELLO']

WHY:
On the second line of code the variable declared on the first line of code is referenced. The variable is a pointer to an array containing a primitive string value as its only element. 
The second line of code uses bracket notation to access the array element at position: 0 directly and uses the assignment operator to reassigned the value at that array position to be the return value of invoking the .toUpperCase() method on the same element value - thus returning a new string value that gets stored at index position: 0 in the same array instead of the previous value. 

The console.log() method invocation on the final line of code passes in a reference to the value of the variable from the first line of code and this value points to the array of which it is assigned and thus points to the mutated array with its updated value and outputs it to the console.

*/