// DEPENDENCIES

// require json messages into the program
const MESSAGES = require("./messages.json");

// require readline-sync into the program
const READLINE_SYNC = require("readline-sync");

// -----------------------------------------------------------------------------

// VARIABLE DECLARATIONS

const MONTHS_IN_ONE_YEAR = 12;
let loanAmt; // INPUT, OUTPUT
let loanDurationInYears; // INPUT, OUTPUT
let annualRateOfInterest; // INPUT, OUTPUT
let aprDecimal;
let intPerM;
let loanMnths;
let repayPerM; // OUTPUT
let totalAmountRepayable; // OUTPUT
let newCalculationAnswer;
let setNewCalculation = true;

// -----------------------------------------------------------------------------

// FUNCTION DECLARATIONS

// printer function
function printer (message) {
  console.log(`\n=> ${message}`);
}

// performs validation checks
function intValueValidation (value) {
  return value <= 0 || Number.isNaN(Number(value)) || String(value).trimStart() === "" || Object.is(value, -0);
}

// convert loan amount to currency value
function toCurrency (value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(`${value}`);
}

// -----------------------------------------------------------------------------

while (setNewCalculation === true) {

  // MAIN FUNCTIONS

  // prints introductory message
  printer(MESSAGES['introduction']);

  // get loan amount
  printer(MESSAGES['loanAmount']);
  loanAmt = +READLINE_SYNC.prompt();

  // validate loan amount input
  while (intValueValidation(loanAmt)) {
    printer(MESSAGES['valueErrorValidation']);
    loanAmt = +READLINE_SYNC.prompt();
  }

  //get loan duration in years
  printer(MESSAGES['loanDurationInYears']);
  loanDurationInYears = +READLINE_SYNC.prompt();

  // validate loan duration input
  while (intValueValidation(loanDurationInYears)) {
    printer(MESSAGES['valueErrorValidation']);
    loanDurationInYears = +READLINE_SYNC.prompt();
  }

  // get annual rate of interest
  printer(MESSAGES['annualRateOfInterest']);
  annualRateOfInterest = +READLINE_SYNC.prompt();

  // validate annual rate of interest input
  while (intValueValidation(annualRateOfInterest)) {
    printer(MESSAGES['valueErrorValidation']);
    annualRateOfInterest = +READLINE_SYNC.prompt();
  }

  // ---------------------------------------------------------------------------

  // CALCULATIONS

  // initialize variables expressions
  aprDecimal = annualRateOfInterest / 100;

  intPerM = aprDecimal / MONTHS_IN_ONE_YEAR;

  loanMnths = loanDurationInYears * MONTHS_IN_ONE_YEAR;

  repayPerM = loanAmt * (intPerM / (1 - Math.pow((1 + intPerM), (-loanMnths))));

  totalAmountRepayable = repayPerM * loanMnths;

  // ---------------------------------------------------------------------------

  // OUTPUT RESULTS

  console.log("\n");
  printer(MESSAGES['results_output'].toUpperCase());
  printer(MESSAGES['loanAmount_output'] + `${toCurrency(loanAmt)}`);
  printer(MESSAGES['loanDurationInYears_output'] + `${loanDurationInYears} years`);
  printer(MESSAGES['annualRateOfInterest_output'] + `${annualRateOfInterest}%`);
  printer(MESSAGES['monthlyRepayment_output'] + `${toCurrency(repayPerM)}`);
  printer(MESSAGES['totalAmountRepayable_output'] + `${toCurrency(totalAmountRepayable)}`);

  // ---------------------------------------------------------------------------

  // RESTART PROGRAM ?

  console.log("\n");
  printer(MESSAGES['newCalculation']);
  newCalculationAnswer = READLINE_SYNC.prompt();

  while (!["yes", "y", "no", "n"].includes(newCalculationAnswer.toLowerCase())) {
    printer(MESSAGES['newCalculationValidation']);
    newCalculationAnswer = READLINE_SYNC.prompt();
  }

  newCalculationAnswer = newCalculationAnswer[0].toLowerCase();

  switch (newCalculationAnswer) {
    case 'y':
      break;

    case 'n':
      printer(MESSAGES['goodbye']);
      setNewCalculation = false;
      break;
  }
}