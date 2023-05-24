// Question 5
// What will the following code log to the console and why? 
// Don't run it until you have tried to answer.

let num = 5;

function myFunc(num) {
  num = 10;
}

myFunc();
console.log(num);

/*

OUTPUT:
5

WHY:
The console.log() method invocation on the final line of code will print: 5 because the variable value reassignment that attempts to take place within the function only occurs to the value of the blocked scoped local variable. 

Although no argument is passed into the function when it is invoked on the penultimate line of code, the function still declares a parameter value which is initialized to the value of: undefined by default. The parameter variable has the same name as the global variable decalred on the first line of code and thus performs shadowing and only makes reference to the local variables within the funcion. It is this local value that is reassigned on the first line of the function body to the value of: 10.

The console.log method invocation therefore only makes reference to the value of the variable from the first line of code. 



*/
