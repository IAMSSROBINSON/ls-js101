// DEPENDENCIES
// require json messages into the program
const MESSAGES = require("./messages.json");

// require readline-sync into the program
const READLINE_SYNC = require("readline-sync");

// ---------------------------------------------------------------------------

// FUNCTION DEFINITIONS
// printer function
function printer (message) {
  console.log(`\n=> ${message}`);
}

// performs validation checks
function notPositiveIntValueValidation (value) {
  return value <= 0 || Number.isNaN(Number(value)) || String(value).trimStart() === "" || Object.is(value, -0);
}

// convert loan amount to currency value
function toCurrency (value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(`${value}`);
}


// ---------------------------------------------------------------------------

// declare variables
let loanAmount; // INPUT
let loanDurationInYears; // INPUT
let annualRateOfInterest; // INPUT


// ---------------------------------------------------------------------------

// FUNCTION INVOCATIONS
printer(MESSAGES['introduction']);

// get loan amount
printer(MESSAGES['loanAmount']);
loanAmount = +READLINE_SYNC.prompt();

while (notPositiveIntValueValidation(loanAmount)) {
  printer(MESSAGES['valueErrorValidation']);
  loanAmount = +READLINE_SYNC.prompt();
}

//get loan duration in years
printer(MESSAGES['loanDurationInYears']);
loanDurationInYears = +READLINE_SYNC.prompt();

while (notPositiveIntValueValidation(loanDurationInYears)) {
  printer(MESSAGES['valueErrorValidation']);
  loanDurationInYears = +READLINE_SYNC.prompt();
}

// get annual rate of interest
printer(MESSAGES['annualRateOfInterest']);
annualRateOfInterest = +READLINE_SYNC.prompt();

while (notPositiveIntValueValidation(annualRateOfInterest)) {
  printer(MESSAGES['valueErrorValidation']);
  annualRateOfInterest = +READLINE_SYNC.prompt();
}

// print values
printer(MESSAGES['loanAmount_output'] + `${toCurrency(loanAmount)}`);
