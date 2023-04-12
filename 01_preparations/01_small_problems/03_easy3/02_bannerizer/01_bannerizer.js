// Bannerizer
// Write a function that will take a short line of text, and write it to the console log within a box.

// Examples:

// Copy Code
// logInBox('To boldly go where no one has gone before.');
// will log on the console:

// Copy Code
// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+
// Copy Code
// logInBox('');
// +--+
// |  |
// |  |
// |  |
// +--+


function logInBox (string) {

  let plusSign = '+';
  let horizontalLine = '-';
  let verticalLine = '|';

  console.log(`${plusSign + horizontalLine.repeat(string.length+2) + plusSign}`);
  console.log(`${verticalLine + " ".repeat(string.length+2) + verticalLine}`);
  console.log(`${verticalLine + " " + string + " " + verticalLine}`);
  console.log(`${verticalLine + " ".repeat(string.length+2) + verticalLine}`);
  console.log(`${plusSign + horizontalLine.repeat(string.length+2) + plusSign}`);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');
logInBox('Launch School');
logInBox('The universe is change. Life is opinion.');
