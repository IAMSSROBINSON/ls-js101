// Question 2
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

let num = 5;

function myFunc() {
  console.log(num);
  num = 10;
}

myFunc();
console.log(num);

/*

OUTPUT:
5
10

WHY:
On the final line of code the console.log() method is invoked and passes an argument of a reference to a variable declared on the first line of code. 

On the first line of code the variable declared with a let keyword is initialized to the primitive number value: 5. The variable is global because it was declared in the main program and outside of the confines of any scope. This means the value of the variable will be available throughout the entire program unless otherwise blocked. 

On the penultimate line of code a function is invoked and no argument is passed. The function executed is a function declaration from the second line of code. 

Inside the function body the first line of code invoked the console.log() method and passes in a reference to the variable from the first line of code to print its value to the console. The variable is accessible because it was declared in the outer scope and has no blocking features to the function. The output is therefore: 5

Again inside the function body on the second line of code the variable value is reassigned to number: 10. Again this is valid as the variable is accessed via its global scope to reference this new value. 

Thus on the final line of program code the console.log() method invocation references the new value that the variable references and outputs it to the console: 10.

*/