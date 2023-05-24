// Question 7
// What will the following code log to the console and why? 
// Don't run it until you have tried to answer.

let num = 1;

while (num < 3) {
  let num = 5;
  num += 1;
}

console.log(num);

/*

OUTPUT:
Produces an infinite loop. No output.

WHY:
On the first line of code a global variable is declared and initialized to the number value: 1.

A while loop is defined on the second line of code and the conditional expression checks whether the value of a variable with the reference: num is less than < 3. The expression invaluates to be true however inside the while clause block a new variable with the same name as the global variable is declared and initialized to a number value. This creates block scope for the locally declared variable and will shadow the global variable with the same name meaning that the global variable will not be referenced inside the while block and all references, such as the reassignment that takes place on the final line of code inside the while loop reference the local variable. 

When the while block ends and the loop iterates the value of the global variable is again checked for its truthiness in the conditional expression. This again evaluates to true and the same scenario as before plays out. The global variable value is never changed to the point where the loop condition can evaluate to be false and stop the loop to resume the program and thus an infinite loop is created leaving the program in a state of hanging.

The console.log method invocation on the final line of code is never read or executed as the loop never ends to allow the program to resume thereafter the loop.

*/