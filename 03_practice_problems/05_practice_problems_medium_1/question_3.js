// Alan wrote the following function, which was intended to return all of the factors of number:

function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}
console.log(factors(9))
// Alyssa noticed that this code would fail when the input is 0 or a negative number, and asked Alan to change the loop. How can he make this work without using a do/while loop? Note that we're not looking to find the factors for 0 or negative numbers, but we want to handle it gracefully instead of raising an exception or going into an infinite loop.


// Using a for loop this function returns the factors of a given number. If the number is 0 or less than 0 the number is returned:

function factor (number) {
  let factors = [];

  if (number <= 0) {
    return number;
  }

for (let index = 1; index <= number; index++) {
  
  if (number % index === 0) {
    factors.push(index);
  }
}
return factors;
}

console.log(factor(9));

/*


// Bonus: What is the purpose of number % divisor === 0 in that code?
/*

The purpose of `number % divisor === 0` in the code is that it ensures the factor will be a whole number as factors are only ever whole numbers. 
As the divisor variable decrements throughout the lifecycle of the loop it is the number that will have the potential to become a factor.

*/