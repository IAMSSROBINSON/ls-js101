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

// VARIABLE DECLARATIONS
const MONTHS_IN_ONE_YEAR = 12;

let loanAmount; // INPUT, OUTPUT
let loanDurationInYears; // INPUT, OUTPUT
let annualRateOfInterest; // INPUT, OUTPUT
let aprDecimal;
let monthlyInterestRateDecimal;
let loanDurationInMonths;
let monthlyRepayment; // OUTPUT
let totalAmountRepayable; // OUTPUT
let newCalculationAnswer;

// ---------------------------------------------------------------------------

// FUNCTION INVOCATIONS
// prints introductory message
printer(MESSAGES['introduction']);

// get loan amount
printer(MESSAGES['loanAmount']);
loanAmount = +READLINE_SYNC.prompt();

// validate loan amount input
while (notPositiveIntValueValidation(loanAmount)) {
  printer(MESSAGES['valueErrorValidation']);
  loanAmount = +READLINE_SYNC.prompt();
}

//get loan duration in years
printer(MESSAGES['loanDurationInYears']);
loanDurationInYears = +READLINE_SYNC.prompt();

// validate loan duration input
while (notPositiveIntValueValidation(loanDurationInYears)) {
  printer(MESSAGES['valueErrorValidation']);
  loanDurationInYears = +READLINE_SYNC.prompt();
}

// get annual rate of interest
printer(MESSAGES['annualRateOfInterest']);
annualRateOfInterest = +READLINE_SYNC.prompt();

// validate annual rate of interest input
while (notPositiveIntValueValidation(annualRateOfInterest)) {
  printer(MESSAGES['valueErrorValidation']);
  annualRateOfInterest = +READLINE_SYNC.prompt();
}

// ---------------------------------------------------------------------------

// initialize variables expressions
aprDecimal = annualRateOfInterest / 100;

monthlyInterestRateDecimal = aprDecimal / MONTHS_IN_ONE_YEAR;

loanDurationInMonths = loanDurationInYears * MONTHS_IN_ONE_YEAR;

monthlyRepayment = loanAmount * (monthlyInterestRateDecimal / (1 - Math.pow((1 + monthlyInterestRateDecimal), (-loanDurationInMonths))));

totalAmountRepayable = monthlyRepayment * loanDurationInMonths;

// ---------------------------------------------------------------------------

// output: print values
console.log("\n");
printer(MESSAGES['results_output'].toUpperCase());
printer(MESSAGES['loanAmount_output'] + `${toCurrency(loanAmount)}`);
printer(MESSAGES['loanDurationInYears_output'] + `${loanDurationInYears} years`);
printer(MESSAGES['annualRateOfInterest_output'] + `${annualRateOfInterest}%`);
printer(MESSAGES['monthlyRepayment_output'] + `${toCurrency(monthlyRepayment)}`);
printer(MESSAGES['totalAmountRepayable_output'] + `${toCurrency(totalAmountRepayable)}`);

console.log("\n");
printer(MESSAGES['newCalculation']);
newCalculationAnswer = READLINE_SYNC.prompt();

while (!["yes", "y", "no", "n"].includes(newCalculationAnswer.toLowerCase()) || newCalculationAnswer.trimStart() === "") {
  printer(MESSAGES['newCalculationValidation']);
  newCalculationAnswer = READLINE_SYNC.prompt();
}

newCalculationAnswer = newCalculationAnswer[0].toLowerCase();
console.log("newCalculationAnswer", newCalculationAnswer);

switch (newCalculationAnswer) {
  case 'y':
    break;

  case 'n':
    printer(MESSAGES['goodbye']);
    break;
}

