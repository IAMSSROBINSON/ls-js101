/***************************** VARIABLES ********************************/
const READLINE = require("readline-sync");

const VALID_MOVES = ["rock", "paper", "scissors", "lizard", "spock"];
const VALID_MOVES_SHORT_FORM = ["r", "p", "s", "l", "sp"];
const GRAND_WINNING_SCORE = 3;

const userPlayer = createPlayer();
const computerPlayer = createPlayer();

/**************************** FUNCTIONS ********************************/

function prompt(message) {
  console.log(`=> ${message}`);
}

function isValidMove (move) {
  return VALID_MOVES.includes(move) || VALID_MOVES_SHORT_FORM.includes(move);
}

function returnLongFormMove(move) {
  if (VALID_MOVES.includes(move)) {
    return move;
  } else {
    move = VALID_MOVES[VALID_MOVES_SHORT_FORM.indexOf(move)];
  }
  return move;
}

function playerWins (userMove, computerMove) {
  let winningCombinations = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["paper", "spock"],
    spock: ["rock", "scissors"],
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

  function resetScore () {
    score = 0;
  }

  return {
    increaseScore: increaseScore,
    getScore: getScore,
    resetScore: resetScore
  };
}

function displayUserWins (userPlayer, userMove, computerMove) {
  console.log(`\n`);
  prompt(`User Wins!`);
  prompt(`UserMove: ${userMove} √`);
  prompt(`ComputerMove: ${computerMove}\n`);
  userPlayer.increaseScore();
}

function displayComputerWins (computerPlayer, computerMove, userMove) {
  console.log(`\n`);
  prompt(`Computer Wins!`);
  prompt(`UserMove: ${userMove}`);
  prompt(`ComputerMove: ${computerMove} √\n`);
  computerPlayer.increaseScore();
}

function displayTiedGame (userMove, computerMove) {
  prompt(`The game is Tied!\n`);
  prompt(`UserMove: ${userMove}`);
  prompt(`ComputerMove: ${computerMove}\n`);
}

function displayScores (userPlayer, computerPlayer) {
  prompt(`Scores:`);
  prompt(`User: ${userPlayer.getScore()}`);
  prompt(`Computer: ${computerPlayer.getScore()}\n`);
}

/**************************** MAIN PROGRAM ********************************/

prompt(`Welcome to Rock, Paper, Scissors, Lizard, Spock!\n`);

while (true) {
  prompt(`Your move:\nEnter rock, paper, scissors, lizard or spock:`);
  let userMove = READLINE.question();
  userMove = userMove.toLowerCase();

  while (!isValidMove(userMove)) {
    prompt(
      `Invalid move! Please enter a valid move:\n\nrock or r,\npaper or p,\nscissors or s,\nlizard or l,\nspock or sp\n`
    );
    userMove = READLINE.question();
  }

  userMove = returnLongFormMove(userMove);

  prompt(
    `Computers move:\nComputer will choose rock, paper, scissors, lizard or spock:`
  );
  let computerMove =
    VALID_MOVES[Math.floor(Math.random() * VALID_MOVES.length)];
  prompt(computerMove);

  if (playerWins(userMove, computerMove)) {
    displayUserWins(userPlayer, userMove, computerMove);
  } else if (playerWins(computerMove, userMove)) {
    displayComputerWins(computerPlayer, computerMove, userMove);
  } else {
    displayTiedGame(userMove, computerMove);
  }

  displayScores(userPlayer, computerPlayer);

  if (userPlayer.getScore() === GRAND_WINNING_SCORE) {
    prompt(`You Won Best Of 5 Games! You are the Grand Winner!`);
    userPlayer.resetScore();
    computerPlayer.resetScore();
  } else if (computerPlayer.getScore() === GRAND_WINNING_SCORE) {
    prompt(`Computer Won Best Of 5 Games! Computer is the Grand Winner!`);
    userPlayer.resetScore();
    computerPlayer.resetScore();
  }

  prompt(`Would you like to play again? y/n`);
  let answer = READLINE.question();
  answer = answer.toLowerCase();
  while (!['y', 'yes', 'n', 'no'].includes(answer)) {
    prompt(`Invalid entry! Please enter y) yes or n) no`);
    answer = READLINE.question();
    answer = answer.toLowerCase();
  }
  if (answer[0] !== 'y') {
    prompt(`Thanks for playing Rock-Paper-Scissors-Lizard-Spock!`);
    break;
  }
}

/**************************** END OF PROGRAM ********************************/