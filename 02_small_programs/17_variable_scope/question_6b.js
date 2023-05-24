// Question 6
// What will the following code log to the console and why? Don't run it until you have tried to answer.

let num = 1;

while (num < 3) {
  num += 1;
}

console.log(num);

/*

OUTPUT:
3

WHY:
The last line of code invokes the console.log() method and passes in a reference to the global variable declared on the first line of code and initialized to the primitive number value: 1.

On the second line of code a while loop is defined and the conditional expression checks the expression for its truthiness. 

The condition evaluates to true which is a truthy value and thus the while clause block is entered. 
The block body accesses the global variable declared in the outer most scope of the program and reassigns the value to increase by +1. The value of the global variable thus becomes 2 and the second iteration of the loop ensues. 

The condition is checked again for its truthiness and it evaluates to true and the while block is again entered. The value of the global variable is again increased by +1 and now has the value of: 3. The block ends and another iteration of the loop ensues. 

The while conditional expression is again checked for its truthiness and the expression no longer evaluates to true. The value of the variable is: 3 and the condition checks whether the value: 3 is less than 3 - which it is not and thus evaluates to be false. False is a falsy value and because of this the while block is not entered and is ceased. The program resumes play after the end of the while block.

The next piece of code encountered is the console.log() method invocation on the final line of code which passes in a reference to the global variable on the first line of code. The variables value is now: 3 as changed by the while loop iterations and thus this is output to the console.

*/