// DEPENDENCIES

// require json messages into the program
const MESSAGES = require("./messages.json");

// require readline-sync into the program
const READLINE_SYNC = require("readline-sync");

// -----------------------------------------------------------------------------

// VARIABLE DECLARATIONS

const MONTHS_IN_ONE_YEAR = 12;
// let loanAmt; // INPUT, OUTPUT
// let loanDurationInYears; // INPUT, OUTPUT
// let annualRateOfInterest; // INPUT, OUTPUT
// let aprDecimal;
// let intPerM;
// let loanMnths;
// let repayPerM; // OUTPUT
// let totalAmtRepayable; // OUTPUT

let restartProgram = true;

// -----------------------------------------------------------------------------

// FUNCTION DECLARATIONS

// printer function
function printer(message) {
  console.log(`\n=> ${message}`);
}

// performs validation checks
function intValueValidation(value) {
  return (
    value <= 0 ||
    Number.isNaN(Number(value)) ||
    String(value).trimStart() === "" ||
    Object.is(value, -0)
  );
}

// loan duration validation checks
function validateLoanDuration(value) {
  return (
    Number(value) <= 0 ||
    Number.isNaN(Number(value)) ||
    value.trimStart() === "" ||
    Object.is(Number(value), -0) ||
    Number(value) % 1 !== 0
  );
}

// performs validation checks on apr
function aprValidation(value) {
  return (
    value < Number(0) ||
    Number.isNaN(Number(value)) ||
    value.trimStart() === "" ||
    Object.is(Number(value), -0)
  );
}

// convert loan amount to currency value
function toCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(`${value}`);
}

// getLoan function
function getLoan() {
  let loanAmt;

  printer(MESSAGES["loanAmount"]);
  loanAmt = +READLINE_SYNC.prompt();

  while (intValueValidation(loanAmt)) {
    printer(MESSAGES["valueErrorValidation"]);
    loanAmt = +READLINE_SYNC.prompt();
  }
  return loanAmt;
}

function getLoanDurationYears() {
  let loanDurationInYears;

  printer(MESSAGES["loanDurationInYears"]);
  loanDurationInYears = READLINE_SYNC.prompt();

  // validate loan duration input
  while (validateLoanDuration(loanDurationInYears)) {
    printer(MESSAGES["valueErrorValidation"]);
    loanDurationInYears = READLINE_SYNC.prompt();
  }

  return Number(loanDurationInYears);
}

// get annual rate of interest
function getAPR() {
  let annualRateOfInterest;

  printer(MESSAGES["annualRateOfInterest"]);
  annualRateOfInterest = READLINE_SYNC.prompt();

  // validate annual rate of interest input
  while (aprValidation(annualRateOfInterest)) {
    printer(MESSAGES["valueErrorValidation"]);
    annualRateOfInterest = READLINE_SYNC.prompt();
  }
  return Number(annualRateOfInterest);
}

function getAPRdecimal(annualRateOfInterest) {
  return annualRateOfInterest / 100;
}

function getIntPerMonth(aprDecimal) {
  return aprDecimal / MONTHS_IN_ONE_YEAR;
}

function getLoanMonths(loanDurationInYears) {
  return loanDurationInYears * MONTHS_IN_ONE_YEAR;
}

function getRepayPerM(loanAmt, intPerM, loanMnths) {
  if (intPerM === 0) {
    return loanAmt / loanMnths;
  }

  return loanAmt * (intPerM / (1 - Math.pow(1 + intPerM, -loanMnths)));
}

function getTotalAmountRepayable(repayPerM, loanMnths) {
  return repayPerM * loanMnths;
}

function displayFinalResults(
  loanAmt,
  loanDurationInYears,
  annualRateOfInterest,
  repayPerM,
  totalAmtRepayable
) {
  console.log("\n");
  printer(MESSAGES["results_output"].toUpperCase());
  printer(MESSAGES["loanAmount_output"] + `${toCurrency(loanAmt)}`);
  printer(
    MESSAGES["loanDurationInYears_output"] + `${loanDurationInYears} years`
  );
  printer(MESSAGES["annualRateOfInterest_output"] + `${annualRateOfInterest}%`);
  printer(MESSAGES["monthlyRepayment_output"] + `${toCurrency(repayPerM)}`);
  printer(
    MESSAGES["totalAmtRepayable_output"] + `${toCurrency(totalAmtRepayable)}`
  );
}

