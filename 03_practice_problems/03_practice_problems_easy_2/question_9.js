// Back in the stone age (before CSS), we used spaces to align things on the screen. If we have a 40-character wide table of Flintstone family members, how can we center the following title above the table with spaces?

let title = "Flintstone Family Members";

// work out the space remaining from 40 characters minus the string, divide it by 2 and use that number as empty space before the title:
  // 40 - title.length = 15
  // 15 / 2 = 7.5
  // Math.floor() = 7
  // loop to create 7 * emptyString " "
  // print:7 * emptyString " " + title


let paddingLeft = [];
for (let index = 0; index <= Math.floor((40 - title.length) / 2); index++) {
  paddingLeft.push(" ");
}
console.log(paddingLeft);
console.log(paddingLeft.length);
console.log(title.length);
console.log(paddingLeft.join(" ") + title + paddingLeft.join(" "));
console.log((paddingLeft.join(" ") + title).length);

// using padStart() to pad current string with another
// applied from start of current string
// let final string = thisStringVariable.padStart(finalTargetLength, 'PadWithThis')
// padStart(targetLength, padString)
const str1 = 'Flintstone Family Members';

console.log(str1.padStart(40, ' '));
// Expected output: "05"
