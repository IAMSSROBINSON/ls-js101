let myVar = 1; // global

function myFunc () {
  myVar = 2; // reassignment
}

myFunc(); // reassignment occurs when function in invoked
console.log(myVar); // 2

