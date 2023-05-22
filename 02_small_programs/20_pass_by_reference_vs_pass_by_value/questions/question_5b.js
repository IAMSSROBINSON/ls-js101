// Question 5
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

function changeMyWords(words) {
  console.log(words);
  words = ['Hi', 'Goodbye'];
}

let myWords = ['Hello', 'Goodbye'];
changeMyWords(myWords);
console.log(myWords);

/*

OUTPUT:
['Hello', 'Goodbye']
['Hello', 'Goodbye']


WHY:
The final line of code invokes the console.log method and passes in a reference to a variable declated two line prior: myWords.

The myWords variable is declared in global scope and initialized to store the address that points to the assigned array value.

The penultimate line of code invokes the changeMyWords function and passes in a reference to the value stored in the previously declared variable, in that it passes the address to the array from outer scope to the inner scope of the function declaration on the first line of code. 

The function received the argument as initializes the value to a local parameter variable. 

On the first line of code within the function body the value of the local variable is printed to the console:
['Hello', 'Goodbye'].

On the second line of the function body code the value of the local variable is reassigned to point to an entirely new array. Since the variable has local scope the values outside are unaffected by this change. 

Therefore on the final line of code the console.log method invocation prints the value of the globally declared variable two line prior and outputs: 
['Hello', 'Goodbye'].

*/