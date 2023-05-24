let myVar = [1];

function myFunc() {

  myVar[0] = 2;
}

myFunc();
console.log(myVar);

/*

OUTPUT:
[2]

WHY:
When the function declaration is invoked on the penultimate line of code, within the function body bracket notation is used to reassign the variable with global scope declared on the first line of code. The index position of the element is stated and accessed directly thus mutating the array value specified.

Variables defined with the let keyword can be accessed within the scope of functions and blocks so this reassignment is valid. 

On the final line of code the console.log() method is invoked and a reference to the value the variable points to is passed in as an argument thus outputting the new array that the variable points to: [2].

*/