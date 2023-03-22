// Further Exploration
// Repeat this exercise with a technique different from the one that you used, and different from the one provided. Also consider adding a way for the user to specify the limits of the odd numbers logged to the console.

const readlineSync = require('readline-sync');

let upperBound = readlineSync.question("\nThis program will print odd numbers from 1 to a specified number (each on a new line). Please specify a number for the upper bound limit:\n");

for(let i = 1; i <= upperBound; i += 2){
	console.log(i);
}