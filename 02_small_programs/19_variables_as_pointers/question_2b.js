// Question 2
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

let myWord = 'Hello';
let myOtherWord = myWord;
myWord = 'Goodbye';

console.log(myWord);
console.log(myOtherWord);

/*

OUTPUT:
Goodbye
Hello


WHY:
The first console.log method invocation passes in a reference to the variable declared on the first line of code. This variable is initialized to a primitive string value: 'Hello'. Two lines of code down from that the same variable is referenced by name(myWord) and the assignment operator is used to reassign the value stored at the address in computer memory associated with the variable from 'Hello' to 'Goodbye'. The value Hello is not changed into Goodbye, rather they are different values entirely and the variable now references the new value. This new value is the value that is output to the console.

The second console.log method invocation passes in a reference to the variable declared on the second line of code. The variable is initialized to the value referenced by the first variable. Because this occurs on the second line the value assigned to the first variable at that point in time is 'Hello' and thus that is the value copied as a reference to the second variable. The fact that the first variable is later reassigned as mentions above is of no consequence to this variable as it was stored as the reference first and is now the value referenced by the second variable and thus it is this value that is output to the console: Hello. This is the nature of Pass By Value for Primitive values, the values copied are independent of one another after they are copied.

*/