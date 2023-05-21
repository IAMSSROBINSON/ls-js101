let color = 'yellow'; // global declared and initialized to string primitive
let colors = ['red', 'green', 'blue']; // declared and initialized address of array object

function updateColors(colors) { // local param variable created, array received
  colors.push(color); // .push mutates value at original address, accesses global variable
}

updateColors(colors); // function invocation, array address passed in
console.log(colors); // prints mutated array: ['red', 'green', 'blue', 'yellow]


/*

This code should print: ['red', 'green', 'blue', 'yellow']

On line 5 the .push() method is invoked passing in a reference to the globally defined variable on line 1. The .push() method mutates the caller which is an object which means the argument passed to the function on line 8 is a pointer and it references the direct address in memory that the array is stored at, so on line 5 when the argument is pushed the caller array is mutated directly and the argument value is added to the array. Thus on line 9 the console.log method invocation prints the value of the reference to the mutated array.

*/