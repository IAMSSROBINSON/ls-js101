// Question 4
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

let color1 = 'purple'; // global primitive value
let color2 = 'pink'; // global primitive value
let colors = ['red', 'green', 'blue']; // pointer stores address to array object

function updateColors(colors, color) { // received array and primitive, localV created
  colors.push(color); // array mutated with 'purple' // array mutated with 'pink'
  return colors; // returns original array address to caller
}

let newColors = updateColors(colors, color1); // variable stores return from function, array address passed in, primitive1 passed in // newColors now points to colors
updateColors(newColors, color2); // function invocation passes in address to colors and 'pink'
console.log(colors); // mutated array value printed: ['red', 'green', 'blue', 'purple', 'pink']

/*


*/