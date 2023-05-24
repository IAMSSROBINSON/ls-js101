let myVar = [1];

function myFunc(myVar) {
  myVar[0] = 2;
}

myFunc(myVar);
console.log(myVar);

/*

OUTPUT:
[2]

WHY:
The function uses bracket notation to reference the array element at index position: 0 and reassigns it to the primitive number value: 2. This direct reference is valid and mutates the array element that is declared outside of the functions scope. 

Although the function did perform shadowing of the outer variable the reassignment is valid to the outer function as it is the array element that is changed directly and this is an indication of Pass By Reference - whereby the argument passed into the function is changed as a direct result of the method used to reassign the array value. If the array itself was attempted to be reassigned within the function then this reassignment would be locally confined to the scope of the function and the variable outside the function would remain unchanged. 

The last line of code therefore when invoking the console.log method passes in a reference to the mutated array and its new element value at index position 0: [2].

*/