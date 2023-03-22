// Log all even numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

let lowerBound = 1;

while (lowerBound <= 99) {
	if(lowerBound % 2 === 0){

		console.log(lowerBound);
	}
	lowerBound++;
}





// Alternative solution:

// for (let number = 1; number < 100; number += 1) {
//   if (number % 2 === 1) {
//     continue;
//   }

//   console.log(number);
// }