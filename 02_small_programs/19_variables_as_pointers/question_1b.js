// Question 1
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

let myWord = 'Hello';
let myOtherWord = myWord;

console.log(myWord);
console.log(myOtherWord);

/*

OUTPUT:
Hello
Hello


WHY:
The first console.log method invocation passes in a reference to the variable declared on the first line of code  which is initialized to the primitive string value: 'Hello'. This is the value that is returned and output to the console.

The second console.log method passes in a reference to the variables declared on the second line of code which is initialized with the value of the variable on the first line. The value of the first variable is thereby copied to the second variable as its value is output to the console printing primitive string value: 'Hello'. 

It is important to note that both variables are their own entities. When they are declared they have different names and are allocated different address in the computer memory to store values. The values both variables are storing may be identical but they are different value entities at the point of storage in the variable. 

*/