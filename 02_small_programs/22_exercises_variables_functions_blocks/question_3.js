// Question 3
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

let color1 = 'purple'; // global primitive value stored
let color2 = 'pink'; // global primitive value stored
let colors = ['red', 'green', 'blue']; // variable stores address to array object

function updateColors(colors, color) { // receives *array[] and primitive
  colors.push(color); // array mutated with purple passed in, // array mutated with pink passed in
}

updateColors(colors, color1); // array address passed in, primitive1 passed in
updateColors(colors, color2); // array address passed in, primitive2 passed in
console.log(colors); // prints updated value at address: ['red', 'green', 'blue', 'purple', 'pink']

/*


*/