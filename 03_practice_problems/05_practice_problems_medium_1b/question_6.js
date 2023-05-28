// What do you think the following code will output?

let nanArray = [NaN];

console.log(nanArray[0] === NaN);
// Bonus:

// How can you reliably test if a value is NaN?

/*

OUTPUT:
false

WHY:
A NaN value cannot be equal to itself. 
Although the array indeed does contain a NaN value, when compared for strict equality two NaN's are deemed separate entities and will always return false.

To reliably test if a value is NaN we can use the isNaN() method on the Number object. 

Number.isNaN() specifically checks for the value NaN 
Number() attempts to coerce a value into a number and returns NaN if the value cannot be coerced thus either returning a number or NaN as a value to provide to the Number.isNaN() method. If the argument passed from the Number function is NaN then the Number.isNaN() method will return true meaning that the value is NaN specifically otherwise its returns false meaning it is some other value. 

*/
console.log(Number.isNaN(Number(nanArray[0]))); // true

// The value at nanArray index position 0 is attempted to be coerced to a Number(). The value NaN at index position 0 cannot be coerced to a number so the Number() method returns NaN as a value to the method and this value is provided as an argument to the Number.isNaN() method which checks for a NaN value specifically. The value is specifically a NaN value and thus the methods returns true and logs true to the console. 