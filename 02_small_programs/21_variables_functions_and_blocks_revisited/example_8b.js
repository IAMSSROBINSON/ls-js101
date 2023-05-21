let myVar = [1];

function myFunc (myVar) {
  myVar = [2];
}

myFunc(myVar);
console.log(myVar);

/*

Line 7 invokes the function declared on line 3. It passes a pointer to the array initialized to the variable on line 1 into the function.

The argument is received on line 3 and is initialized to the parameter variable and on line 4 the locally declared parameter variable is reassigned to point to a new array at a new address. Since an array passed as an argument to a function is passed by value thus the local variable parameter is a copy of the array passed in and any changed within the function reference the local variable only. Therefore on line 8 the console.log method invocation references the original value of the array from line 1 and outputs array value: [1].

*/