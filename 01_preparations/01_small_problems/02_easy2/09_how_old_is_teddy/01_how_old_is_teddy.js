// How Old is Teddy?
// Build a program that randomly generates Teddy's age, and logs it to the console. Have the age be a random number between 20 and 120 (inclusive).

// Example Output:
// Teddy is 69 years old!


/*

PEDAC

P:
INPUT: self invoking function calls random number between 20 (lowerBound) and 120(upperBound)
OUTPUT: console.log(`Teddy is ${69} Years old!`);

The program should be a self invoking function that generates a new random number each time it runs. The random number should be between 20 and 120. 
When the random number is generated it should be saved to a variable and that expression should be used with string interpolation to output a message including its value.

E:
Function calls itself on program loading
Random number is generated: 22 and saved to variable teddyAge
console.log uses the variable in output string: `Teddy is ${teddyAge} Years old!`
Output string is: `Teddy is 22 Years old!`
Program ends

D:
Data structure that the random number will be stored in is a let variable as the value of the variable will change with each new run of the program

A:

pseudocode

Informal:
Create a self invoking function getTeddyAge. Inside the function create a variable to store the teddysAge. Assign the value to a Math.random() method that is between 20 and 120. Math.random() generates a random number between 0 and 1 (but not 1 exclusively(less than 1)) so you need to figure out how to start the lowerBound at 20 and upperBound 120 with a calculation - do some testing to figure it out by logging random values to the console. Once the value has been saved to a variable at the same time output a string using the value within it stating the teddysAge. 

Edge Cases:
- Math.random() only generates a decimal number between 0 and 1: The number should be a positive int
- making sure that the random number generated is not lower than 20 but can be 20 
- making sure that the random number is not higher than 120 but can be 120

Formal:
- START
- SET a self invoking function: (getTeddysAge(){})();
- SET a variable: let teddyAge = 0;
- CREATE: while (teddysAge < 20){// then re-assign variable and call for random number generation again}
- ASSIGN teddyAge to result of method: Math.random()
- USE: Math.floor to round random number down to nearest int, upperBound is 120 so will need to round down from 121 upperBound so that 120 becomes possible
- PRINT: console.log(`Teddy is ${teddyAge} Years old!`);
- END

C:

Convert to code with purpose:

*/

(function getTeddyAge () {
  let teddyAge = 0;
  while (teddyAge < 20){
    teddyAge =  Math.floor(Math.random() * 121);
  }
  console.log(`Teddy is ${teddyAge} Years old!`);
})();

// edge case: prints random whole number
// edge case: number is never less than 20 
// edge case: number is never greater than 120
// edge case: whole number 20 achieved 
// edge case: whole number 120 achieved 