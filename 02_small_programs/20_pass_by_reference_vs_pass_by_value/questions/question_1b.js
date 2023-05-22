// What will the following code log to the console and why?
// Don't run it until you have tried to answer.


function changeMyWord(word) {
  console.log(word);
  word = word.toUpperCase();
}

let myWord = 'Hello';
changeMyWord(myWord);
console.log(myWord);

/*

OUTPUT:
Hello
Hello


WHY:
The console.log method invocation on the last line of code passes in a reference to a global variable declared two line prior. This variable is initialized to a primitive string value: 'Hello'. However on the penultimate line of code a function is invoked which passes said variable in as an argument to the function from the outer scope to the inner scope. 

On the first line of code the function is declared and the argument is received and initialized a a local parameter variable. The value of the arguement is copied via Pass By Value as assigned to the parameter variable. 

Inside the first line of the function body a console.log method invocation occurs and the local variable value is printed to the console: 'Hello'.
On the second line of the function body the local variable is referenced and reassigned to the return value of invoking the .toUpperCase() method on the value, thus returning the value: 'HELLO' to the value of the variable and reassigning it as its new value. Local variables are however confined to the scope within which they were declared and thus this reassignment is only accessible within the function. The function does not explicitly return anything and by default returns undefined. 

The console.log method invocation on the final line of code therefore references the value of the globally declared (and unchanged) variable two line prior and thus outputs to the console: 'Hello'.

*/