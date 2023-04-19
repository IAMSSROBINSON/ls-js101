// What do you think the following code will output?

let nanArray = [NaN];
console.log(nanArray[0] === NaN);
/*

// false
NaN is an object and every instance of NaN is its own object entity, no two NaNs can be the same NaN and even NaN === NaN returns false

*/


// Bonus:
// How can you reliably test if a value is NaN?
/*

// Object.isNaN();

*/