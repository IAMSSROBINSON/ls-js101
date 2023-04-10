# Car Loan Calculator 

A program informing users how much monthly repayments will be on a loan for a car.

<br>

## Plan

<br>

### PEDAC
A system for solving problems:

<br>

#### P: Problem
The program should allow the user to enter an amount they wish to loan e.g. 10000 / $10,000  

The user should be able to enter an annual rate of percentage (APR) e.g. 5 / 5%  

The user should be able to select the amount of years they will take to repay the loan e.g. 4 years  

When this information has been obtained and validated

The program will calculate how many months the user will repay the loan over 

The program will calculate how much the user must pay back in interest each month 

The program will calculate the total amount repayable by the end of the loan including interest

<br>

#### E: Examples
Translated to JavaScript, the formula with example inputs for data looks like this: 
<br>

```JavaScript
let apr = 5; // INPUT
const APR_DECIMAL = apr / 100; // annual percentage rate of interest expressed as a decimal number to use for calculations on values

const MONTHS_IN_YEAR = 12;
const MONTHLY_INTEREST_RATE_DECIMAL = APR_DECIMAL / MONTHS_IN_YEAR;

let loanDurationInYears = 4; // INPUT
const LOAN_DURATION_IN_MONTHS = loanDurationInYears * MONTHS_IN_YEAR;

let loanAmount = 10000; // INPUT

const MONTHLY_REPAYMENT = loanAmount *(MONTHLY_INTEREST_RATE_DECIMAL / (1 - Math.pow((1 + MONTHLY_INTEREST_RATE_DECIMAL), (- LOAN_DURATION_IN_MONTHS)))); // OUTPUT

const TOTAL_AMOUNT_REPAYABLE = MONTHLY_REPAYMENT * LOAN_DURATION_IN_MONTHS;

console.log(TOTAL_AMOUNT_REPAYABLE.toFixed(2)); // OUTPUT: 11163.11

console.log(MONTHLY_REPAYMENT.toFixed(2)); // OUTPUT: 232.56
```

<br>

##### EDGE CASES

OUTPUT: 
The outputs should be expressed as a $ amount with symbols e.g. 
`$(Math.round(230.29293570646584).toFixed(2) // $230.00`

INPUT: apr 
The user should input a whole number
If the user enters a decimal by accident instead of a whole number should the program validate this? e.g.
`if (apr % 2 !== 0){ // then ask the user to enter a whole number}`
- Interest rates are not always whole numbers however so should the program account for decimal interest rates instead? e.g. 5.5% apr
- Perhaps it doesn't matter whether it is a whole number or decimal as calculations will be successful either way


<br>

#### D: Data Structure
Data from user inputs will be stored in variables. 
Interest rates will be taken as whole numbers and converted by the program to decimal. Validation will need to be performed incase 

<br>

#### A: Algorithm
Pseudocode:
Informal:



Formal:



Flowchart:

<br>

#### C: Convert to code with purpose
