// What will the following code output?

let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);

/*

OUTPUT: 
hello there

WHY:
The first line of code declared a variable and initializes it to a primitive string value. On the final line of code the console.log method is invoked and a reference to the value of the variable declared on the first line of code is passed in as an argument thus outputting its value to the console. This value is never reassigned during the program thus it print the value directly.

*/