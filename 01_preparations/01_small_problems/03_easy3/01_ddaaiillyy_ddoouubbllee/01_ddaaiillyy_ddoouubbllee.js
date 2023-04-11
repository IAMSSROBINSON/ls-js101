// ddaaiillyy ddoouubbllee
// Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.

function crunch (string) {
let newString = [];

if (string.trimStart() === "" || string.length === 1 || typeof string !== 'string') {
  return string;
}

newString.push(string[0]);

for (let index = 0; index < string.length; index++) {
  if (string[index] !==  newString[newString.length-1]) {
    newString.push(string[index]);
  }
  
}

return newString.join("");
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""
