let myVar = [1];

function myFunc(myVar) {
  myVar = [2];
}

myFunc();
console.log(myVar);

/*

OUTPUT:
[1]

WHY:
The final line of code invokes the console.log method and passes in a reference to the value of the variable declared and initialized to an array on the first line of code. This variable has global scope and is available throughout the entire program as it is declared outside of the confines of any scope or blocks. 

When the function declaration on the second line of code is invoked on the penultimate line of code no argument is passed into the function however the function does declare a local parameter variable with a default value of undefined. The global variable from the first line of code has the same name as the local variable so the function perform shadowing and does not allow visibility of the outer scoped variable within the function block. 

The function body therefore when reasigning the value of a variable is reassigning the local variable value only. 

The console.log method invocation on the final line of code then prints the value of the variable it points to and that it has access to and that is the original value of the array from the first line of code thus outputting: [1] to the console.

*/