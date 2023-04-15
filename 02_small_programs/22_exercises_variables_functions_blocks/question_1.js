// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

let color = 'yellow'; // global declared and initialized to string primitive
let colors = ['red', 'green', 'blue']; // declared and initialized address of array object

function updateColors(colors) { // local param variable created, array received
  colors.push(color); // .push mutates value at original address, accesses global variable
}

updateColors(colors); // function invocation, array address passed in
console.log(colors); // prints mutated array: ['red', 'green', 'blue', 'yellow]

/*


*/
