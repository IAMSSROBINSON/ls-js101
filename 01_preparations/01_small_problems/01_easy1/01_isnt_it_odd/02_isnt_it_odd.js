// Using readline-sync
// Write a function that takes one integer argument, which may be positive, negative, or zero. This method returns true if the number's absolute value is odd. You may assume that the argument is a valid integer value.

// require module (make sure it is installed: npm i readline-sync)
// store returned object in variable for later use
let readlineSync = require('readline-sync');

// ask user for a number, store to variable for later use
// convert input stream value to number: +prompt
let number = +readlineSync.question("\nPlease enter a number to check the 'Odd' status:\n");

// define function to validate Odd status
function isOdd (number) {

	return number % 2 !== 0;
}

// call function, pass in variable and output result summary
console.log(`\nYou entered number: ${number}\nOdd status: ${isOdd(number)}\n`);