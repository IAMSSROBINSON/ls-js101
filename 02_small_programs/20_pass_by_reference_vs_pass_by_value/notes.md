# Pass by Reference VS Pass by Value

## What does Pass by Value mean?

When you use a variable to pass an argument into a function and the value is received by the function and assigned to a local parameter variable, the function cannot do anything that sets the original variable to a different value. The variable in the function has local scope and is working on a copy of the original variable.

This does not mean it is not possible to change the value of a variable outside of a function from within one.

[pass by value](./passByValue.js)

<br>

## What does Pass by Reference mean?

Pass by reference is at play when you mutate the argument within a function and it mutates the original object - this is a destructive function.
JavaScript will pass an object by reference but it does not know if the function receiving it will mutate it until that happens, it is dependant on the actions taken inside and the methods applied to it.

[pass by reference](./passByReference.js)
[array.map](./map.js)

<br>

### What JavaScript does?

When passing primitive values to functions always treat JavaScript like pass by value as no operation performed on a primitive can permanently alter a primitive. 

<br>
