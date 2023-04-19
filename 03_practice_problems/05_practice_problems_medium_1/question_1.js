// Will the following functions return the same results?

function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());

// Try to answer without running the code or looking at the solution.

/*

No.
The second function will return undefined as the object appears below the return statement and thus will be ignored by the return statement. 

*/