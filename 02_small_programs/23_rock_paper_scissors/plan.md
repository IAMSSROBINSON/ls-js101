# Rock, Paper, Scissors Plan

<br>

## Set up

- the program will accept user input from standard input stream / keyboard so readline sync module must be installed 
  - npm i readline-sync
- to make use of the readline-sync features it must be required into the program
  - const READLINESYNC = require('readline-sync');
  - now users can be prompted to enter an input

- to better layout the program a printer function will be declared to receive messages / prompts and print the message with layout formatting applied

<br>

## Welcome

- welcome the user to the Rock, Paper, Scissors game
  - extract message to json file
  - import json file into the program by requiring into the main js file
  - access the object returned 
  - send message to the printer function

<br>

## Rules

1. If player a chooses rock and player b chooses scissors, player a wins.
1. If player a chooses paper and player b chooses rock, player a wins.
1. If player a chooses scissors and player b chooses paper, player a wins.
1. If both players choose the same item, neither player wins. It's a tie.

<br>

### How choices will be made

#### The game flow is: 

##### User makes a choice:

- prompt user to enter: 'rock', 'paper' or 'scissors' only or create number menu selection
- save choice to variable 
- validate entry for string data-type, no empty string entries: if violated then prompt again

<br>

##### Computer makes a choice: 

- the computer must be able to select 'rock', 'paper' or 'scissors'
- store options in array
- generate random number from 0(base index) to array.length(number of elements)
- save random number to variable 
- ComputerChoice is array[randomNumberIndex];

<br>

Once the choices have each been made the winner can be decided and displayed after applying the game logic: 

<br>

### The Logic

if (`playerChoice` === 'rock' && `computerChoice` === 'scissors') {Player wins!}
if (`playerChoice` === 'paper' && `computerChoice` === 'rock') {Player wins!}
if (`playerChoice` === 'scissors' && `computerChoice` === 'paper') {Player wins!}

if (`playerChoice` === 'scissors' && `computerChoice` === 'rock') {Computer wins!}
if (`playerChoice` === 'rock' && `computerChoice` === 'paper') {Computer wins!}
if (`playerChoice` === 'paper' && `computerChoice` === 'scissors') {Computer wins!}

if both players choose the same item, neither player wins - it is a tie.

- create required variables to store inputs and perform logic.

<br>

### Play again ?

The winner of the game has been decided. Prompt the user for an answer to whether they would like to play a new game.
- if yes, restart program
- if no, end program



