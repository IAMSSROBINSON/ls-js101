// Question 1
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

let myWord = 'Hello';
myWord.concat(' there.');

console.log(myWord);


/*

new variable declared and string value assigned
String is primitive value
method used on string variable will return new string value
console. will log 'Hello' as original value was not mutated.
the .concat() method returns a new string. It concatenates 2 or more strings.
the method was called but not assigned to a variable thus the value is unsaved.

*/