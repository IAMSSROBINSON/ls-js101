// Question 3
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

let num = 5;

function myFunc() {
  let num = 10;
}

myFunc();
console.log(num);


/*

OUTPUT:
5

WHY:
On the final line of code the conosole.log() method invocation passes in a reference to the value of the variable declared on the first line of code. 

The variable is declared with the let keyword in the outer most scope and thus has global availibility throughout the entire program. The variable is initialized to primitive number value: 5.

On the penultimate line of code a function is invoked. This function is the function declaration from the second line of code.

Inside the function body the function attempts to declare a variable with the let keyword but with the same name as a function with global scope. This is not allowed as JavaScript views this as an attempt to declare the same variable again. If it were a different name this would be fine. The program will not produce an error but the new variable declaration will be ignored.

The final line of code will thus output the original value of the variable declared on the first line of code: 5.

*/