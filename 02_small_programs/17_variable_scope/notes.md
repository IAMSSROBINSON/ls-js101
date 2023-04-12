# Variable Scope

A variables scope is the part of a program that can access that variable by name.  
Variable scoping rules describe how and where the language finds previously declared variables. 

<br>

## JavaScript Scopes

### Global

A program with no functions or blocks exists entirely in global scope. Any variable declared are available throughout the entire program within the file or module it is declared in (it has to be imported / exported to be available in other files or modules). 

<br>

### Local

#### function scope

They define a new scope for local variables (an inner scope, just as nested function define a nested scope). A variables scope is determined by where it is declared.

1. 
- outer scope variables can be accessed by the inner scope. 
- variables can be changed from within the inner scope that affect the outer scope.
- when assign with inner scope be careful not to effect the outer unless intentional.

2. 
- inner scope variables cannot be accessed by outer scope.
- local variables do not exist until a function is called but the function does define the scope of the local variable. 

3. 
- peer scopes do not conflict.

4. 
- Nested variables have their own variable scope.
- first level, second level, third level.
  
5. 
- inner scope variables can shadow outer scope variables.
- parameters are local variables and scoping rules apply.
- if a variableName in outer scope has the same as a local variable inner scope then shadowing occurs and the outer scope variable name is not seen.
- shadowing also prevents from making changes to outer scope variable with the same name.

<br>

#### block scope

Blocks are segments of one or more statements and expressions grouped by opening and closing curly braces. 

Each pair of curly braces defines a new block scope and the rules are the same as for function scopes: 

- outer block cannot access inner block scope variables. 
- inner block can access variables from outer scopes.
- variables defined in inner block can shadow variables from outer scopes. 


##### Curly braces that are not blocks

- function body is not a block but does behave like one
- class definitions 
- object literal

<br>

