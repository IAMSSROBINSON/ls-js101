let c = [1, 2]; // new variable pointing to new array object
let d = c;  // new variable assigned to same value that c points to
console.log("c", c); // 1, 2
console.log("d", d); // 1, 2

c = [3, 4]; // same variable now pointing to different value // d unaffected
console.log("c", c);
console.log("d", d); // variable still points to the same array object at same address


