// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

let num = 5;

function myFunc() {
  num = 10;
}

myFunc();
console.log(num);

/*

OUTPUT:
10

WHY:

On the last line of code the console.log method is invoked and a reference to the variable declared on the first line of code is passed in as its argument to print its value to the console. 

The variable on the first line of code is initilized to the primitive number value: 5. The variable is declared with the let keyword outside of the confines of any scope and thus has global scope availibility and can be used throughout the entire program whether inside of a block or not. 


On the penultimate line of code a function in invoked and no argument is passed into the function. 

Within the function body a reassignment of the global variables value occurs. This is valid as global variables declared in an outer scope are accessibility within the inner scope of a function.

Thus on the final line of code the value of the variable passed in references the new value of the variable and outputs it to the console: 10.

*/
