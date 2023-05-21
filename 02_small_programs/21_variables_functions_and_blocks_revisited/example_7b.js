let myVar = 1;

function myFunc (myVar) {
  myVar = 2;
}

myFunc(myVar);
console.log(myVar);

/*

Line 7 invokes the function declared on line 7. It passes a reference to the globally declared variable from line 1 with a value of primitive number: 1.

On line 3 the function received the reference and initializes the value to a locally declared parameter variable. In the function body on line 4 the local variable value is reassigned from: 1 to reference number value: 2. Shadowing occurs by the function as the globally declared variable from line 1 would otherwise have access to the inside of all functions that do not have the same name.

Line 8 invokes the console.log method and passes in a reference to the global variable from line 1 to output to the console the value: 1.

*/