// Question 1
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

let myWord = 'Hello';
myWord.concat(' there.');

console.log(myWord);

/*

OUTPUT:
Hello

WHY:
This should log the primitive string value: 'Hello' to the console.
The reason is because on the second line of code the .concat() method is used on a reference to a Primitive String value. Primitive values cannot be mutated and thus any method invoked on a Primitive String value will return a new string (which has not been captured / stored here) and will not mutate the String object.
Thus on the last line of code when the console.log() method is invoked and the reference to the variable is passed in, it references the value of the variable declared and initialized on the first line of code.

*/