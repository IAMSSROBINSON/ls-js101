// Question 2
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

let color = 'yellow'; // variable stores primitive string value
let colors = ['red', 'green', 'blue']; // variable stores address to array object

function updateColors(colors, color) { // array received, local variable created = undefined
  colors.push(color); // mutates array at address passed by adding default value of parameter: undefined
}

updateColors(colors); // function invocation, array address passed in
console.log(colors); // prints updated value at address: ['red', 'green', 'blue', 'undefined']

/*


*/