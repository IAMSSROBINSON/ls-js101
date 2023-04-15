let myVar = [1]; // global pointer variable, stores address to array object

function myFunc (myVar) { // local variable created, shadowing occurs, argument received
  myVar = [2]; // local variable value reassigned, inner scope only
}

myFunc(myVar); // function invocation, passes in myVar address
console.log(myVar); // prints outer scope myVar: [1]