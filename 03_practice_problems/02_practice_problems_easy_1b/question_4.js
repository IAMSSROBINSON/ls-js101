// Using the following string, create a new string that contains all lowercase letters except for the first character, which should be capitalized. (See the example output.)

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

/*

INPUT: "the Munsters are CREEPY and Spooky."
OUTPUT: "The munsters are creepy and spooky."

make all lowercase first


*/
let newString = munstersDescription[0].toUpperCase() + munstersDescription.slice(1).toLowerCase();
console.log(newString)
console.log(munstersDescription)