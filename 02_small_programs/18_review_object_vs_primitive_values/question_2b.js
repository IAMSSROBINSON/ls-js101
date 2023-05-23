// Question 2
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

let myWord = 'Hello';
myWord.repeat(3);
console.log(myWord);
myWord.replace('H', 'J');
console.log(myWord);
myWord.toUpperCase();
console.log(myWord);

/*

OUTPUT:
Hello
Hello
Hello

WHY:
The last line of code invoked the console.log() method and passes in as an argument a reference to the value of the variable declared and initialized to a primitive string value on the first line of code.

All of the console.log methods refer and print this value because all of the other methods that are invoked return a new string value but go uncaptured because they are not assigned to a variable for storage. 

The reason why they do not mutate the String object is because Primitive Values, of which Strings a part of, cannot be mutated, in that any method on a String will always return a new string. We won't go into the fact that strings are actually character arrays which are objects at this point in time - it is enough to know that string are considered and treat as primitive values in JavaScript.

*/