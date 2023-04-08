// When Will I Retire?
// Build a program that logs when the user will retire and how many more years the user has to work until retirement.

// Example:
// What is your age? 30
// At what age would you like to retire? 70

// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!

/*

PEDAC

P:
INPUT: age(int)e.g. 22
OUTPUT: currentYear, retirementYear(currentYear + (age - retirementAge)), yearsToGo(age - retirementAge)

a function will ask the user for their age
the function will ask what age the user would like to retire
the function will work out the different between the users age and the age the user would like to retire
the function will get the current year
the function will add the difference to the current year to produce the retirement year
the function will log the difference as how many years to go until retirement

E:
age: 22
retirementAge: 40
difference: 18
currentYear: 2023
retirementYear: (currentYear + difference) 2041
yearsToGo: 18

EDGE CASES:
- What if empty string entry for input?
- What if 0 entry input?
- What if entry is not a Number?
- What if negative number entered?
- What if the retirement age is less than current age?

D:
function will perform calculations
values will be stored in variables

A:
Informal:
prompt the user for their age and save it to a variable.
prompt the user for their retirement age and save to a variable.
send these values to a function
function works out the difference
function states the current year from new Date object
function returns output string
caller prints output string

Formal:

START
- PROMPT user for currentAge
  - npm i readline-sync
  - const READLINESYNC = require('readline-sync');
  - +prompt, unary operator(+) to convert inputstream entry to Number
    - trimStart() only works on Strings
    - convert to Number() when required for calculation
- SET variable to currentAge
- PROMPT user for retirementAge
- SET variable to retirementAge
- PASS currentAge, retirementAge to function
- SET function getRetirementYear
- SET variable: difference (currentAge - retirementAge)
- SET variable currentYear: = new Date(getFullYear());
- SET variable retirementYear: currentYear + difference;
- SET variable: yearsToGo = difference;
- PRINT return output string interpolation to caller
END

C:
Convert to code with purpose:

*/

const READLINESYNC = require('readline-sync');

let currentAge;
let retirementAge;

function prompter(msg) {
  console.log(`\n=> ${msg}`);
}

function getRetirementYear(age, retireAge) {
  const difference = Number(retireAge) - Number(age);
  const currentYear = new Date().getFullYear();
  const yearsToGo = difference;
  const retirementYear = currentYear + difference;

  return (`It's ${currentYear}. You will retire in ${retirementYear}. \nYou have only ${yearsToGo} years of work to go!`);
}

prompter('What is your age?:');
currentAge = READLINESYNC.prompt();

while (currentAge.trimStart() === '' || currentAge === '0' || Number.isNaN(Number(currentAge)) || currentAge <= '0') {
  prompter('Please enter your current age:');
  currentAge = READLINESYNC.prompt();
}

prompter('At what age would you like to retire?:');
retirementAge = READLINESYNC.prompt();

while (retirementAge.trimStart() === '' || retirementAge === '0' || Number.isNaN(Number(retirementAge)) || retirementAge <= '0' || retirementAge < currentAge) {
  prompter('Please enter what age would you like to retire? (it must be greater than your current age):');
  retirementAge = READLINESYNC.prompt();
}

prompter(getRetirementYear(currentAge, retirementAge));


/*

OUTPUT:

=> What is your age?:
> 30

=> At what age would you like to retire?:
> 70

=> It's 2023. You will retire in 2063. 
You have only 40 years of work to go!

*/