// How can you determine whether a given string ends with an exclamation mark (!)?

function endsWithExclamationValidation (string) {
  return string[string.length-1];
}

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

console.log(endsWithExclamationValidation(str1) === '!'); // true
console.log(endsWithExclamationValidation(str2) === '!'); // false


// str1.endsWith('!'); // true
// str2.endsWith('!'); // false