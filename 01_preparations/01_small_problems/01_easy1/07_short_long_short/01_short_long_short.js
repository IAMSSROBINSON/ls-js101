// Short Long Short
// Write a function that takes two strings as arguments, determines the length of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. You may assume that the strings are of different lengths.

// Examples:

// shortLongShort('abc', 'defgh');    // "abcdefghabc"
// shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
// shortLongShort('', 'xyz');         // "xyz"


function shortLongShort (s1, s2) {

	let finalString;

	if (s1.length > s2.length) {
		finalString = s2 + s1 + s2;
	} else if (s2.length > s1.length) {
		finalString = s1 + s2 + s1;
	}

	return finalString;
}

console.log(shortLongShort('abc', 'defgh')); // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz")


/*

Pseudocode
Informal:

INPUT: 2 strings of varying length
OUTPUT: 1 string with specified operation performed

 - function receives two strings in parameter space
 - if the first string.length is greater than the second string then the second string is shortest: return a final string which is the result of concatenating s2+s1+s2
 - perform the opposite if the second string is longer than the first as the first string will be the shortest
 - the input values are strings and the return value one single string (not the string length)
 - Be sure to test that the function works as intended and predict the outcome prior to invoking the function

Formal:
- START
- SET a function: shortLongShort
- SET 2 parameter names for (string1, string2)
- IF string1.length > string2.length then string2 is shortest
	- SET finalString = s2 + s1 + s2;
- ELSE if the opposite is true: finalString = s1 + s2 + s1;
- RETURN finalString
- PRINT final string
- TEST by calling function and passing two string values
-END


Convert to code: 
*/