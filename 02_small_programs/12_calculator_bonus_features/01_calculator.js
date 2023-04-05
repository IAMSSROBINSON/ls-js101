// Original Calculator

const READLINE = require("readline-sync");


function prompt(msg) {
  console.log(`\n=> ${msg}`);
}

function invalidNumber (number) {

  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt("Welcome to the Calculator!");

prompt("Please enter first number: ");
let number1 = READLINE.question();

while (invalidNumber(number1)) {
  prompt("Invalid number. Enter number value: ");
  number1 = READLINE.question();
}

prompt("Please enter second number: ");
let number2 = READLINE.question();

while (invalidNumber(number2)) {
  prompt(`Invalid number. Enter number value: `);
  number2 = READLINE.question();
}

prompt(
  "Select an arithmetic operator:\n1: Addition\n2: Multiplication\n3: Division\n4: Subtraction\n"
);
let operation = +READLINE.question();

while (![1, 2, 3, 4].includes(operation)) {
  prompt(`Invalid number. You must choose 1, 2, 3, or 4: `);
  operation = +READLINE.question();
}

let output;
switch (operation) {
  case 1:
    output = Number(number1) + Number(number2);
    break;

  case 2:
    output = Number(number1) * Number(number2);
    break;

  case 3:
    output = Number(number1) / Number(number2);
    break;

  case 4:
    output = Number(number1) - Number(number2);
    break;

  default:
    prompt("\nInvalid selection.\nEnd of program.");
    break;
}

prompt(`The result is ${output}\n`);
