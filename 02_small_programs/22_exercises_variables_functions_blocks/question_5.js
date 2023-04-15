// Question 5
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.


let color = 'purple'; // global variable declared and initialized to primitive string
let colors = ['red', 'green', 'blue']; // pointer saves address to array object

function addColor(colors, color) { // array address received, 'blue' received
  colors.push(color); // original array mutated, 'blue' pushed
  return colors; // return address to original array
}

function removeColor(colors) { // array received
  color = colors.pop(); // global primitive reassigned: 'blue', array mutated 'blue' removed
  return colors; // address to ['red', 'green'] returned to caller
}

let newColors = removeColor(colors);
// new variable stores return from function invocation, array address passed in
// stores pointer to, mutated array value: ['red', 'green'] at original address

addColor(colors, color); // function invocation, array address passed in, 'blue' passed in
console.log(newColors); // new colors points to original array address which was just mutated
// prints: ['red', 'green', 'blue']

/*


*/