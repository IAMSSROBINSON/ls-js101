// Question 3
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

let myWords = ['Hello'];
myWords.push('Goodbye');

console.log(myWords);


/*

variable declared and initialized to array object
.push() mutating object method performed on variable
original array mutated and string added as second element
console.log will print: ['Hello', 'Goodbye']

*/

/*

This code should output an array with 2 string values as elements: ['Hello', 'Goodbye'].

On the first line of code a new variable is declared with the let keyword that has global scope. The variable is initialized to an array/object. The variable name tells JavaScript to allocate space in memory for storage and the variable is given an address in memory for storage. 

Array are object datatypes and they have their own address in memory that is separate from the address of the variable name. Because the array is initialized to an array it becomes a pointer and stores the address in memory that points to the array at its address. 

On the second line of code the .push() method is invoked on the pointer variable to the array. The .push() method is destructive in that is will mutate the caller (the array variable). This means that the pointer variable name is used as the caller to point to the array when it is invoked and thus the argument value passed to the .push() method will be added to the array thus changing its contents. 

On the last line of code the console.log() method is invoked and the pointer variable is passed as the argument. It will thus output the value of which the pointer value points to which is the mutated array with the new value appended: ['Hello', 'Goodbye']

*/