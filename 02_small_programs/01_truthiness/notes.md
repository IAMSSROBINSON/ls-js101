# Truthiness

All values are truthy unless they are defined as falsy.

<br>

- Build conditional logic
- Understand the state of an object / expression
- Print, pass, assign, test them

<br>

Evaluate expressions for truthiness instead of the boolean values true or false directly.

Functions don't usually return boolean values explicitly, instead it should be the result of conditional expression e.g.

```JavaScript
let number = 5;

function isSmall (number) {
	return (number < 10);
}

isSmall(number);
```

<br>

## Falsy values that evaluate to false in boolean context:

1. null
2. undefined
3. 0
4. NaN
5. false
6. "" (empty string)
   
<br>

## Logical Operators


### && Logical AND
- Both sub-expressions must evaluate to true to evaluate to true. (You can chain as many && sub-expressions as you like but all must evaluate to true to return true).

### || Logical OR
- Evaluates to true when either of two sub-expressions evaluates as true. (False when both are false).

### ! Logical NOT
- Evaluates to true if the operand / sub-expression is false. Evaluates to false if the operand / sub-expression is true.

<br>

## Short-circuiting

Stops evaluating when the final expression value can be determined.

&& - evaluates from left-right: short-circuits as soon an false is encountered

|| - evaluates from left-right: short-circuits as soon an true is encountered

<br>

## Extra

- Always use parenthesis with expressions that involve multiple operators to make intent clear.
- `>` Greater than has higher precedence than `&&`.

