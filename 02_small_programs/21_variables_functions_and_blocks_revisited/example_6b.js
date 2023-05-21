let myVar = [1];

function myFunc (myVar) {
  myVar[0] = 2;
}

myFunc();
console.log(myVar);

/*

Line 7 invokes the function declared on line 3, no argument is passed into the function but the function does declare a local variable as a parameter (which will therefore have the default value of: undefined).

When the function is invoked, on line 4 the function performs shadowing as there is a globally declared variable from line 1 with the same name as the locally declared variable. 

Inside the function body a reassignment is attempted to be executed however the local variable that is referenced has a value of undefined but is treated like a reference to an array. By trying to access a variable with the value of undefined as if it were an array using bracket notation this should produce a typeError and stop the program as this operation is not allowed in JavaScript, you cannot set properties for undefined as undefined has no properties. 

*/