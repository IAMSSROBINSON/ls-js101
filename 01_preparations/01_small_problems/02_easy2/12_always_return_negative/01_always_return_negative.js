// Always Return Negative
// Write a function that takes a number as an argument. If the argument is a positive number, return the negative of that number. If the argument is a negative number, return it as-is.

// Examples:
// negative(5);     // -5
// negative(-3);    // -3
// negative(0);     // -0

// Math.abs() turns all numbers into positive numbers.
// Multiplying any positive number by -1 turns the number into a negative number, even 0.

function negative(number) {
  
  return Math.abs(number) * -1;
}

console.log(negative(5)); // -5
console.log(negative(-3)); // -3
console.log(negative(0)); // -0
console.log(negative(-0)); // -0

