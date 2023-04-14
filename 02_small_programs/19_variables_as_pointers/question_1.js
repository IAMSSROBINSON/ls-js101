// Question 1
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

let myWord = 'Hello';
let myOtherWord = myWord;

console.log(myWord);
console.log(myOtherWord);

/*

variable: myWord declared and initialized to string value: 'Hello'
- JavaScript creates a space in memory for the variable
- the value is stored at that memory address

variable: myOtherWord declared and value: myWord assigned to it
- JavaScript creates a space in memory for the variable
- the value that variable: myWord points to is stored at this new address

the console will print:
myWord => 'Hello'
myOtherWord => 'Hello'

*/