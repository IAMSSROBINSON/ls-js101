# Precedence

The meaning of an expression is determined by operator precedence: The set of rules that determine which operands (values used by the operator that are the result of evaluating expressions) each operator in an expression takes. Operators with higher precedence are prioritized over those with lower precedence. 

<br>

## Operands and Operators

An operand can be the result of evaluating some other operator and its operand.

- Unary - One operand: true, false, !true, !false
- Two operands: 2 + 5 (2 and 5)
- Ternary - Three operands: value ? 1 : 2

<br>

## Hierarchy

() Parenthesis have the highest precedence and will always override the default evaluation order. An operator with higher precedence is said to 'bind' more tightly to its operands. 

Operations involving operators with higher precedence will be evaluated before those with lower precedence however when the level is the same the operation gets evaluated from left to right of the operation (but right to left in some cases as in multiple = and ** operators).

<br>

## Order types

Precedence
left to right
right to left
short circuiting
ternary expressions

In an arithmetic expression JavaScript will go over an expression left-right and evaluate everything it can without calling any operators and then reevaluates any results from function expression calls with the precedence rules after it has the values. 

<br>

## Use parenthesis

Use parenthesis when ever mixing operators in an expression instead of relying on precedence rules. 
