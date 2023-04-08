// Write a Calculator program
// Allow users to select two numbers and perform an operation on them.

const READLINESYNC = require('readline-sync');
const MESSAGES = require('./messages.json');
let langDefault = 'en';

// accesses messages object and prints output
function prompter(msg) {
  return console.log(`\n=> ${MESSAGES[langDefault][msg]}`);
}

// calculation functions
function addition(number1, number2) {
  return Number(number1) + Number(number2);
}

function subtraction(number1, number2) {
  return Number(number1) - Number(number2);
}

function multiplication(number1, number2) {
  return Number(number1) * Number(number2);
}

function quotient(number1, number2) {
  return (Number(number1) / Number(number2)).toFixed(2);
}

function modulus(number1, number2) {
  return Number(number1) % Number(number2);
}

function exponentiation(number1, number2) {
  return Number(number1) ** Number(number2);
}


// main function
while (true) {
  prompter('intro');

  let languageSelected;
  prompter('selectLang');
  languageSelected = +READLINESYNC.prompt();

  while (![1, 2].includes(languageSelected)) {
    prompter('selectLang');
    languageSelected = +READLINESYNC.prompt();
  }

  switch (languageSelected) {
    case 1:
      langDefault = 'en';
      break;

    case 2:
      langDefault = 'kr';
      break;
  }

  let number1;
  prompter('firstNumber');
  number1 = READLINESYNC.prompt();

  while (number1.trimStart() === '' || Number.isNaN(Number(number1))) {
    prompter('invalidEntry');
    number1 = READLINESYNC.prompt();
  }

  let number2;
  prompter('secondNumber');
  number2 = READLINESYNC.prompt();

  while (number2.trimStart() === '' || Number.isNaN(Number(number2))) {
    prompter('invalidEntry');
    number2 = READLINESYNC.prompt();
  }

  let operatorSelection;
  prompter('operator');
  prompter('addition');
  prompter('subtraction');
  prompter('multiplication');
  prompter('quotient');
  prompter('modulus');
  prompter('exponentiation');
  prompter('quit');

  operatorSelection = +READLINESYNC.prompt();

  while (![1, 2, 3, 4, 5, 6, 7].includes(operatorSelection)) {
    prompter('invalidEntry');
    prompter('addition');
    prompter('subtraction');
    prompter('multiplication');
    prompter('quotient');
    prompter('modulus');
    prompter('exponentiation');
    prompter('quit');
    operatorSelection = +READLINESYNC.prompt();
  }

  let total;
  switch (operatorSelection) {
    case 1:
      total = addition(number1, number2);
      break;

    case 2:
      total = subtraction(number1, number2);
      break;

    case 3:
      total = multiplication(number1, number2);
      break;

    case 4:
      total = quotient(number1, number2);
      break;

    case 5:
      total = modulus(number1, number2);
      break;

    case 6:
      total = exponentiation(number1, number2);
      break;

    case 7:
      prompter('eop');
      break;
  }

  console.log(`=> Total: ${total}`);

  let answer;
  prompter('new');
  answer = READLINESYNC.prompt();

  while (!['yes', 'no'].includes(answer.toLowerCase())) {
    prompter('yesNo');
    answer = READLINESYNC.prompt();
  }

  if (answer !== 'yes') {
    break;
  }
}
