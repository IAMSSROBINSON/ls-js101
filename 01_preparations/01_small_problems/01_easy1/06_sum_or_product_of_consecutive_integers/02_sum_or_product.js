// Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

// Further Exploration
// What if the input was an array of integers instead of just a single integer? How would your computeSum and computeProduct functions change? Given that the input is an array, how might you make use of the Array.prototype.reduce() method?

const readline = require('readline-sync');

function getSum(number) {

  let array = [];
  for (let index = 1; index <= number; index++) {
    array.push(index);
  }

  let sum = array.reduce((accumulatedValue, currentElementValue, currentIndex, ogArray)=>{
    return accumulatedValue + currentElementValue;
  });

  return sum;
}

function getProduct(number) {

  let array = [];
  for (let index = 1; index <= number; index++) {
    array.push(index);
  }

  let sum = array.reduce((accumulatedValue, currentElementValue, currentIndex, ogArray)=>{
    return accumulatedValue * currentElementValue;
  });

  return sum;
}

let number;
console.log('\nPlease enter a number: \n');
number = +readline.question();

let operator;
console.log('Please select:\n1) Sum or\n2) Product');
operator = +readline.question();

let result;
switch(operator) {
  case 1:
    result = getSum(number);
    break;

  case 2:
    result = getProduct(number);

    break;
}
console.log(result);

/*

5 + 4 + 3 + 2 + 1 = 15
5 * 4 * 3 * 2 * 1 = 120

*/