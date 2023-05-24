let myVar = [1];

function myFunc () {

  myVar = [2];
}

myFunc();
console.log(myVar);

/*

OUTPUT:
[2]

WHY:
The variable declared on the first line of code is a variable with global scope. The variable is a pointer variable meaning it stores the address in computer memory of the array that it points to. 

When a function is invoked on the penultimate line of code it executes a function declaration on the second line of code. With the function the global variable is accessed and its value reassigned to point to a new array, meaning the pointer variable now stores a different address in computer memory that references a new array.

It is this new array value that is printed when the console.log method is invoked on the final line of code and the variable is passed in as a reference to the array value outputting: [2].

*/