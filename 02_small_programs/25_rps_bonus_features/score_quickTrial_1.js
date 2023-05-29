let userScore = 0;
let computerScore = 0;
const validMoves = ["rock", "paper", "scissors"];
const readline = require("readline-sync");

function playerWins(userMove, computerMove) {
  return (
    (userMove === "rock" && computerMove === "scissors") ||
    (userMove === "paper" && computerMove === "rock") ||
    (userMove === "scissors" && computerMove === "paper")
  );
}

function displayWinner (userMove, computerMove) {
  if (playerWins(userMove, computerMove)) {
    userScore += 1;
    console.log("User wins\n");
  } else if (userMove === computerMove) {
    console.log("Tied game\n");
  } else {
    computerScore += 1;
    console.log("Computer wins\n");
  }
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

    displayWinner(userMove, computerMove);

    console.log(`userScore: ${userScore}\ncomputerScore: ${computerScore}\n`);

    let again;
    if (userScore === 3 || computerScore === 3) {
      if (userScore === 3) {
        console.log(`You are the Grand Winner!\nuserScore: ${userScore}\ncomputerScore: ${computerScore}\n`);
      } else {
        console.log(`The Computer is the Grand Winner!\ncomputerScore: ${computerScore}\nuserScore: ${userScore}\n`);
      }
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