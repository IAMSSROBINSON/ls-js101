# Preventing Errors

<br>

## Guard Clause

Code that guarantees data meets certain preconditions before it gets used. 

<br>

## When to use a Guard Clause

Best used when a function cannot guarantee that its argument will be valid e.g. incorrect types, structures, values, properties ect. 

<br>

## Detecting edge cases

Values at the extreme range of potential values. Examine assumptions made in the code. Does the program violate any assumptions? What will happen if it does? 

- Start by considering the inputs 
- Think about how combinations of values can create unexpected conditions

<br>

## Planning your code

It pays to plan ahead although you cannot plan for every scenario.

- write out common use cases of a function and check how it will handle them. This helps to identify edge cases.

- try the most basic use case first then revisit with a complete list of use cases and verify that the implementation works well in each case. If a use case fails, address it and check again. 