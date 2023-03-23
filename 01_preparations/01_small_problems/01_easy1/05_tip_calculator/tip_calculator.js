// Tip Calculator
// Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip, and then log both the tip and the total amount of the bill to the console. You can ignore input validation and assume that the user will enter numbers.

// Example:

// What is the bill? 200
// What is the tip percentage? 15

// The tip is $30.00
// The total is $230.00


// CODE:
const READLINESYNC = require('readline-sync');

console.log("\nWelcome to the Tip Calculator\n");

// prompt user to enter program values
(function getValues () {

	let billAmount = +READLINESYNC.question("Please enter your bill amount (number):\n");
	let tipRate = +READLINESYNC.question("Please enter your tip rate (number percentage):\n");

	calculateTotal(billAmount, tipRate);
})();

// calculate tipValue and billTotal
function calculateTotal (billAmount, tipRate) {

	let tipValue = (tipRate / 100) * billAmount;
	let totalBillAmount = billAmount + tipValue;

	printer(totalBillAmount, tipValue);
}

// print tipValue and totalBillAmount
function printer (totalBillAmount, tipValue) {

	console.log(`\nThe tip is $${tipValue.toFixed(2)}`);
	console.log(`The total is $${totalBillAmount.toFixed(2)}\n\n`);
}





/*

PSEUDOCODE:

- START: tip calculator program
- prompt the user to enter the bill amount
	- should be integer only (validate? if not int: exit(1))
	- SET to variable

- prompt user to enter tip rate as integer percentage value
	- SET to variable

- DEFINE a function that receives billAmount, tipRate as arguments
- convert tipRate to decimal to calculate value of tip ((tipRate / 100) * billAmount = tipValue)

- PRINT the tipValue & total amount of bill

*/