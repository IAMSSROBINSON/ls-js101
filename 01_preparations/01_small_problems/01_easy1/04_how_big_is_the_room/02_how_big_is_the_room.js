// Further Exploration
// Modify the program so that it asks the user for the input type (meters or feet). Compute for the area accordingly, and log it and its conversion in parentheses.


const readlineSync = require("readline-sync");

let length, width, squareMeters, method;
const SQUAREFEET = 10.7639;
const METERINFEET = 3.281;


console.log("\nThis program will print the area of the room in both square meters and square feet.\n\n");

method = +readlineSync.question("Which method will you use to enter your values:\n1: Meters\n2: Feet\n");

switch(method){
	case 1:
		squareMeters = meters();
		print(squareMeters);
	break;

	case 2:	
		squareMeters = feet();
		print(Math.ceil(squareMeters));
	break;

	default:
		console.log("\nWrong entry.\nEnd of program.")
}

function meters () {
	
	length = +readlineSync.question("\nPlease enter numerical length of room (meters): \n");
	width = +readlineSync.question("Please enter numerical width of room (meters): \n");
	
	return length * width;
}

function feet () {
	
	length = (+readlineSync.question("\nPlease enter numerical length of room (feet): \n")) / METERINFEET;
	width = (+readlineSync.question("Please enter numerical width of room (feet): \n")) / METERINFEET;
	
	return length * width;
}

function print (squareMeters) {
	console.log(`\nThe area of the room is ${parseFloat(squareMeters).toFixed(2)} square meters (${parseFloat(squareMeters * SQUAREFEET).toFixed(2)} square feet).\n\n`);
}

