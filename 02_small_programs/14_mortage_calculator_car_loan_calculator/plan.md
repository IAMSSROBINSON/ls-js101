# Car Loan Calculator 

## Plan

<br>

### PEDAC

#### P:

The program should allow the user to enter an amount they wish to loan e.g. 10000 / $10,000  

The user should be able to enter an annual rate of percentage (APR) e.g. 5 / 5%  

The user should be able to select the amount of years they will take to repay the loan e.g. 4 years  

When this information has been obtained and validated

The program will calculate how many months the user will repay the loan over 

The program will calculate how much the user must pay back in interest each month 

The program will calculate the total amount repayable by the end of the loan including interest

<br>

E:

Translated to JavaScript, the formula with example inputs for data looks like this: 
<br>

```JavaScript
let apr = 5; // userInput
const APRDECIMAL = apr / 100; // annual percentage rate of interest expressed as a decimal number to use for calculations on values

const MONTHSINYEAR = 12;
const MONTHLYINTERESTRATEDECIMAL = APRDECIMAL / MONTHSINYEAR;

let loanDurationInYears = 4; // userInput
const LOANDURATIONINMONTHS = loanDurationInYears * MONTHSINYEAR;

let loanAmount = 10000; // userInput

const MONTHTLYREPAYMENT = loanAmount *(MONTHLYINTERESTRATEDECIMAL / (1 - Math.pow((1 + MONTHLYINTERESTRATEDECIMAL), (- LOANDURATIONINMONTHS))));

console.log(MONTHTLYREPAYMENT); // 230.29293570646584
```


