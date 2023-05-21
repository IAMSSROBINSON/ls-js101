// if the argument is not included in the array: return false
console.log([1, 2, 3, 4].includes(5)); // false

// if the argument is included in the array: return true
console.log([1, 2, 3, 4].includes(4)); // true

// if the argument is not included in the array: return true
console.log(![1, 2, 3, 4].includes(5)); // true
// enter block // execute this clause code

// if the argument is included in the array: return false
console.log(![1, 2, 3, 4].includes(4)); // false

// using a pointer to the array instead to make it easier to update
const validChoices = [1, 2, 3, 4];
console.log(validChoices.includes(1)); // true
console.log(!validChoices.includes(1)); // false

