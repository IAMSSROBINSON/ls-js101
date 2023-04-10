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
function notPositiveIntValueValidation (value) {
  return value <= 0 || Number.isNaN(Number(value)) || String(value).trimStart() === "" || Object.is(value, -0);
}

// declare variables
let loanAmount; // INPUT

// FUNCTION INVOCATIONS
printer(MESSAGES['introduction']);

printer(MESSAGES['loanAmount']);
loanAmount = +READLINE_SYNC.prompt();

while (notPositiveIntValueValidation(loanAmount)) {
  printer(MESSAGES['loanAmountErrorValidation']);
  loanAmount = +READLINE_SYNC.prompt();
}

