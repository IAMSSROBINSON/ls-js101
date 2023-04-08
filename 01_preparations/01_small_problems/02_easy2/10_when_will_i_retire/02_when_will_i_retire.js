// Further Exploration
// What would happen if the new keyword wasn't used in defining the currentYear variable?

/*

TypeError: Date(...).getFullYear is not a function

*/


const READLINESYNC = require('readline-sync');

let currentAge;
let retirementAge;
let currentYear;

function prompter(msg) {
  return console.log(`\n=> ${msg}`);
}

function getRetirementYear(age, retireAge) {
   let difference = Number(retireAge) - Number(age);
  try {
    currentYear = Date().getFullYear();
  } catch(e){
    console.log(`\nerrorName:, ${e.name},\nerrorMessage:  ${e.message}`);
    currentYear = 2017;
  }
  
  let yearsToGo = difference;
  let retirementYear = currentYear + difference;

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

