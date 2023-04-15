let myVar = 1; // global variable declared and intialized to primitive value number: 1

function myFunc (myVar) { // parameter local variable declared, shadows outer scope of same name
  myVar = 2; // myVar is local and nothing is passed in so this reassignment is reassigning the default value of the parameter which is undefined
}

myFunc(); // function invocation
console.log(myVar); // can only see the original outer scope and prints: 1;