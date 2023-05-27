// What will the following code output?

console.log([1, 2, 3] + [4, 5]);
console.log(typeof ([1, 2, 3] + [4, 5]));

/*

OUTPUT:
1, 2, 34, 5

WHY:
The + operator is used to concatenate two arrays together, this has the effect of coercing the values to strings.. 
There is no comma separating the last element of the first array and the first element in the second array thus they will be combined to appear as one element before outputting the final string value including commas to the console. 

*/