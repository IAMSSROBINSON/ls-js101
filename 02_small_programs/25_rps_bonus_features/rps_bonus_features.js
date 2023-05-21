// require the readline-sync library so we can take user input from input stream
const readline = require('readline-sync');

// convention to make global const variables uppercase & define top of program
// using an array in this way allows for adding extra choices later if required
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

// make output messages more distinctive
function prompt (message) {
  console.log(`=> ${message}`);
}

// get computer move, generate random number, use to select from array
function randomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// winner extracted to function for better separation of concerns
function getWinner (userMove, computerMove) {
  if (userMove === computerMove) {
    prompt(`The game is tied!`);
  } else if ((userMove === 'rock' && computerMove === 'paper') ||
      (userMove === 'paper' && computerMove === 'scissors') ||
      (userMove === 'scissors' && computerMove === 'rock')) {
    prompt(`The Computer wins!`);
  } else if ((computerMove === 'rock' && userMove === 'paper') ||
      (computerMove === 'paper' && userMove === 'scissors') ||
      (computerMove === 'scissors' && userMove === 'rock')) {
    prompt(`The User wins!`);
  }
}

// start the program with a condition that is true
// when we break out of this loop the program will stop
while (true) {

  // ask user to choose rock, paper or scissors
  // .join() method accepts a delimiter to separate elements, returns string
  prompt(`Please choose your move: ${VALID_CHOICES.join(', ')}:`);
  let userMove = readline.question();

  // if the array does not include the userMove
  while (!VALID_CHOICES.includes(userMove)) {
    prompt(`Invalid Entry!\nPlease type: ${VALID_CHOICES.join(', ')}`);
    userMove = readline.question();
  }

  let randomIndex = randomNumber(0, VALID_CHOICES.length - 1);
  let computerMove = VALID_CHOICES[randomIndex];
  prompt(computerMove);

  prompt(`Your move is: ${userMove}`);
  prompt(`Computers move is: ${computerMove}`);

  getWinner(userMove, computerMove);

  prompt(`Do you want to play again: y/n`);
  let restartProgram = readline.question().toLowerCase();
  while (restartProgram[0] !== 'n' && restartProgram[0] !== 'y') {
    prompt(`Please enter 'y' or 'no'`);
    restartProgram = readline.question().toLowerCase();
  }
  if (restartProgram[0] !== 'y') {
    break;
  }
}