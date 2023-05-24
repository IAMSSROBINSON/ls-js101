let myVar = 1;

function myFunc () {

  myVar = 2;
}

myFunc();
console.log(myVar);

/*

OUTPUT:
2

WHY:
On the first line of code a variable with global scope as defined by the `let` keyword is declared and initialized to the primitive number value: 1.

On the penultimate line of code a function is invoked. The function invoked is a function declaration and this takes place on the second line of code. 

Inside the function body the variable from the first line of code is reassigned to reference a new primitive number value: 2. This is valid because variables declared with let or const in the outermost program scope are accessible within the scope of functions and blocks.

The final line of code invokes the console.log() method and passes in a reference to the value of the variable from the first line of code, thus printing its reassigned value to the console: 2.

*/