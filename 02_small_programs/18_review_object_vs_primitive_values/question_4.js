// Question 4
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

let myWords = ['Hello'];
myWords.concat(['Goodbye']);

console.log(myWords);

/*

Variable declared and array object with string value inside assigned
.concat attempts to perform string method on array object variable
console.log will print original array: ['Hello']

*/

/*

This code outputs the array: ['Hello'].
The .concat() method used on arrays will return a new array and will not mutate the caller, thus the array that is passed as the value to be concatenated to the caller is not saved to any storage medium be it a new variable or otherwise. 

Therefore when the console.log() method is invoked on the last line of code the value that argument points to is the original array with 1 primitive string value present inside as the only element.

*/