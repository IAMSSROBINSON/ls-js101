let myVar = 1;

function myFunc(myVar) {
  myVar = 2;
}

myFunc();
console.log(myVar);


/*

OUTPUT:
1

WHY:
When the function from the 2 line of code is invoked on the penultimate line of code a local parameter variable is initialized. It has the value of undefined because no reference is passed into the function as an argument. 

Inside the function body the locally defined variable value is reassigned from undefined to the primitive number: 2. This value is only accessible within the function as variables declared within a function have local scope only and are not visible outside the function. 

The last line of code thus passes in a reference to the value of the variable declared on the first line of code and initialized to the value: 1. This value is output to the console. The variable does have global scope but as it has the same name as the variable declared withing the function the function performs shadowing and only allows visibility of the local variable. 

*/