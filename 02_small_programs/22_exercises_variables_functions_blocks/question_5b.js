// Question 5
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.


let color = 'purple';
let colors = ['red', 'green', 'blue'];

function addColor(colors, color) {
  colors.push(color);
  return colors;
}

function removeColor(colors) {
  color = colors.pop();
  return colors;
}

let newColors = removeColor(colors);


addColor(colors, color);
console.log(newColors);

/*

The console.log method invocation on line 23 should output: [ 'red', 'green', 'blue' ].
It logs the value of the argument variable newColors which is declared on line 19 and initialized to the return value of invoking the function removecolor and passing in a pointer to the array declared and initialized on line 7. The function declaration removeColor on line 14 initializes the array as a parameter value. Within the function body a globally defined variable is reassigned to the return value of invoking the .pop() method on the array which mutates the array by removing the last value from its list and assigning its value to the color global variable. When the array is returns from the function it only has 2 elements inside it and this is the value stored as the initialized value for the variable declared on line 19. 

On line 22 the addColor function is invoked and a pointer to the array is passed as the first argument (['red', 'green']) and the second argument is a reference to the color global variable who value was reassigned to be 'blue'(the element removed from the array). Inside the addColor function declaration on line 9 the arguements are received as parameter variables. The .push() method is invoked on the colors array and because .push() is destructive if mutates the caller by producing the side effect of adding the value referenced to the caller, essentially adding 'blue' back into the end of the array. The mutated array is returned to the caller but no stored. This doesn't matter too much as the array variable has global scope and thus on line 23 when the console.log method is invoked the argument passed in to be output to the console is a pointer to the mutated array, thus outputting: [ 'red', 'green', 'blue' ]

*/