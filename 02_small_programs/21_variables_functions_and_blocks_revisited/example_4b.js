let myVar = 1;

function myFunc (myVar) {
  myVar = 2;
}

myFunc();
console.log(myVar);

/*

Line 7 invokes the function declaration on line 3. The function is not passed any argument but has a parameter variable declared, therefore the parameters value will by default be: undefined.

Within the function body on line 4 a variable reassignment takes place. The locally declared variable value is the reference and is therefore no longer undefined. There is a variable declared on line 1 with the same name as within the function. The variable on line 1 has global scope and would be accessible from within the function if it did not have the same name as the locally defined variable and thus the function performs shadowing and blocks any reference to the outer variable with the same name. 

Line 8 invokes the console.log method and passes a reference to a variable value. This value is the value of the globally declared variable, who value is never reassigned and remains at the number: 1, and thus prints it to the console.

*/