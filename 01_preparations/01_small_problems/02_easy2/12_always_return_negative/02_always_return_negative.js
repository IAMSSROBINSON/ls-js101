// Further Exploration

// An alternative solution would be to use the ternary operator (e.g., a ? b : c). If you haven't already used it, try refactoring the solution using the ternary operator.

// Ternary:
function negative (number) {
  return number < 0 ? number : Math.abs(number) * -1;
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0


// Did you notice that negative(0) returns -0? What is this value, -0? Is it different from 0 in some way? Use Google to look for an explanation of -0. In particular, see if you can learn how to differentiate between 0 and -0 in a program.

// 0 and -0
// 0 and -0 are both numeric values.
// -0 behaves differently to 0 for arithmetic operations as -0 is a special value that represents negative 0.

// 0 is always positive +
// -0 is always negative -

// Math.sign() will determine the sign of a numeric value
//   - returns 1 if value is positive 
//   - returns -1 if value is negative
//   - returns 0 is the value is 0

// 1 / 0 = Infinity (greater than any other number)
// 1 / -0 = -Infinity (less than any other number)

console.log(Object.is(Math.sign(-0), -0)) // true
console.log(Object.is(Math.sign(negative(-0)), -0));     // true