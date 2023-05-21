let myVar = [1];

function myFunc () {
  myVar[0] =  2;
}

myFunc();
console.log(myVar);

/*

Line 7 invokes the function defined on line 3. 
The function body on line 4 references the globally declared variable on line 1.
The function uses bracket notation to access the array element and index 0 which has a value: 1 and it reassigns this value to be: 2.

The console.log method invocation on line 8 references the pointer variable (pointer because it stores the address of the array object it is initialized to) and print the value of the array at that address, thus outputting to the console the value: [2]

*/