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

if (playerWins(userMove, computerMove)) {
  prompt(`User Wins!\n`);
  prompt(`UserMove: ${userMove} √`);
  prompt(`ComputerMove: ${computerMove}\n`);
} else if (playerWins(computerMove, userMove)) {
  prompt(`Computer Wins!\n`);
  prompt(`UserMove: ${userMove}`);
  prompt(`ComputerMove: ${computerMove} √\n`);
} else {
  prompt(`The game is Tied!\n`);
  prompt(`UserMove: ${userMove}`);
  prompt(`ComputerMove: ${computerMove}\n`);
}

/*

getWinner function:

- if (playerWins^) {
  console.log('User Wins!);
} else if (userMove === computerMove) {
  console.log('The game is tied!')
} else {
   console.log('Computer Wins!);
}

^playerWins(userMove, computerMove){} function will include an object structure
- the key/property will be the winning move :
- the value will be an array of potential moves that lose against that move
- we want to return an evaluation to true if
  - userMove/key matches and the value.includes(computerMove)


EXAMPLE:
```JavaScript
let userMove = 'paper';
let computerMove = 'rock';

// returns evaluation to true if winning combination is matched
// all winning combinations should be present in this function
function playerWins (userMove, computerMove) {
  let obj = {
    rock : ['scissors'],
    paper : ['rock'],
    scissors : ['paper']
  }

  return obj[userMove].includes(computerMove);
}

console.log(playerWins(userMove, computerMove));
```
*/

