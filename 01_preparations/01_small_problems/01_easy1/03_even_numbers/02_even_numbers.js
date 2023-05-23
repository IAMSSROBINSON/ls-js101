// Log all even numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

let base = 1;
let limit = 99;
while (base <= limit) {
  if (Math.abs(base) % 2 === 0) {
    console.log(base);
  }
  base++;
}