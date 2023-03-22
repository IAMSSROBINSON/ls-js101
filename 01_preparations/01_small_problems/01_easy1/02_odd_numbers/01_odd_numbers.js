// Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

console.log("\nOdd numbers from 1 - 99\n");
for(let i = 1; i <= 99; i++){
	if(i % 2 === 1){
		console.log(`${i}`);
	}
}













/*

PEDAC

P: 
	- log / print / console.log
	- ODD numbers from 1 to and including 99
	- each number should be on its own line: 


E: 
	1
	2
	3 
	4 ect
	- Edge cases: Each number needs to print on a newline - how will this be done:
		- use: \n 
		- if using a loop this will print to a new line each time (no need for \n)


D:
	- use a for loop
	- lowerbound(1), while lowerbound(1) is less than or equal to upperbound(99), increment lowerbound(1) by 1


A:
	- START
	- PRINT introduction to the program
	- run for loop with base case, conditional(upperbound), increment operator
	- execute IF statements inside loop body
		-	IF condition: indexValue % 2 === 1
		- then PRINT the indexValue
	- END


C:
	```JavaScript
	for(let i = 1; i <= 99; i++){
	if(i % 2 === 1){
		console.log(`${i}`);
	}
}
	```

*/