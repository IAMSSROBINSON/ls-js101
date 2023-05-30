const READLINE = require("readline-sync");
const VALID_MOVES = ["rock", "paper", "scissors", "lizard", "spock"];
const VALID_MOVES_SHORT_FORM = ["r", "p", "s", "l", "sp"];

function prompt(message) {
  console.log(`=> ${message}`);
}

function shortFormToLongForm (move) {
  if (move.length > 2) {
    return move;
  } else {
    move = VALID_MOVES[VALID_MOVES_SHORT_FORM.indexOf(move)];
  }
  return move;
}

prompt(`Welcome to Rock, Paper, Scissors, Lizard, Spock!\n`);

prompt(`Your move: Enter rock, paper, scissors, lizard or spock: \n`);
let userMove = READLINE.question();
userMove = userMove.toLowerCase();

while (!VALID_MOVES.includes(userMove) &&
!VALID_MOVES_SHORT_FORM.includes(userMove)) {
  prompt(
    `Invalid move! Please enter a valid move:\nrock or r,\npaper or p,\nscissors or s,\nlizard or l,\nspock or sp,\n`
  );
  userMove = READLINE.question();
}

userMove = shortFormToLongForm(userMove);


console.log(userMove);

/*
Validate userMove for input:

no empty strings allowed
must be valid move
must be a string
lowercase

*/
