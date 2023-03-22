// Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

// Note: 1 square meter == 10.7639 square feet

// Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.

// Example:

// Enter the length of the room in meters:
// 10
// Enter the width of the room in meters:
// 7
// The area of the room is 70.00 square meters (753.47 square feet).

const readlineSync = require("readline-sync");

let length, width, squareMeters;
const SQUAREFEET = 10.7639;

console.log("\nThis program will print the area of the room in both square meters and square feet.\n\n");

length = +readlineSync.question("Please enter numerical length of room (meters): \n");
width = +readlineSync.question("Please enter numerical width of room (meters): \n");
squareMeters = length * width;

console.log(`\nThe area of the room is ${parseFloat(squareMeters).toFixed(2)} square meters ${parseFloat(squareMeters * SQUAREFEET).toFixed(2)} square feet).\n\n`);
