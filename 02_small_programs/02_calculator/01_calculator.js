// Write a program to ask a user for 2 numbers, add the numbers and print the result

const READLINE = require('readline-sync');

let number1 = +READLINE.question("\nPlease enter first number: \n");
console.log("First number:", number1);

let number2 = +READLINE.question("\nPlease enter second number: \n");
console.log("Second number:", number2);

let operators = +READLINE.question("\nSelect an arithmetic operator:\n1: Addition\n2: Multiplication\n3: Division\n4: Subtraction\n");

switch(operators){
	case 1:
		console.log(`${number1} + ${number2} = ${number1 + number2}`);
	break;

	case 2:
		console.log(`${number1} * ${number2} = ${number1 * number2}`);
	break;

	case 3:
		console.log(`${number1} / ${number2} = ${number1 / number2}`);
	break;

	case 4:
		console.log(`${number1} - ${number2} = ${number1 - number2}`);
	break;

	default:
		console.log("\nInvalid selection.\nEnd of program.");
		break;
}