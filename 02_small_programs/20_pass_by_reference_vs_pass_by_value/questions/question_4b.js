// Question 4
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

function changeMyWords(words) {
  console.log(words);
  words[0] = 'Hi';
}

let myWords = ['Hello', 'Goodbye'];
changeMyWords(myWords);
console.log(myWords);

/*

OUTPUT:
['Hello', 'Goodbye']
['Hi', 'Goodbye']

WHY:
The console.log method invocation on the final line of code passes in a reference to the variable declared two line prior. This variable is initialized to store the address of the array which it points to.

On the penultimate line of code a function is invoked and the value of the variable (as pointer to the array) is passed as an argument from the outer scope to the inner scope of the function declared on the first line of code.

The argument is received by the function on the first line of code and its value initialized to a local parameter variable. On the first line of the function body this value is output to the console: ['Hello', 'Goodbye'].

On the final line of the function body code bracket notation is used on the local variable to access the original array object directly and seeks to reassign the element stored at index position 0 to string value: 'Hi'. Because the array is accessed directly in this way the orginal array is mutated at this point and the reassignment occurs. 

On the final line of code therefore the argument passed in is a reference to the value of the mutated array and thus outputs to the console: ['Hi', 'Goodbye'].

*/