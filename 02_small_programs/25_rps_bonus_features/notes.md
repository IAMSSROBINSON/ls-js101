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

Use closure and encapsulation to create a createPlayer function:
- function will declare a score variable
- closure function will increaseScore + 1
- closure will return score from getScore function
- return both in an object from the main function

Create userPlayer variable,
Create computerPlayer variable
  - call createPlayer to receive object
  - when user or computer wins a game call relevant function

** DRAW FLOW_CHART

<br>

## ESLint
Run program through ESLint to see what problems it identifies, and try to fix them.

<br>

## Simplifying displayWinner

A switch statement could be used to simplify. 