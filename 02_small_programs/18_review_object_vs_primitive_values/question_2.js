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

variable declare and initialized to string value (primitive)
string method.repeat(3) performed on variable returning new string (not saved)
console.log prints original variable value 'Hello'
string method.replace perform on variable returning new string (not saved)
console.log prints original variable value 'Hello'
string method.toUpperCase() performed returning new string (not saved)
console.log prints original variable value 'Hello'

*/

/*

A new variable declared with global scope occurs on line 1.
It is initialized to a primitive string value.

On line 2 the .repeat() method is invoked on the myWord variable.
Number 3 is passed to the method as the argument for the repeat multiplier.
Methods on string values are immutable in that they cannot be changed.
The method returns a new string value but the value is not stored or reassigned.

line 3 will therefore print the value of the myWord variable: 'Hello'.

On line 4 the .replace() method is invoked on the variable.
It seeks to replace the character 'H' from the string with the character 'J'.
The return value from the method is a new string and this value is not saved.
Line 5 will therefore print the value of the variable from line 1: 'Hello'.

Line 6 invokes the.toUpperCase() method invocation.
It returns a new string with the characters of the caller in uppercase.
The value is again not stored by a variable or used.
Line 7 should therefore print the string value: 'Hello' for the third time.

*/