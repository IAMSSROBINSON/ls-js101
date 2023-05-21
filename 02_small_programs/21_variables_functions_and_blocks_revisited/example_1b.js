let myVar = 1;

function myFunc () {
  myVar = 2;
}

myFunc();
console.log(myVar);

/*

Line 7 invokes the myFunc() function as passes no arguments.
The function that is invoked is the function declaration on line 3. Within the function body it reassigns the globally declared variable (as defined by the use of the ley keyword in the outer most scope - outside of any function or block scopes) to reference the new value: 2 instead of: 1.

The console.log method invocation on line 8 therefore references the value stored at the address of the argument passed in and outputs its value to the console. This value should be the number: 2.

*/