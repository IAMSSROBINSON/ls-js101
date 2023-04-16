# Rock, Paper, Scissors 

A game whereby the winner is decided according to the following rules: 

<br>

1. If player a chooses rock and player b chooses scissors, player a wins.
1. If player a chooses paper and player b chooses rock, player a wins.
1. If player a chooses scissors and player b chooses paper, player a wins.
1. If both players choose the same item, neither player wins. It's a tie.

<br>

This version of the game lets the user play against the computer. The game flow should go like this:

The user makes a choice.
The computer makes a choice.
The winner is displayed.

<br>

Things to consider
Notice how the displayWinner function calls the prompt function. What happens if you move the displayWinner function definition above the prompt function definition? Does it still work?

How would you use the displayWinner function differently if it returned a string, as opposed to outputting the string directly?

We used the Math object to generate a random number and round down a floating point number. Skim through the documentation for the Math object and see what other functions from the object you may find useful. Specifically, read the pages for Math.round and Math.ceil. How would you rewrite the random index expression if you were to use one of these two methods instead of Math.floor?

Conventionally, methods on the Math object are called functions. There doesn't seem to be any good reason for that, but it is what it is.

We used a while loop with an always-true condition and a break statement to decide whether to replay the game. Can you rewrite the loop so that we don't need to use the break statement to stop the loop?