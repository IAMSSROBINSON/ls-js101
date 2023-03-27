// Write a program that will ask for user's name. The program will then greet the user. If the user writes "name!" then the computer yells back to the user.

// Copy Code
// What is your name? Bob
// Hello Bob.
// Copy Code
// What is your name? Bob!
// HELLO BOB. WHY ARE WE SCREAMING?

const readlineSync = require("readline-sync");

(function greetUser () {

	let greeting = "Hello"

	let userName = readlineSync.question("Please enter your name:\n");

	if (userName[userName.length - 1] === "!") {
		userName = userName.slice(0, userName.length - 1);
		console.log(`${greeting.toUpperCase()} ${userName.toUpperCase()}. WHY ARE WE SCREAMING?`);
	} else {
		console.log(`${greeting} ${userName}.`);
	}
})();

/*

Pseudocode: 

- SET a self invoking: (function greetUser(){})();
- PROMPT the user for their name and save to variable: userName (install readline-sync and use .question())
- IF the last char of userName === "!": userName[userName.length-1]
- PRINT the greeting message in .toUpperCase()
	- take the "!" off of the userName when string interpolating: userName = userName.slice(0, userName.length-1)
- ELSE print the greeting including the name normally
- END

*/