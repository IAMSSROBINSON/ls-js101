let e = [1, 2]; // variable at one address points to array object at another
let f = e; // variable at new address point to address e points to

console.log("e", e);
console.log("f", f);

e.push(3, 4); // push is mutating to f will be mutated with changes also

console.log("e", e);
console.log("f", f);

f.push(5, 6); // push is mutating to e will be mutated with changes also

console.log("e", e);
console.log("f", f);

// aliasing: e and f are aliases of the same value