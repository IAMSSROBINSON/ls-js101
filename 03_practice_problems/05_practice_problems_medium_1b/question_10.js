// Consider these two simple functions:

function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}

// What will the following function invocation return?
console.log(bar(foo()));

/*

OUTPUT: 
no

WHY:

The function invocation passes in the return of another function invocation as an argument. 

The foo() function invocation passes no argument and the function itself only return the string value: "yes".

This value is passed to the bar function and is initialized to the local parameter variable: param.

The return value is an expression and compares whether the string value "yes" is the same value and type as the string: "no", this expression evaluates to false and thus the ternary operator returns the value of the operand on right which is the string value: "no" - this is the return value of the function invocation on the final line of code. 

*/