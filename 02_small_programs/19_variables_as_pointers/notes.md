# Variables as Pointers

Some variables acts as a pointer to a place/address in memory whilst others contain values.
References are pointers.

<br>

## Variables in memory

Every time a JavaScript program creates a new variable, JavaScript allocates space in its memory to hold the value there. Most Primitive values actually get stored in this allocated memory.

count variable ends up at address: `0x16d81f12c` in computer memory
`let count = 1;` sets the memory at that address to: `1`

`count = 2;` replaces the value: `1` at that address: `0x16d81f12c` with value: `2`

<br>

### Other example

```JavaScript
let count = 1; // variable declared and initialized to Primitive value: 1
count = 2; // variable reassigned to a New Primitive value: 2
console.log('count:', count);
// these are not the same values.
// it is the same variable but the values are independent.
// value: 1 is not mutated, instead the variable when reassigned now points to a new value: 2

let a = 5; // at memory location: 0x16d81f12c
let b = a; // at different memory location: 0x16d81g11a


// The two variables are at different locations in memory so their values are independent of each other.
// Once b is initialized to the value of a it is now independent from a if a's value changes.

a = 8; // a is now reassigned to value: 8 at the same address: 0x16d81f12c
// b is still at its address and still stores its value: 5 there: 0x16d81g11a

// variables with 'Primitive values' are stored at the memory location associated with the 'variable'.
```

<br>

## Objects and Non-Mutating Operations

See:
[example file](object.js)
[example file](array.js)
[example file](mutating.js)
[example file](gotcha.js)

- .push() method mutates the object
- .map() method does not mutate the object

x = [1, 2, 3]; // x variable is at the same address - reassigned the object to point to a new address

x[2] = 4; // x is at the same address and thus the reassignment mutates the object element at the same address



