// Tip Calculator
// Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip, and then log both the tip and the total amount of the bill to the console. You can ignore input validation and assume that the user will enter numbers.

// Example:

// What is the bill? 200
// What is the tip percentage? 15

// The tip is $30.00
// The total is $230.00


// CODE:
const readline = require('readline-sync');

function prompt (message) {
  console.log(`=> ${message}`);
}

prompt("What is the bill?");
let bill = +readline.question();

prompt("What is the tip percentage?");
let tipPercentage = +readline.question();
let tipPercentageAmount = (tipPercentage / 100) * bill;
let finalBill = bill + tipPercentageAmount;

prompt(`The tip is $${tipPercentageAmount.toFixed(2)}`);
prompt(`The total is $${finalBill.toFixed(2)}`);