// What will the following code output?

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

/*

OUTPUT: 
[{ first: 42 }, { second: "value2" }, 3, 4, 5];

WHY:
On line 2 of the code a shallow copy of the array declared on the first line of code is made. Although the copy is a new array if contains references to objects referenced by the original array, those values are not copied totally only references to the objects in the array are copied. 

This means on the penultimate line of code whereby an element is reassigned, this mutation takes place in the original array as well as the copied array. 

So on the final line of code when a reference is passed to the variable value declared on the first line of code - the array referenced has been mutated with the new values and thus prints them to the console. 

*/