// Determine whether the following object of people and their age contains an entry for 'Spot':

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

let keys = Object.keys(ages);
console.log(keys.includes('Lily')); // true
console.log(keys.includes('Spot')); // false

console.log(ages.hasOwnProperty('Herman')); // true
console.log(ages.hasOwnProperty('Spot')); // false