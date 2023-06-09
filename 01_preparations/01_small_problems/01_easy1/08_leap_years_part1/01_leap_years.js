// Leap Years (Part 1)
// In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible by 4, unless the year is also divisible by 100. If the year is evenly divisible by 100, then it is not a leap year, unless the year is also evenly divisible by 400.

// Assume this rule is valid for any year greater than year 0. Write a function that takes any year greater than 0 as input and returns true if the year is a leap year, or false if it is not a leap year.

// Examples:
// isLeapYear(2016);      // true
// isLeapYear(2015);      // false
// isLeapYear(2100);      // false
// isLeapYear(2400);      // true
// isLeapYear(240000);    // true
// isLeapYear(240001);    // false
// isLeapYear(2000);      // true
// isLeapYear(1900);      // false
// isLeapYear(1752);      // true
// isLeapYear(1700);      // false
// isLeapYear(1);         // false
// isLeapYear(100);       // false
// isLeapYear(400);       // true


function isLeapYear (year) {

	if (year > 0) {
		if (year % 400 === 0) {
			return (year % 400 === 0);
		} else if (year % 100 === 0) {
			return !(year % 100 === 0);
		} else return (year % 4 === 0);
	}

	return 
}

console.log(isLeapYear(2015));     // false
console.log(isLeapYear(2100));     // false
console.log(isLeapYear(2400));     // true
console.log(isLeapYear(240000));   // true
console.log(isLeapYear(240001));   // false
console.log(isLeapYear(2000));     // true
console.log(isLeapYear(1900));     // false
console.log(isLeapYear(1752));     // true
console.log(isLeapYear(1700));     // false
console.log(isLeapYear(1));    		 // false
console.log(isLeapYear(100));   	 // false
console.log(isLeapYear(400));      // true



/*

Pseudocode:

Informal:
INPUT: year(int)
OUTPUT: true/false(bool)

leapYear: year === 0 : false;
leapYear: year > 0: divisible by 4 (no remainder) : true
learYear: year > 0: divisible by 100 (no remainder) : false
learYear: year > 0: divisible by 400 (no remainder) : true

Formal:
- START
- SET function isLeapYear
- IF year > 0
	- if year % 400 === 0, return true
	- else if year % 100 === 0, return false
	- else return % 4 === 0
- END


Convert to code:
*/