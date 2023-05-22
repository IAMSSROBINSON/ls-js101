// Question 3
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

let myWords = ['Hello', 'Goodbye'];
let myOtherWords = myWords;
myWords[0] = 'Hi';

console.log(myWords);
console.log(myOtherWords);

/*

OUTPUT:
['Hi', 'Goodbye']
['Hi', 'Goodbye']


WHY:
The first console.log method invocation passes in as an argument a reference to the variable declared on the first line of code, which itself is initialized to an array object. The variable on line 1 is therefore a pointer variable in that is has its own address in memory and stores the address of the array object that it points to as its value, the array itself is stored at that address.

The second line of code declares a new variable and initializes it to the value stored at the first variable from the first line of code, this value is an address that point to the array.

The third line of code uses bracket notation to access a direct element an index 0 within the array and reassigns the value stored there from 'Hello' to 'Hi' which is now stored there instead of the previous value. 

When the first console.log method is therefore invoked as the reference to the first variable is passed in, it looks at the value that is stored - which is an address of the array and then it goes to the address of the array and prints the value there: 
['Hi', 'Goodbye'].

The second console.log method invocation passes in the reference to the second variable - which from the second line of code was initialized with the value of the first, which is an address that points to the array. Therefore the value at that address is output to the console and is the same value that the first variable points to and outputs: 
['Hi', 'Goodbye'].

On the third line of code the array object itself is not changed, only an element / value inside is reassigned to reference a new value. Therefore the addresses that point to the array do not change but the array values might.

*/