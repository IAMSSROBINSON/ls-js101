let myVar = [1];

function myFunc(myVar) {
  myVar = [2];
}

myFunc(myVar);
console.log(myVar);

/*

OUTPUT:
[1]

WHY:
The function in this code attempt to reassign the value of the argument passed into it. The function parameter value is initialized to the value of the argument passed into it - which is the array initialized to a globally scoped variable declaration on the first line of code. 

The functions parameter variable has the same name as the global variable and the function performs shadowing thus limiting the local parameter variable to accessibility within the functions scope. 

The console.log method invocation on the final line of code passes in a reference to the variable declared on the first line of code and it is this variables value that is output to the console: [1].

*/