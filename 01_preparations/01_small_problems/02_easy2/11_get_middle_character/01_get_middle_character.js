// Get Middle Character
// Write a function that takes a non-empty string argument and returns the middle character(s) of the string. If the string has an odd length, you should return exactly one character. If the string has an even length, you should return exactly two characters.

// Examples:
// centerOf('I Love JavaScript'); // "a"
// centerOf('Launch School');     // " "
// centerOf('Launch');            // "un"
// centerOf('Launchschool');      // "hs"
// centerOf('x');                 // "x"

/*

PEDAC

P:
A function receives an argument that is a string (not-empty).
If the strings length is odd then it will have a single middle character.
If the strings length is even then it will have 2 characters deemed to be the middle characters.

E:
INPUT: "hello"
  - length: 5
  - middle number: 3
OUTPUT: "l"
  - string[index]: 2

INPUT: "goodbyes"
OUTPUT: "db"

EDGE CASES: 
- what is a number is sent to the function
- what if an empty string is sent to the function
- are spaces within the string counted as characters or not
- what if the string is only 1 char in length

D: 
Data will be represented as string arguments sent to the function as arguments and thus will occupy parameter local variable status

A:
Informal:
The main function will be called and the string argument supplied.
The argument will be validated to make sure that it is not empty. If it is empty then the argument will be returned.
The argument will be validated to make sure that it is a String dataType. If it is not a string then the argument will be returned.
The length of the string will be determined and stored in a variable.
If the string length is 1 then return that string.
If the string length is odd then divide the length by 2 and use that value to return the string[index].
If the string length is even then divide the value by 2 and round down to get the first middle char to return and use the same equation +1 to get the second middle value. Adjust the formula for zero indexing if storing these values in a variable then concatenate the strings as it is easier to return that way.

Formal:
START
- SET a function: centerOf(){}
- PASS in string argument example: // centerOf('I Love JavaScript'); // "a" 
- if typeof string !== 'string' return string
- if string.length.trimStart() === 0 return string
- if string.length === 1 return string
- SET a variable to save the middle chars of the string: let middleChar;
- if the string.length % 2 === 0 then the string is even so the middle two chars need to be returned
  - return (string[(Math.floor(string.length / 2))] + string[(Math.floor(string.length / 2))+1])
- if the string.length % 2 === 1 then the string is odd so a single char needs to be returned
  - return string[string.length / 2]
- spaces are counted as chars so if that is the middle char of a string then it will be returned as such
- PRINT the return from the caller to confirm output is as expected
END

C:
Convert to code with purpose:

*/

function centerOf(string) {
  if (typeof string !== "string") {
    return string;
  } else if (string.length === 0 || string.trimStart() === "") {
    return string;
  } else if (string.length === 1) {
    return string;
  }

  if (string.length % 2 !== 0) {
    return string[Math.floor(string.length / 2)];
  } else if (string.length % 2 === 0) {
    return `${string[string.length / 2 - 1]}${string[string.length / 2]}`;
  }
}

console.log(centerOf("I Love JavaScript")); // "a"
console.log(centerOf("Launch School")); // " "
console.log(centerOf("Launch")); // "un"
console.log(centerOf("Launchschool")); // "hs"
console.log(centerOf("x")); // "x"
