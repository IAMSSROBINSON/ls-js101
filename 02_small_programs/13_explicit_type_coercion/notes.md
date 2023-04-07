# Explicit Type Coercion

Type coercion is the conversion of one data type value to another.

<br>

## 2 Types of coercion

### Explicit

- intentional use of built-in-functions and operators to coerce one type to another e.g. String to Number coercion: `Number("22");`
  - if the Number() function can't convert the String to a number it returns `NaN` (not a number: not a meaningful number that can be represented)
  - if trying to coerce an empty string / string with only white space to a Number("") then `0` is returned
  
- `Number(true); // returns 1` 
- `Number(false); // returns 0` 

<br>

#### parseInt();

- ParseInt(); Converts strings to integers (whole numbers)
  - As long as the string begins with a digit or digit preceded by - or +
  - Can also parse binary string with radix base number e.g. `parseInt("10101", 2); // 21`

<br>

#### parseFloat();

- ParseFloat(); Converts strings to floating point numbers
- Does not accept radix argument

<br>

#### Unary operator, +  

- Works with a single value when prefixed e.g. +4
- Will attempt to coerce a value to a number like the Number() function

<br>

#### Coercing values to strings

##### .toString();

- returns string representation of value (cannot be called on a number literal e.g. `22.toString();` but can on variable assigned number e.g. `let num = 22; num.toString()` or wrap number literal in parenthesis and it will work e.g. `(22).toString();` or use doubleDots on number literals e.g. `22..toString();`)
- used on all dataTypes except null & undefined
- used on booleans it will return 'true' or 'false' strings e.g. true.toString() returns 'true' and likewise for false.toString()
- array.toString(); concatenated all elements in the array separated by comma(,)
  - treats null and undefined as empty values 
- using toString() on an object returns '[object Object]'

<br>

##### String(); function

- does much the same as .toString();
- however returns null and undefined into their namesakes string values

<br>
<br>

### Implicit

Performing an operation with two different value types and JavaScript coerces the values to have the same type to perform the operation.

<br>

### == non-strict equality operator

- coerces a string type to number type to compare operate on two numbers e.g. '1' == 1 => true
- when comparing booleans to numbers the boolean value is coerced to its number equivalent: true(1), false(0)
- comparing string to boolean: both will convert to numbers where possible
- undefined and null are compared as equal

<br>
  
### == non-strict equality operator on objects

- considers objects to be equal only if they are the same object 
- tries to coerce objects to primitives where possible

<br>

### other

- when ever 1 of 2 operands of the + operator are strings, the other will be coerced to a string (as in the case with concatenation of a number to a string value to become a combined string)

- when both operands are a combination of numbers, booleans, nulls or undefined they are converted to numbers and added together.

- when one operand is an object both operands are converted to strings and concatenated


<br>

### ${Template literals}

- Inside template literals JavaScript implicitly coerces interpolation expressions to string values.

<br>

### Relational Operators

<, >, <=, >= are for number (numeric comparison) and string comparisons (lexicographic comparison). 

``` JavaScript
1 < 2 // true
'b' > 'a' // true
```

when both operands are strings JavaScript compares them lexicographic otherwise JavaScript converts them to a number before comparing them.

<br>

- always use explicit type coercion (do not use String() & toString() inside ${template literals})
- always use strict equality (===, !==)