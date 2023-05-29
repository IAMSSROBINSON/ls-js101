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
  userMove = convertCharToString(userMove);
  computerMove = convertCharToString(computerMove);

  if (userMove === computerMove) {
    prompt(`The game is tied!`);
  } else if (
    (userMove === "rock" || userMove === "r") &&
    (computerMove === "scissors" ||
      computerMove === "s" ||
      computerMove === "lizard" ||
      computerMove === "l")
  ) {
    console.log("The User wins!");
  } else if (
    (userMove === "paper" || userMove === "p") &&
    (computerMove === "rock" ||
      computerMove === "r" ||
      computerMove === "spock" ||
      computerMove === "sp")
  ) {
    console.log("The User wins!");
  } else if (
    (userMove === "scissors" || userMove === "s") &&
    (computerMove === "paper" ||
      computerMove === "p" ||
      computerMove === "lizard" ||
      computerMove === "l")
  ) {
    console.log("The User wins!");
  } else if (
    (userMove === "lizard" || userMove === "l") &&
    (computerMove === "paper" ||
      computerMove === "p" ||
      computerMove === "spock" ||
      computerMove === "sp")
  ) {
    console.log("The User wins!");
  } else if (
    (userMove === "spock" || userMove === "sp") &&
    (computerMove === "rock" ||
      computerMove === "r" ||
      computerMove === "scissors" ||
      computerMove === "s")
  ) {
    console.log("The User wins!");
  } else {
    console.log("The Computer wins!");
  }
}

function convertCharToString(choice) {
  let stringToReturn;

  switch (choice) {
    case "r":
    case "rock":
      stringToReturn = "Rock";
      break;

    case "p":
    case "paper":
      stringToReturn = "Paper";
      break;

    case "s":
    case "scissors":
      stringToReturn = "Scissors";
      break;

    case "l":
    case "lizard":
      stringToReturn = "Lizard";
      break;

    case "sp":
    case "spock":
      stringToReturn = "Spock";
      break;
  }

  return stringToReturn.toLowerCase();
}

function createPlayer () {
  let score = 0;

  function increaseScore () {
    return score = score + 1;
  }

  function getScore () {
    return score;
  }

  return {
    increaseScore : increaseScore,
    getScore : getScore
  };
}

function getGrandWinner () {
  
}

// start the program with a condition that is true
// when we break out of this loop the program will stop
while (true) {

  let userPlayer = createPlayer();
  console.log(userPlayer.getScore());
  userPlayer.increaseScore();
  console.log(userPlayer.getScore());
  userPlayer.increaseScore();
  console.log(userPlayer.getScore());

  // ask user to choose rock, paper or scissors
  // .join() method accepts a delimiter to separate elements, returns string
  prompt(`Please choose your move: ${VALID_CHOICES.join(", ")}:`);
  let userMove = readline.question();

  // if the array does not include the userMove
  while (!VALID_CHOICES.includes(userMove)) {
    prompt(`Invalid Entry!\nPlease type: ${VALID_CHOICES.join(", ")}`);
    userMove = readline.question();
  }

  let randomIndex = randomNumber(0, ((VALID_CHOICES.length / 2) - 1));
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
