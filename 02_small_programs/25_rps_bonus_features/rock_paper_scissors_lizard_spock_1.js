const READLINE = require("readline-sync");
const VALID_MOVES = ["rock", "paper", "scissors", "lizard", "spock"];
const VALID_MOVES_SHORT_FORM = ["r", "p", "s", "l", "sp"];

function prompt(message) {
  console.log(`=> ${message}`);
}

function returnLongFormMove (move) {
  if (VALID_MOVES.includes(move)) {
    return move;
  } else {
    move = VALID_MOVES[VALID_MOVES_SHORT_FORM.indexOf(move)];
  }
  return move;
}

function playerWins (userMove, computerMove) {
  let winningCombinations = {
    rock : ['scissors', 'lizard'],
    paper : ['rock', 'spock'],
    scissors : ['paper', 'lizard'],
    lizard : ['paper', 'spock'],
    spock : ['rock', 'scissors']
  };

  return winningCombinations[userMove].includes(computerMove);
}

function createPlayer () {
  let score = 0;

  function increaseScore () {
    score += 1;
  }

  function getScore () {
    return score;
  }

  return {
    increaseScore: increaseScore,
    getScore : getScore
  };
}

prompt(`Welcome to Rock, Paper, Scissors, Lizard, Spock!\n`);

prompt(`Your move:\nEnter rock, paper, scissors, lizard or spock:`);
let userMove = READLINE.question();
userMove = userMove.toLowerCase();

while (!VALID_MOVES.includes(userMove) &&
!VALID_MOVES_SHORT_FORM.includes(userMove)) {
  prompt(
    `Invalid move! Please enter a valid move:\n\nrock or r,\npaper or p,\nscissors or s,\nlizard or l,\nspock or sp,\n`
  );
  userMove = READLINE.question();
}

userMove = returnLongFormMove(userMove);

prompt(`Computers move:\nComputer will choose rock, paper, scissors, lizard or spock: \n`);
let computerMove = VALID_MOVES[Math.floor(Math.random() * VALID_MOVES.length)];
console.log(computerMove);

let userPlayer = createPlayer();
let computerPlayer = createPlayer();

if (playerWins(userMove, computerMove)) {
  prompt(`User Wins!\n`);
  prompt(`UserMove: ${userMove} √`);
  prompt(`ComputerMove: ${computerMove}\n`);
  userPlayer.increaseScore();
} else if (playerWins(computerMove, userMove)) {
  prompt(`Computer Wins!\n`);
  prompt(`UserMove: ${userMove}`);
  prompt(`ComputerMove: ${computerMove} √\n`);
  computerPlayer.increaseScore();
} else {
  prompt(`The game is Tied!\n`);
  prompt(`UserMove: ${userMove}`);
  prompt(`ComputerMove: ${computerMove}\n`);
}

prompt(`Scores:`);
prompt(`User: ${userPlayer.getScore()}`);
prompt(`Computer: ${computerPlayer.getScore()}\n`);

/*

Scores:

use a closure function to:
- keep score
- increaseScore(){}
- get score(){}

use encapsulation to return {increaseScore, getScore}
*/

