let myVar = 1;

function myFunc(myVar) {
  myVar = 2;
}

myFunc(myVar);
console.log(myVar);


/*

OUTPUT:
1

WHY:
The function declaration on the second line of code reassigns the value of the parameter variable that was passed into the function. 

The variable passed in is declared on the first line of code and is a primitive number value: 1. The variable has global scope as it is declared with the let keyword in the outer most program scope and thus is available throughout the entire program.

When the function is invoked on the penultimate line of code, passing in a reference to the variable value, the function initializes the value to the parameter variable. The parameter variable has the same name as the global variable declared in the outer scope and thus the function performs shadowing and does not allow the global variable to be accessed within the scope of the function. 

The function therefore reassigns the value of the local variable and the scope of this variable is confined to within the function block. 

The final line of code thus references the value of the variable passed into it as an argument and that is the variable from the fist line of code. The output to the console is: 1.

*/