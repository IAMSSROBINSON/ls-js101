# Coding Tips

Repetition is key!
Try to realize that programming isn't all that hard.

Burn a few hours on issue to burn it into memory - the time is not wasted.
Start early and pay with time.

Capture intent in variable names.
indent code with 2 space characters. 
Choose descriptive variable names capturing the intent of the content.
Follow idiomatic naming conventions.

const means a variable cannot be reassigned but the value can be manipulated still although it should be avoided e.g. by pushing to a const array, array.shift()'ing from the front of a const array or adding a value to using bracket notation or replacing in the same way. 

Avoid magic number naming with no description or context of what the number represents and use constants where the potential exists (initialize at top level). 

'a'.charCodeAt() returns the ASCII unicode character code for that 'char'.

if/for/while loops use spaces before and after parenthesis.

Using Object.freeze() a constant will mean its value cannot be mutated/modified.

When extracting code to a function give that function a single responsibility

Most functions should return a single value that has meaning to the calling code or they should have a side effect but not both.

Function side effect: 
- reassigns non-local variable (in the outer scope)
- mutates the value of any object (array or object) referenced by a non-local variable
- reads from or writes to a file, network connection, browser or system hardware (writing to the console and reading input from the terminal)
- raises an exception without handling it, calls another function that has side effects. 

Function names should reflect whether side effects may occur e.g. `displayTotal`

Function should be at the same level of abstraction, mentally isolate the function out of the program. 


  








