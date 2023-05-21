// Question 3
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

let color1 = 'purple';
let color2 = 'pink';
let colors = ['red', 'green', 'blue'];

function updateColors(colors, color) {
  colors.push(color);
}

updateColors(colors, color1);
updateColors(colors, color2);
console.log(colors);

/*

Line 13 invokes the updateColors function and passes in a pointer to the array declaration and initialization on line 7 as its first argument and a reference to the value declared and initialized to the variable on line 1. The function declaration itself on line 9 receives the parameters and in the function  body on line 10 the colors array is mutated using the .push() method invocation and the value of the local variable color('purple') is added to the end of the array as a string element. The array is updated because the method is destructive and the pointer to the array is a global variable defined in the outer most scope and thus is accessible by the function through the parameter pointer and also without thus not return statement need to present to mutate the array.

On line 14 this process is repeated with a reference to a new second argument / color ('pink') and thus the same process occurs but with the new value being added to the end of the array though the .push method invocation / mutation of the array object.

Line 15 invokes the console.log method and passes in a reference to the pointer variable and thus points to the twice updated array outputting the value stored there: 

['red', 'green', 'blue', 'purple', 'pink];

*/