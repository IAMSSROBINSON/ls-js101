let myVar = [1]; // global pointer variable declared and assigned to array with value 1 inside

function myFunc () {

  myVar = [2]; // variable reassigned to point to new array object
}

myFunc(); // function invocation, reassigns variable to point to new value
console.log(myVar); // printed value at address the variable points to: [2]

