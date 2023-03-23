// Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

// Examples:

// Please enter an integer greater than 0: 5
// Enter "s" to compute the sum, or "p" to compute the product. s

// The sum of the integers between 1 and 5 is 15.

// Please enter an integer greater than 0: 6
// Enter "s" to compute the sum, or "p" to compute the product. p

// The product of the integers between 1 and 6 is 720.


/*

Pseudocode:

Informal: 

prompt user to enter number > 0
prompt user to select: sum or product from menu with 's' or 'p'
	- Edge cases: capital letter entry & invalid character entry
if 's' run sum function:
	- let sum = 0;
	- loop
	- start loop: let i = 0;
	- while i < number
	- i++
		 - sum += i;
	- return sum
	- print results
if 'product' run product function
	- same process but for product: multiply values


Formal:
	- START
	- let number = +prompt("Enter number");
	- let method = prompt("Select 1: sum, or 2: product);
		- Enter "s" to compute the sum, or "p" to compute the product

	switch(method){
		case "s":
			sum(number);
		break;

		case "p":
				product(number);
		break;

		default: 
		console.log("Invalid selection. End of program.");
	}

	- define sum function: return sum
	- define product function: return product

	- call print function and pass: sum, "sum" or product, "product"
		- include value and string in print value
	- END

Convert to code: 
*/

let readlineSync = require('readline-sync');

console.log("\nThis program will print the sum of series or product of a given integer.");
let number = +readlineSync.question("\nPlease enter a number greater than 0:\n");
let method = (readlineSync.question("\nEnter 's' to compute the sum, or 'p to compute the product\n").toLowerCase());

switch(method){
	case "s":
	printer(getSum(number), "sum", number);
	break;

	case "p":
	printer(getProduct(number), "product", number);
	break;

	default: 
	console.log("Invalid selection. End of program.");
}

function getSum (number) {

		let sum = 0;

		for(let i = sum; i <= number; i++){
			sum += i;
		}

		return sum;
}

function getProduct (number) {

	let product = 1;

	for(let i = product; i <= number; i++){
		product *= i;
	}

	return product;
}

function printer (value, string, number) {

	console.log(`\nThe ${string} of the integers between 1 and ${number} is ${value}.\n\n`);
}