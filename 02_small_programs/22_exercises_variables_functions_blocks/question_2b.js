// Question 2
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

let color = 'yellow';
let colors = ['red', 'green', 'blue'];

function updateColors(colors, color) {
  colors.push(color);
}

updateColors(colors);
console.log(colors);

/*

Line 12 invokes the updateColors function definition from line 8 and passes in a pointer to the array initialized to a global variable on line 6.

The function receives the pointer to the array as the first parameter variable. The function also has a placeholder parameter for another argument but nothing is received and thus it is ignored and has no bearing on operations. 

In the function body on line 9 the pointer to the array is referenced meaning the array is accessed directly. The .push() destructive method is invoked on the array and an argument is passed in to be added to the end of the array however the argument has the same name as the second parameter value thus the argument will reference that as a locally defined variable although no value was passed into the function but the local variable was initialized with the value: undefined. There is also a variable on line 5 that has the same name however the function shadows this and its value is blocked although it is a globally declared variable in the outer most scope and accessible to functions throught the program as long as it is not shadowed by a variable with the same name. 

On line 13 the console.log method is invoked and a reference to the pointer is passed in thus pointing to the address where the array is stored and outputting its value:

['red', 'green', 'blue', undefined];

*/