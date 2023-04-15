let myVar = [1]; // global variable assigned to memory address of array

function myFunc () {
  myVar[0] =  2; // myVar at index 0 reassigned / mutated to value: 2, same array address, value reassigned
}

myFunc(); // function invocation
console.log(myVar); // console prints value at address stored at myVar: [2]