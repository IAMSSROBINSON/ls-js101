// Question 4
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

let myWords = ['Hello'];
myWords.concat(['Goodbye']);

console.log(myWords);

/*

OUTPUT:
['Hello']

WHY:
The last line of code invokes the console.log() method and passes in a reference to the value of the variable declared and initialized on the first line of code. The value of the variable is a pointer to the array that it is assigned with a primitive string value as its only element.

On the second line of code the .concat() method is invoked on the variable object and passes in a new array as its argument. The .concat() method invoked on any value will always return a new value and thus does not mutate the caller. 

Therefore on the final line of code the argument passes is the value of the variable from the first line of code.

*/