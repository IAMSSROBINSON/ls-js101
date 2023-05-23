// Further Exploration
// Repeat this exercise with a technique different from the one that you used, and different from the one provided. Also consider adding a way for the user to specify the limits of the odd numbers logged to the console.

// Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

let count = 1;
let limit = 99
while(count <= limit) {
  if (Math.abs(count) % 2 !== 0){
    console.log(count);
  }
  count++;
}