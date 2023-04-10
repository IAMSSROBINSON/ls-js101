// require json messages into the program
const MESSAGES = require("./messages.json");

// require readline-sync into the program
const READLINE_SYNC = require("readline-sync");

// printer function
function printer (message) {
  console.log(`\n=> ${message}`);
}

printer(MESSAGES['introduction']);