function askToCalculateAgain() {
  let newCalculationAnswer;

  printer(MESSAGES["newCalculation"]);
  newCalculationAnswer = READLINE_SYNC.prompt();

  while (
    !["yes", "y", "no", "n"].includes(newCalculationAnswer.toLowerCase())
  ) {
    printer(MESSAGES["newCalculationValidation"]);
    newCalculationAnswer = READLINE_SYNC.prompt();
  }

  newCalculationAnswer = newCalculationAnswer[0].toLowerCase();

  switch (newCalculationAnswer) {
    case "y":
      break;

    case "n":
      printer(MESSAGES["goodbye"]);
      restartProgram = false;
      break;
  }
}

function getWelcome() {
  printer(MESSAGES["introduction"]);
}

// -----------------------------------------------------------------------------

// MAIN FUNCTIONS

while (restartProgram === true) {
  // prints introductory message

  // get loan amount

  // validate loan amount input
  getWelcome();
  let loanAmt = getLoan();
  let loanDurationInYears = getLoanDurationYears();
  let annualRateOfInterest = getAPR();
  let aprDecimal = getAPRdecimal(annualRateOfInterest);
  console.log("aprDecimal", aprDecimal);
  let intPerM = getIntPerMonth(aprDecimal);
  console.log("intPerM", intPerM);
  let loanMnths = getLoanMonths(loanDurationInYears);
  let repayPerM = getRepayPerM(loanAmt, intPerM, loanMnths);
  let totalAmtRepayable = getTotalAmountRepayable(repayPerM, loanMnths);
  displayFinalResults(
    loanAmt,
    loanDurationInYears,
    annualRateOfInterest,
    repayPerM,
    totalAmtRepayable
  );
  askToCalculateAgain();
}

// while (intValueValidation(loanAmt)) {
//   printer(MESSAGES['valueErrorValidation']);
//   loanAmt = +READLINE_SYNC.prompt();
// }

// get loan duration in years
// printer(MESSAGES['loanDurationInYears']);
// loanDurationInYears = +READLINE_SYNC.prompt();

// // validate loan duration input
// while (intValueValidation(loanDurationInYears)) {
//   printer(MESSAGES['valueErrorValidation']);
//   loanDurationInYears = +READLINE_SYNC.prompt();
// }

// // get annual rate of interest
// printer(MESSAGES["annualRateOfInterest"]);
// annualRateOfInterest = +READLINE_SYNC.prompt();

// // validate annual rate of interest input
// while (intValueValidation(annualRateOfInterest)) {
//   printer(MESSAGES["valueErrorValidation"]);
//   annualRateOfInterest = +READLINE_SYNC.prompt();
// }

// ---------------------------------------------------------------------------

// CALCULATIONS

// initialize variables expressions
// aprDecimal = annualRateOfInterest / 100;

// intPerM = aprDecimal / MONTHS_IN_ONE_YEAR;

// loanMnths = loanDurationInYears * MONTHS_IN_ONE_YEAR;

// repayPerM = loanAmt * (intPerM / (1 - Math.pow(1 + intPerM, -loanMnths)));

// totalAmtRepayable = repayPerM * loanMnths;

// ---------------------------------------------------------------------------

// OUTPUT RESULTS

// ---------------------------------------------------------------------------

// RESTART PROGRAM ?

//   console.log("\n");
//   printer(MESSAGES["newCalculation"]);
//   newCalculationAnswer = READLINE_SYNC.prompt();

//   while (
//     !["yes", "y", "no", "n"].includes(newCalculationAnswer.toLowerCase())
//   ) {
//     printer(MESSAGES["newCalculationValidation"]);
//     newCalculationAnswer = READLINE_SYNC.prompt();
//   }

//   newCalculationAnswer = newCalculationAnswer[0].toLowerCase();

//   switch (newCalculationAnswer) {
//     case "y":
//       break;

//     case "n":
//       printer(MESSAGES["goodbye"]);
//       restartProgram = false;
//       break;
//   }
// }
