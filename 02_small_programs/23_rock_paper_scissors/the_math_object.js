// Exploring the Math object

let mathRandomNumber = Math.random();
console.log(mathRandomNumber);
// The Math.random method() returns a number from 0(inclusive) to 1(exclusive)
// e.g 0.14919956273340684

let mathFlooredNumber = Math.floor(mathRandomNumber);
console.log(mathFlooredNumber);
// The Math.floor() method takes a number as its argument
// It rounds the number down to the nearest whole integer and returns it
// To get a number > than 0, random number must be multiplied by a maxNum

let aboveZero = mathRandomNumber * 7;
console.log(Math.floor(aboveZero));
// This will mean the maxNum is exclusive, +1 to make it inclusive

aboveZero = ((mathRandomNumber * 7) + 1);
aboveZero = Math.floor(aboveZero);
console.log(aboveZero);
// this creates a random number within a range

// create a function that generates a random number from a given range
function getRandomNumberFromRange (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomNumberFromRange(0, 2));


let mathCeilNumber = Math.ceil(mathRandomNumber * 5);
console.log(mathCeilNumber);
// Math.ceil() method returns an integer rounded up to the nearest whole integer


let mathPowNumber = Math.pow(2,5);
console.log(mathPowNumber); // 2 * 2 * 2 * 2 * 2 = 32
// Math.pow() method accepts two arguments.
// It returns the power of a base number raised to an exponent number.
// Meth.pow(base, exponent) is the same as using the exponentiation operator **