let myVar = [1];

function myFunc(myVar) {
  myVar[0] = 2;
}

myFunc();
console.log(myVar);

/*

OUTPUT:
This code will produce an error and will not output anything to the console.

WHY:
The function attempts to use bracket notation to reassign a value of a variable at index position: 0. This assumes that the value of the variable it references is an array. When the function is invoked however no variable is passed in and so the parameter variable declared in the function declaration has a default value of undefined. Undefined does not have a property, or index position: 0 and thus an error is thrown halting the program from progressing and the console.log method invocation on the final line of code is never read.

*/