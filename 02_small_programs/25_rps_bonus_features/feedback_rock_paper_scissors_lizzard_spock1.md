## Feedback on the R-P-S-L-SP program

<br>

## User Experience and Gameplay

- Great welcome and farewell messages!
  
- Nice interface, it's very clear.

<br>

## Source Code

- I like how you've used VALID_MOVES and VALID_MOVES_SHORT_FORM to with isValidMove and returnLongFormMove. √
  
- Global variables like userPlayer and computerPlayer are fine for small programs like this, but they can cause some really nasty bugs in larger code bases. Consider the situation where you've got twenty functions that modify this global variable in some way. If the variable's value ended up in an invalid state, you'd have to manually check all twenty of those functions to find the bug(s). This can take a lot of time and be very tedious. √
  
- It's best to declare variables in as local a scope as they'll be needed and pass them into and out of functions. √
  - Implemented `playGame() function` to create userPlayer and computerPlayer variables locally and pass to functions but need to reduce statements by extracting to more functions as the line length does not comply with ESLint
  
- Since your createPlayer function deals only with scores, it might be more accurate to call the function createScoreInterface. √
  
- Consider extracting the score increase from the action of displaying a winner, since those actions are not the same. √
  
- See if you can reduce the duplication in lines 127 - 135 by using some functions. √