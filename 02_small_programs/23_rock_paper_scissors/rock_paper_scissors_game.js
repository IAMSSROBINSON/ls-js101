const READLINESYNC = require("readline-sync");
const MESSAGES = require("./message.json");
const VALID_CHOICES = ["rock", "paper", "scissors"];
const PLAYER_NAME = "Player:";
const COMPUTER_NAME = "Computer:";

// printer function
function printer(message) {
  console.log(`\n=> ${message}`);
}

function validateChoice(choice) {
  while (!VALID_CHOICES.includes(choice.toLowerCase())) {
    printer(`${MESSAGES["invalidChoice"]}`);
    choice = READLINESYNC.prompt();
  }
  return choice;
}

function getPlayersChoice() {
  printer(`${PLAYER_NAME}`);
  printer(`${MESSAGES["getSelection"]} ${VALID_CHOICES.join(", ")}`);
  let playersChoice = validateChoice(READLINESYNC.prompt());
  return playersChoice;
}

function getComputerChoice() {
  printer(`${COMPUTER_NAME}`);
  printer(`${MESSAGES["getSelection"]} ${VALID_CHOICES.join(", ")}`);
  let computerChoice =
    VALID_CHOICES[Math.floor(Math.random() * VALID_CHOICES.length)];
  console.log(computerChoice);
  return computerChoice;
}

function getWinner(playerMove, computerMove) {
  if (
    (playerMove === "rock" && computerMove === "scissors") ||
    (playerMove === "paper" && computerMove === "rock") ||
    (playerMove === "scissors" && computerMove === "paper")
  ) {
    return "Player wins!";
  } else if (
    (playerMove === "scissors" && computerMove === "rock") ||
    (playerMove === "rock" && computerMove === "paper") ||
    (playerMove === "paper" && computerMove === "scissors")
  ) {
    return "Computer wins!";
  } else {
    return "Its a tie";
  }
}

while (true) {
  printer(`${MESSAGES["welcome"]}`);
  let savePlayersChoice = getPlayersChoice();
  let saveComputerChoice = getComputerChoice();

  printer(`You chose: ${savePlayersChoice}`);
  printer(`Computer chose: ${saveComputerChoice}`);

  let saveWinner = getWinner(savePlayersChoice, saveComputerChoice);
  printer(saveWinner);

  printer(`${MESSAGES["playAgain"]}`);
  let savePlayAgain = READLINESYNC.prompt().toLowerCase();

  while (savePlayAgain[0] !== "y" && savePlayAgain[0] !== "n") {
    printer(`${MESSAGES["playAgainValidation"]}`);
    savePlayAgain = READLINESYNC.prompt().toLowerCase();
  }
  if (savePlayAgain[0] !== "y") {
    printer(`${MESSAGES['endOfGame']}`);
    break;
  }
}
