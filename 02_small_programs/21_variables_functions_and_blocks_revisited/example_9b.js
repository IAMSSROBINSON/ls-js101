let myVar = [1];

function myFunc (myVar) {
  myVar[0] = 2;
}

myFunc(myVar);
console.log(myVar);

/*

Line 7 invokes the function declared on line 3. A reference to the variable on line 1 is passed to the function. The reference to the variable has a value of an array and the variable is therefore a pointer variable and stores the address that points to the array at a different address. 

The pointer is passed to the function on line 3 by value as a locally declared parameter variable received a copy of the arrays value. 

Inside the function body on line 4 bracket notation is used to access the element at index: 0 and its value it reassigned. Because the element was accessed directly in this way the original array is mutated and the value at that index now references the number value: 2.

On line 8 the console.log method is invoked and a reference to the array is passed in as an argument. The variable passed in references the array from line 1 that was mutated within the function, thus printing to the console: [2].

*/