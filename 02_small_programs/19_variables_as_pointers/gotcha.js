let g = ['a', 'b', 'c'];
let h = g;
g[1] = 'x'; // reassigning specific element in the array not the array itself
// reassignment applied to the item not the object that contains it

console.log("g: ", g); // ['a', 'x', 'c']
console.log("h: ", h); // ['a', 'x', 'c']