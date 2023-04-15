let myVar = [1]; // global object declared and stores address to array object

function myFunc (myVar) { // local myVar variable with same name, shadowing occurs, value undefined
  myVar[0] = 2; // no value is passed into function so cannot reassign value of element at index 0
}

myFunc(); // function invocation
console.log(myVar); // prints outer scope variable: [1]


// ERROR: TypeError: Cannot set properties of undefined (setting '0')