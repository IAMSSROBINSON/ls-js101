// What will the following two lines of code output?

console.log(0.3 + 0.6);
console.log(0.3 + 0.6 === 0.9);

/*

OUTPUT: 
0.8999
false

WHY:
Floating point numbers are not an exact science in JavaScript so whereas it may look like the return value would be 0.9 and true, the return values are actually close to 0.9 but not explicitly 0.9 and thus the second method invocation will return false to a strict equality comparison to 0.9.

*/