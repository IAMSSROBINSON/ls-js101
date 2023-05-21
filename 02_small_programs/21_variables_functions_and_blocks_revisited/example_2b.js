let myVar = [1];

function myFunc () {
  myVar = [2];
}

myFunc();
console.log(myVar);


/*

Function invocation on line 7 for the function defined on line 3.
The function body on line 4 reassigns the global variable declared on line 1 to point to a new array at a different address in the computer memory. 
Line 8 invokes the console.log method and passes in a reference to the pointer variable which points to the value of the array and outputs: [2] to the console.

*/