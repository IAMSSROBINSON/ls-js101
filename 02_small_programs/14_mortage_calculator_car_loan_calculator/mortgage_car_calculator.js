const MESSAGES = require("./messages.json");
const READLINE_SYNC = require("readline-sync");
const MONTHS_IN_ONE_YEAR = 12;
let restartProgram = true;

// -----------------------------------------------------------------------------

while (restartProgram === true) {
  getWelcome();
  let loanAmount = getLoan();
  let loanDurationInYears = getLoanDurationYears();
  let aprAmount = getAPR();
  let aprDecimal = getAPRdecimal(aprAmount);
  let interestPerMonth = getInterestPerMonth(aprDecimal);
  let loanDurationMonths = getLoanMonths(loanDurationInYears);
  let monthlyPayment = getMonthlyPayment(loanAmount,
    interestPerMonth, loanDurationMonths);
  let totalRepayable = getTotalAmountRepayable(monthlyPayment,
    loanDurationMonths);
  displayFinalResults(
    loanAmount,
    loanDurationInYears,
    aprAmount,
    monthlyPayment,
    totalRepayable
  );
  askToCalculateAgain();
}

// -----------------------------------------------------------------------------

function toCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(`${value}`);
}

function printer(message) {
  console.log(`\n=> ${message}`);
}

// -----------------------------------------------------------------------------

function getWelcome() {
  printer(MESSAGES["welcome"]);
}

function getLoan() {
  let loanAmount;

  printer(MESSAGES["loanAmount_prompt"]);
  loanAmount = +READLINE_SYNC.prompt();

  while (intValueValidation(loanAmount)) {
    printer(MESSAGES["error_int_validation"]);
    loanAmount = +READLINE_SYNC.prompt();
  }
  return loanAmount;
}

function intValueValidation(value) {
  return (
    value <= 0 ||
    Number.isNaN(Number(value)) ||
    String(value).trimStart() === "" ||
    Object.is(value, -0)
  );
}

function getLoanDurationYears() {
  let loanDurationInYears;

  printer(MESSAGES["loanDurationInYears_prompt"]);
  loanDurationInYears = READLINE_SYNC.prompt();

  while (validateLoanDuration(loanDurationInYears)) {
    printer(MESSAGES["error_wholeNumber_validation"]);
    loanDurationInYears = READLINE_SYNC.prompt();
  }

  return Number(loanDurationInYears);
}

function validateLoanDuration(value) {
  return (
    Number(value) <= 0 ||
    Number.isNaN(Number(value)) ||
    value.trimStart() === "" ||
    Object.is(Number(value), -0) ||
    Number(value) % 1 !== 0
  );
}

function getAPR() {
  let aprAmount;

  printer(MESSAGES["APR_prompt"]);
  aprAmount = READLINE_SYNC.prompt();

  while (aprValidation(aprAmount)) {
    printer(MESSAGES["error_int_validation"]);
    aprAmount = READLINE_SYNC.prompt();
  }
  return Number(aprAmount);
}

function aprValidation(value) {
  return (
    value < Number(0) ||
    Number.isNaN(Number(value)) ||
    value.trimStart() === "" ||
    Object.is(Number(value), -0)
  );
}

function getAPRdecimal(aprAmount) {
  return aprAmount / 100;
}

function getInterestPerMonth(aprDecimal) {
  return aprDecimal / MONTHS_IN_ONE_YEAR;
}

function getLoanMonths(loanDurationInYears) {
  return loanDurationInYears * MONTHS_IN_ONE_YEAR;
}

function getMonthlyPayment(loanAmount, interestPerMonth, loanDurationMonths) {
  if (interestPerMonth === 0) {
    return loanAmount / loanDurationMonths;
  }

  return loanAmount *
  (interestPerMonth /
  (1 - Math.pow(1 + interestPerMonth, -loanDurationMonths)));
}

function getTotalAmountRepayable(monthlyPayment, loanDurationMonths) {
  return monthlyPayment * loanDurationMonths;
}

function displayFinalResults(
  loanAmount,
  loanDurationInYears,
  aprAmount,
  monthlyPayment,
  totalRepayable
) {
  console.log("\n");
  printer(MESSAGES["results_title"].toUpperCase());
  printer(MESSAGES["loanAmount_title"] + `${toCurrency(loanAmount)}`);
  printer(
    MESSAGES["loanDurationInYears_title"] + `${loanDurationInYears} years`
  );
  printer(MESSAGES["apr_title"] + `${aprAmount}%`);
  printer(MESSAGES["monthlyPayment_title"] + `${toCurrency(monthlyPayment)}`);
  printer(
    MESSAGES["totalRepayable_title"] + `${toCurrency(totalRepayable)}`
  );
}

function askToCalculateAgain() {
  let newCalculationAnswer;

  printer(MESSAGES["reStartProgram_prompt"]);
  newCalculationAnswer = READLINE_SYNC.prompt();

  while (
    !["yes", "y", "no", "n"].includes(newCalculationAnswer.toLowerCase())
  ) {
    printer(MESSAGES["reStartProgram_validation"]);
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

// -----------------------------------------------------------------------------

