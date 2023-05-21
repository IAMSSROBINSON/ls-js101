// Question 4
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

let color1 = 'purple';
let color2 = 'pink';
let colors = ['red', 'green', 'blue'];

function updateColors(colors, color) {
  colors.push(color);
  return colors;
}

let newColors = updateColors(colors, color1);
updateColors(newColors, color2);
console.log(colors);

/*

Output should be: ['red', 'green', 'blue', 'purple', 'pink']

Line 14 declares a new global variable and initializes it with the return value from invoking the updateColors function and passing in a pointer to the colors array on line 7 and a reference to the colors1 variable on line 5. The updateColors function receives these arguments, the array is a pointer to the parameter value will still point to the array directly and the other parameter value is initialized as a local variable with the value of the argument passed in. In the function body on line 10 the .push() destructive array method is invoked on the array and the value of the local variable is added to the end of the array(adding: 'purple'). Line 11 sees a point to the mutated array being returned to the function caller on line 14 and initialized as stated to the variable value newColors. 

Line 15 invokes the updateColors function again but this time passes a reference to the value stored in the variable on line 14 and also a reference to a new color value in color2('pink'). The newColors variable is a pointer which means it stores an address in the computer memory where the array is stored and thus the function invocation mutates the array by adding the color pink to the end of the array and returning the updates / mutated array. 

The console.log method invocation on line 16 will therefore output the twice mutated array value: ['red', 'green', 'blue', 'purple', 'pink']. It might be important to mention no shadowing is occuring with the references to the array. The value being passed around is a pointer to the array object and all references and sub-references to it go to the same address in memory to mutate the array. Variables colors(on line 7 and newColors on line 14 are referring to the same array although the variables are at different address the array they point to is not).

*/