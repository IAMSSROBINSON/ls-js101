# RPS Bonus Features

Bonus features for the Rock Paper Scissors program.

<br>

## Lizard Spock 
The goal of this bonus is to add Lizard and Spock to your game.

- Add conditions to win to program:
r > l
l > p
l > sp
sp > r
sp > s
s > l
p > sp
<br>

## Shortened Input Typing the full word "rock" or "lizard" is tiring. 
Update the program so the user can type "r" for "rock," "p" for "paper," and so on. 
- allow choice[0].toLowerCase() for input;


Note that if you do bonus #1, you'll have two words that start with "s." How do you resolve that?

- create conditional: 
sp will be equal to spock
s will continue to be for scissors


<br>

## Best of Five Keep score of the player's and computer's wins. 
When either the player or computer reaches three wins, the match is over, and the winning player becomes the grand winner. 
Don't add your incrementing logic to displayWinner. Keep your functions simple; they should perform one logical task — no more, no less.

- create let playerScore = 0, computerScore = 0; global variables
- if playerScore === 3 or computerScore === 3 print grand winner and score
- update scores in getWinner function but logic in separate function getGrandWinner

Get Grand Winner
- winner or tie returned from getWinner function
- call getGrandWinner function
  - function accepts decision argument
  - if decision === user: increase 
<br>

## ESLint
Run program through ESLint to see what problems it identifies, and try to fix them.
<br>

## Simplifying displayWinner
