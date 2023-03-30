// Arithmetic Integer
// Write a program that prompts the user for two positive integers, and then prints the results of the following operations on those two numbers: addition, subtraction, product, quotient, remainder, and power. Do not worry about validating the input.

// Example
// ==> Enter the first number:
// 23
// ==> Enter the second number:
// 17
// ==> 23 + 17 = 40
// ==> 23 - 17 = 6
// ==> 23 * 17 = 391
// ==> 23 / 17 = 1
// ==> 23 % 17 = 6
// ==> 23 ** 17 = 1.4105003956066297e+23
// The final output above shows how JavaScript displays numbers that are too large for its Number type. The number represents approximately 1.41 * 100,000,000,000,000,000,000,000 using what is called floating-point notation. If you want to see what the exact value is, you can use JavaScript's BigInt type by appending an n to both 23 and 17:

// Copy Code
// > 23n ** 17n    // 141050039560662968926103n

const READLINESYNC = require("readline-sync");

(function getNumbers() {
  let number1 = +READLINESYNC.question("\n=> Please enter first number\n");
  let number2 = +READLINESYNC.question("\n=> Please enter second number\n");

  printer(`${addition(number1, number2)}`);
  printer(`${subtraction(number1, number2)}`);
  printer(`${product(number1, number2)}`);
  printer(`${quotient(number1, number2)}`);
  printer(`${remainder(number1, number2)}`);
  printer(`${power(number1, number2)}`);
})();

function printer (expression) {
  console.log(`\n=> ${expression}`);
}

function addition (num1, num2) {
  return `${num1} + ${num2} = ${num1 + num2}`;
}

function subtraction (num1, num2) {
  return `${num1} - ${num2} = ${num1 - num2}`;
}

function product (num1, num2) {
  return `${num1} * ${num2} = ${num1 * num2}`;
}

function quotient (num1, num2) {
  return `${num1} / ${num2} = ${Math.floor(num1 / num2)}`;
}

function remainder (num1, num2) {
  return `${num1} % ${num2} = ${num1 % num2}`;
}

function power (num1, num2) {
  return `${num1} ** ${num2} = ${BigInt(num1) ** BigInt(num2)}n`;
}






/*

Pseudocode
Informal:


INPUT: 
OUTPUT:

Edge cases:


Formal:

Guard clause:

Flowchart:


*/
