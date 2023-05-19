// Question 5
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

let myWords = ['Hello'];
myWords[0].toUpperCase();

console.log(myWords);

/*

new variables declared and initialized to array with a string value inside
index 0 of array returns a string
.toUpperCase() method performed on string(primitive value) returning new string
console.log prints original value of variable which is the array
variable has not been mutated: ['Hello']

*/

/*

This code should output: ['Hello']

The .toUpperCase() method invocation on the second line of code returns a new string which does not get saved in this code and thus its value is lost upon the method invocation.

The second line of code uses bracket notation to access the 0 indexed element in the array and mutate it to uppercase but the method is non-mutating and thus the string cannot be mutated rather, a new string is returned with the results of the method applied.

The console.log() method invocation on the last line of code passes in the variable name as a pointer to the array and thus the original array is output to the output stream.

*/