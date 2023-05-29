let userScore = 0;
let computerScore = 0;
const validMoves = ["rock", "paper", "scissors"];
const readline = require("readline-sync");

function displayWinner(userMove, computerMove) {
  return (
    (userMove === "rock" && computerMove === "scissors") ||
    (userMove === "paper" && computerMove === "rock") ||
    (userMove === "scissors" && computerMove === "paper")
  );
}

while (true) {
  while (userScore < 3 && computerScore < 3) {
    console.log("Please choose your move: rock, paper or scissors");
    let userMove = readline.question();

    let randomMove = Math.floor(Math.random() * 3);
    let computerMove = validMoves[randomMove];
    console.log(computerMove);

    console.log("\n");
    console.log(`userMove: ${userMove}\ncomputerMove: ${computerMove}`);
    console.log("\n");

    if (displayWinner(userMove, computerMove)) {
      userScore += 1;
      console.log("User wins\n");
    } else if (userMove === computerMove) {
      console.log("Tied game\n");
    } else {
      computerScore += 1;
      console.log("Computer wins\n");
    }

    console.log(`userScore: ${userScore}\ncomputerScore: ${computerScore}`);

    let again;
    if (userScore === 3 || computerScore === 3) {
      console.log("Would you like to play again? y/n");
      again = readline.question();

      switch (again) {
        case "y":
          userScore = 0;
          computerScore = 0;
          break;

        case "n":
          return;

        default:
          break;
      }
    }
  }
}


/*
What do you want to do?
increase the score by +1 if a player wins that move

How?
reassign the value of the player that wins by + 1 when they win

But?
The variable values are resetting to zero each time the program restarts

How will you fix it?
loop the game restart if a score is not 3

*/