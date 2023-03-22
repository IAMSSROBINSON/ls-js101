// Write a function that takes one integer argument, which may be positive, negative, or zero. This method returns true if the number's absolute value is odd. You may assume that the argument is a valid integer value.

function isOdd (number) {
	return (number % 2 !== 0);
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true

















/*

PEDAC:

P: UNDERSTAND THE PROBLEM

	Inputs: 
	- An int value = Number dataType: Positive(Greater than 0), Negative(Less than 0) or 0.

	Output: 
	- True = Boolean dataType: If int value(Number) is odd(not divisible by 2, has a remainder if divided by 2 or number % 2 !== 0).
	- Otherwise: return false(sub-expression);

	Absolute value:
	The absolute value of a number may be thought of as its distance(count) from zero along a real number line.

	Possible values for int value:
	Positive: 5 AV = 5 
	Negative: -5 AV = 5
	Zero:  AV = 0

	How will int value to provided by the program?
	- input stream saved to variable
	- Default value saved to variable or as default value in function parameter

	Mental model:
	Pass a single integer to a function. The function will determine whether the int passed is odd and return true if odd, false if even and false if 0.


E: EXAMPLES

	Positive odd int:
	5 % 2 = 1 // odd = true

	Positive even int:
	4 % 2 = 0 // even = false

	Negative odd int:
	-5 % 2 = -1 // odd = true

	Negative even int:
	-6 % 2 = -0 // even = false;

	Zero positive int:
	0 % 2 = 0 // 0 = false 
	(0 is not odd or even and thus is false because it is not odd)

	** EDGE CASE:
	Zero negative int:
	-0 % 2 = -0 // -0 = false (not odd)
	(-0 is not odd or even and thus is false because it is not odd)


D: DATA STRUCTURE
	Converting the input to the output.
	- Using JavaScript
	- int will be stored in a variable: let
	- Output will be expressed as a boolean value: true or false;

A: ALGORITHM
	- instructions to transform input to desired output
	- declare variable of type int
	- assign int value to a variable or assign int value from input stream to variable
		- variable now has a value (e.g. let number = 5);
	- call function: isOdd();
	- pass in variable: isOdd(number);
	- set up output confirmation: console.log(isOdd(number));
	- define the isOdd function: function isOdd (number) {
		// statements to be made here;
		return result; // return (number % 2 !== 0); // will evaluate to true or false
	};
	- Test:

	number = 5;
	isOdd(number);
	return(5 % 2 !== 0)
	console.log(theReturn); // true

C: CODE
```JavaScript

let number = 5;

function isOdd (number) {
	return number % 2 !== 0;
}

console.log(isOdd(number))
```
*/

// NODE ONLY IMPLEMENTATION: node fileName.js
// install readline-sync to take user input: cli command: npm i readline-sync
// If using CommonJS: require in program: const readlineSync = require('readline-sync');
// If using ES Module: // import { question } from 'readline-sync';
// accept int value from user: +readlineSync.question();


// CODE:
// const readlineSync = require('readline-sync');

// let number = +readlineSync.question("\nEnter a number: \n");

// function isOdd (number) {
// 	return number % 2 !== 0;
// }

// console.log(`${number} is odd: `, isOdd(number));


// FEEDBACK: LOOK UP Math.abs();
// - The `Math.abs()` static method returns the absolute value of a number.
// - [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs)

// Syntax:
// ```JavaScript
// console.log(Math.abs(-17)) // 17;
// ```
