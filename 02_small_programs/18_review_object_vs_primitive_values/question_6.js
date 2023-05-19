// Question 6
// What will the following code log to the console and why? 
// Don't run it until you have tried to answer.

let myWords = ['Hello'];
myWords[0] = myWords[0].toUpperCase();

console.log(myWords);


/*

new variable declared and array object assigned with string value inside
index 0 of array accessed
index 0 of array mutated to uppercase characters
console.log: ['HELLO']

*/

/*

This code should output an array with a uppercase string value as it's 0th indexed element.

On line 2 of the code the pointer variable declared on line one (which points to an array at a different address in memory) is used with bracket notation to reassign its value at the index specified inside the brackets directly to a new string value as returned by the .toUpperCase() method invocation on said array element value.

The console.log() method invocation on the last line of code will therefore output the value of the argument passed, which points to the array with the mutated value of its 0th indexed element.

*/