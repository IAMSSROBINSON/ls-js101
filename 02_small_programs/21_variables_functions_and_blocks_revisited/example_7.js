let myVar = 1; // global variable stores primitive number: 1

function myFunc (myVar) { // local variable created, receives argument, shadowing outer
  myVar = 2; // local variable value reassigned
}

myFunc(myVar); // function invocation, passes in myVar
console.log(myVar); // prints outer scope variable value: 1