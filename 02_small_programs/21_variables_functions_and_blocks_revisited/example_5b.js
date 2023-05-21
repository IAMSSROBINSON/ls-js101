let myVar = [1];

function myFunc (myVar) {
  myVar = [2];
}

myFunc();
console.log(myVar);

/*

Line 7 invokes the function declared on line 3. No argument is passed but a parameter variable is declared and thus has the default value: undefined.
Within the function body on line 4 the locally declared variable value is reassigned from: undefined to point to an array: [2]. Shadowing occurs by the function as there is a globally declared variable with the same name on line 1.
Line 8 invokes the console.log method and passes in a reference to the value of the variable declared on line 1 as it is the only variable the method has access to with that name. The output is therefore: [1].

*/