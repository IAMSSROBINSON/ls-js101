// Multiples of 3 and 5
// Write a function that computes the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

// You may assume that the number passed in is an integer greater than 1.

function multisum (number) {
	let sum = 0;
	for (let i = 1; i <= number; i++) {
		if(i % 3 === 0 || i % 5 === 0){
			sum += i;
		};
	}
	return sum;
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168


/*

Pseudocode:


Informal:
P:
- Create a function that receives a number (given or user generated?)
- The function will calculate the sum of series up to and including the given number starting from a count of 1 => that are multiples of 3 or 5
- A multiple is a number you get when you multiply a certain number by an integer
e.g. 
3: 3, 6, 9, 12, 15, 18, = 63
5: 5, 10, 15, 20, = 50
multiple of 3 or 5 so only one 15 should count towards the sum

EDGE CASES: 
What if multiple is the same for 3 or 5, how to add it only once ?
What if number given is < 1 ?
What if more than one number is received by the function ?
What if typeof(number) !== "number" ?

E:
number = 20;
Possible numbers: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
Multiples of 3 from Possible numbers: 3, 6, 9, 12, 15, 18
	1 * 3 = 3
	2 * 3 = 6
	3 * 3 = 9
	4 * 3 = 12
	5 * 3 = 15
	6 * 3 = 18
	less than number(20)

Multiples of 5 from Possible numbers: 5, 10, 15, 20
	1 * 5 = 5
	2 * 5 = 10
	3 * 5 = 15
	4 * 5 = 20
	less than number(20)

Multiples in order they occur: 3 + 5 + 6 + 9 + 10 + 12 + 15! + 18 + 20 = 98
! 15 is an edge case since it is a multiple of 3 and 15, the function will have to execute an OR operation at this point

D:
A loop could be used to identify all numbers upto and including given number, 1(lowerBound), number(upperBound)
if i % 3 === 0 OR(||) i % 5 === 0
sum += [i]


A: Formal:

- START
- generate upperBound number and pass to function (user generated or otherwise)
- SET function multisum () {}
- receive number in function parameter
- SET sum variable as 0;
- loop from i = 1, while 1 <= number: i++
- if (number[i] % 3 === 0 or number[i] % 5 === 0) {
- sum += [i]
- }
- RETURN sum to caller
- PRINT result
- END


C:
Convert to code:

*/

