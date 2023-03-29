# Debugging

A approach for understanding a problem with code and finding a solution.

<br>

## Techniques

1. Read error messages
   - The 'stack trace' will show you where to begin to debug errors in code  

2. Search Engine
   - Study the error message and walk backwards through the code to understand the program flow and how it came to the error. It is ok to search online for the error message given to help give you more insight into the problem    

3. Stack Overflow
   - You can search for answers to errors directly on Stack Overflow  

4. Documentation
   - Visit official documentation sites for the code of the codes functionality  

5. Line by line  
   - Exercise a patient temperament as you inspect code line by line
   - Take care over the potential problem areas of code

6. Rubber Duck
   - Explain the problem to a rubber duck
   - walk through the code detail by detail

7. Walking Away
   - Go for a walk, have a shower
   - Exercise diffuse mode in the brain but be sure to load the problem first

8. Debugger
   - node.js comes with a debugger that lets you pause the program during execution and perform actions from that point in the program execution e.g. expecting values at runtime
       - To use: run node command with inspect argument: `node inspect nameOfFile.js`
         - Debugger will pause program at first expression / function in the code
         - `exec variableName` command allows for accessing in scope variables 
         - `next` or `n` command continues to next expression and pauses
         - `c` or `cont` un-pauses program execution and continues until the end or until error
         - `run` or `restart` restarts program execution
         - `.exit` to exit the debugger at any given time
         - inserting a `debugger` statement into code will manually 'pause' the debugger at that 'breakpoint' in the program execution 
