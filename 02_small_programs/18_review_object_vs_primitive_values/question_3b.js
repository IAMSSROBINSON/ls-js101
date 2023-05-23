// Question 3
// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

let myWords = ['Hello'];
myWords.push('Goodbye');

console.log(myWords);

/*

OUTPUT:
['Hello', 'Goodbye']

WHY:
The last line of code invokes the console.log() method and passes in a reference to the value of the variable declared and initialized to an array on the first line of code. 

On the second line of code the .push() method is invoked on the reference to the variable previously mentioned and a primitive string value is passed in as its argument.

The .push() method is destructive and arrays are objects that are mutable. This means that the string value passed to the array will receive it and it will be added to the end of the array as an element. 

Thus the last line of code will output the reference to this mutated array and print it to the console.

*/