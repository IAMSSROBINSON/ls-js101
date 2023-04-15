let myVar = [1]; // global variable, stores address to array object

function myFunc (myVar) { // receives array address
  myVar[0] = 2; // reassigns value of 1st element of array at same address
}

myFunc(myVar); // function invocation, myVar address to array passed in
console.log(myVar); // prints value at address myVar points to: [2]

