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