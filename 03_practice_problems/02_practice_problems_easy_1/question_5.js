// Question 5
// What will the following code output?

/*
It should output:
true: loose comparison coerces string to number
false: strict comparison compares boolean to string
*/

console.log(false == '0'); // true
console.log(false === '0'); // false