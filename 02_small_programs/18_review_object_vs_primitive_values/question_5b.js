// Question 5
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

let myWords = ['Hello'];
myWords[0].toUpperCase();

console.log(myWords);

/*

OUTPUT:
['HELLO']

WHY:
On the final line of code the console.log method is invoked and passes in a reference to the value of the variable declared on the first line of code and initialized to an array containing a primitive string value as its only element.

On the second line of code the variable is referenced and bracket notation is used to access the element at index position: 0 in the array. The .toUpperCase() method is invoked on this element value directly and thus mutates the element inside the array as a result. 

To be clear the array does not change, only the element inside it is mutated and the array is still referenced by the variable at the same address in computer memory. 

Thus the console.log method invocation on the final line of code references the value from the variable name passed in as its argument - which is the mutated array.

*/