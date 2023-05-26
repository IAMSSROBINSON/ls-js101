// Back in the stone age (before CSS), we used spaces to align things on the screen. If we have a 40-character wide table of Flintstone family members, how can we center the following title above the table with spaces?

let title = "Flintstone Family Members";
let leftMargin = (40 - title.length) / 2;

let centredString = " ".repeat(leftMargin) + title + " ".repeat(leftMargin);
console.log(centredString)

let padStartString = title.padStart(leftMargin + title.length);w
console.log(padStartString)

