// How can you determine whether a given string ends with an exclamation mark (!)?

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false


/*

INPUT: "Come over here!"
OUTPUT: true, false

We are checking specifically for an exclamation mark at the end of a string !
  - is the character at the end of a given string an exclamation mark !
  - return as an expression evaluation

*/

function isLastCharExclamation (string) {

  return string[string.length - 1] === '!';
}

console.log(isLastCharExclamation(str1)); // true 
console.log(isLastCharExclamation(str2)); // false

/*




*/