// Question 5
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

let myWords = ['Hello', 'Goodbye'];
let myWord = myWords[0];
myWords[0] = 'Hi';

console.log(myWords);
console.log(myWord);

/*

OUTPUT:
['Hi', 'Goodbye']
Hello

WHY:
The first console.log method invocation passes in a reference to the variable declared on the first line of code. This variable is initialized with the address that points to a array at a different address in memory.

On the third line of code this variable is referenced and bracket notation is used to directly access the array value it points to and the element at index 0 is reassigned to store the primitive string value 'Hi' instead of 'Hello'. 

The first console.log method invocation will therefore reference the value that the first variable points to, which is the mutated array value at the same address in memory: 
['Hi', 'Goodbye'].

The second console.log method invocation passes in a reference to the variable declared on the second line of code. It is initialized to the value stored at index 0 of the first variable. Because this assignment occurs before the above reassignment, the primitive value stored there is unchanged at this point in time and thus its value gets copied and initialized to the variable at the point of declaration, thus storing the value: 'Hello'. This is the value that is output to the console because even after the reassignment on the third line of code, the initial initialization stands until otherwise altered. 

*/