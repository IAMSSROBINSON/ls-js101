// Using the following string, create a new string that contains all lowercase letters except for the first character, which should be capitalized. (See the example output.)

function newString (string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

console.log(newString(munstersDescription));
// The munsters are creepy and spooky.