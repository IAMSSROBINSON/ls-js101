// require json messages into the program
const MESSAGES = require("./messages.json");

// require readline-sync into the program
const READLINE_SYNC = require("readline-sync");

// FUNCTION DEFINITIONS
// printer function
function printer (message) {
  console.log(`\n=> ${message}`);
}

// performs validation checks
function positiveIntValue (value) {
  return value <= 0 || Number.isNaN(Number(value)) || String(value).trimStart() === "" || Object.is(value, -0);
}

// declare variables
let loanAmount; // INPUT

// FUNCTION INVOCATIONS
printer(MESSAGES['introduction']);

printer("Enter loan amount:");
loanAmount = +READLINE_SYNC.prompt();

while (positiveIntValue(loanAmount)) {
  printer("Please enter loan amount as a whole number:");
  loanAmount = +READLINE_SYNC.prompt();
}

