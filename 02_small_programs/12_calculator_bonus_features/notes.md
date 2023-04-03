# Calculator bonus features

- A program is never 'done'.

<br>

1. Another calculation
   
Currently, our calculator asks the user for two numbers and an operation and then exits after displaying the result. Wouldn't it be nice if we could ask the user if they wanted to perform another calculation and start a new calculation when they respond with yes?

PEDAC: 

P: 
The calculator only performs one calculation and then ends the program. How can we ask the user if they would like to perform a new calculation at the end of the first calculation?
A new calculation meaning a calculation with new variable values that have not been set yet.

E:
=> Previous result: 100
=> Would you like to perform a new calculation?
- No
  - End of program.
- Yes
  => Enter number 1
  => Enter number 2
  => Choose operator
  => Result = // operation

D:
- Currently the calculator runs mainly from start to end. Every statement will need to be placed inside a function that can be called so that when the end of the program is reached the start can be called again to re-start if requested. 

A:
- START
- SET an intro function 