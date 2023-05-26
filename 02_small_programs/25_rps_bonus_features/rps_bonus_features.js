// require the readline-sync library so we can take user input from input stream
const readline = require("readline-sync");

// convention to make global const variables uppercase & define top of program
// using an array in this way allows for adding extra choices later if required
const VALID_CHOICES = [
  "rock",
  "paper",
  "scissors",
  "lizard",
  "spock",
  "r",
  "p",
  "s",
  "l",
  "sp",
];

// make output messages more distinctive
function prompt(message) {
  console.log(`=> ${message}`);
}

// get computer move, generate random number, use to select from array
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// winner extracted to function for better separation of concerns
function getWinner(userMove, computerMove) {
  if ((userMove[0] || userMove === "sp" || userMove === "spock" ) === (computerMove[0] || computerMove === "sp" || computerMove === "spock" )) {
    prompt(`The game is tied!`);
  } else if (
    userMove === "rock" ||
    ("r" && computerMove === "paper") ||
    "p" ||
    userMove === "paper" ||
    ("p" && computerMove === "scissors") ||
    "s" ||
    userMove === "scissors" ||
    ("s" && computerMove === "rock") ||
    "r" ||
    userMove === "rock" ||
    ("r" && computerMove === "lizard") ||
    "l" ||
    userMove === "lizard" ||
    ("l" && computerMove === "paper") ||
    "p" ||
    userMove === "lizard" ||
    ("l" && computerMove === "spock") ||
    "sp" ||
    userMove === "spock" ||
    ("sp" && computerMove === "rock") ||
    "r" ||
    userMove === "spock" ||
    ("sp" && computerMove === "scissors") ||
    userMove === "scissors" ||
    ("s" && computerMove === "lizard") ||
    "l" ||
    userMove === "paper" ||
    ("p" && computerMove === "spock") ||
    "sp"
  ) {
    prompt(`The Computer wins!`);
  } else if (
    computerMove === "rock" ||
    ("r" && userMove === "paper") ||
    "p" ||
    computerMove === "paper" ||
    ("p" && userMove === "scissors") ||
    "s" ||
    computerMove === "scissors" ||
    ("s" && userMove === "rock") ||
    "r" ||
    computerMove === "rock" ||
    ("r" && userMove === "lizard") ||
    "l" ||
    computerMove === "lizard" ||
    ("l" && userMove === "paper") ||
    "p" ||
    computerMove === "lizard" ||
    ("l" && userMove === "spock") ||
    "sp" ||
    computerMove === "spock" ||
    ("sp" && userMove === "rock") ||
    "r" ||
    computerMove === "spock" ||
    ("sp" && userMove === "scissors") ||
    computerMove === "scissors" ||
    ("s" && userMove === "lizard") ||
    "l" ||
    computerMove === "paper" ||
    ("p" && userMove === "spock") ||
    "sp"
  ) {
    prompt(`The User wins!`);
  }
}

function convertCharToString(choice) {
  let stringToReturn;

  switch (choice) {
    case "r":
      stringToReturn = "Rock";
      break;

    case "p":
      stringToReturn = "Paper";
      break;

    case "s":
      stringToReturn = "Scissors";
      break;

    case "l":
      stringToReturn = "Lizard";
      break;

    case "sp":
      stringToReturn = "Spock";
      break;

    default:
      stringToReturn = choice;
  }

  return stringToReturn.toLowerCase();
}

// start the program with a condition that is true
// when we break out of this loop the program will stop
while (true) {
  // ask user to choose rock, paper or scissors
  // .join() method accepts a delimiter to separate elements, returns string
  prompt(`Please choose your move: ${VALID_CHOICES.join(", ")}:`);
  let userMove = readline.question();

  // if the array does not include the userMove
  while (!VALID_CHOICES.includes(userMove)) {
    prompt(`Invalid Entry!\nPlease type: ${VALID_CHOICES.join(", ")}`);
    userMove = readline.question();
  }

  let randomIndex = randomNumber(0, VALID_CHOICES.length / 2 - 1);
  let computerMove = VALID_CHOICES[randomIndex];
  prompt(computerMove);

  prompt(`Your move is: ${convertCharToString(userMove)}`);
  prompt(`Computers move is: ${convertCharToString(computerMove)}`);


  getWinner(userMove, computerMove);

  prompt(`Do you want to play again: y/n`);
  let restartProgram = readline.question().toLowerCase();
  while (restartProgram[0] !== "n" && restartProgram[0] !== "y") {
    prompt(`Please enter 'y' or 'no'`);
    restartProgram = readline.question().toLowerCase();
  }
  if (restartProgram[0] !== "y") {
    break;
  }
}
