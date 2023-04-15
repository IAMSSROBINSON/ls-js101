let myVar = [1]; // global object declared and stores address to array object

function myFunc (myVar) { // local paramter variable declared, shadowing same name outer scoped variables
  myVar = [2]; // local scope variable reassigned
}

myFunc(); // function invocation
console.log(myVar); // prints outer scope variable value: [1]