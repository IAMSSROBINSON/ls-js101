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
- using toString() on an object is useless

<br>

##### String(); function

- does much the same as .toString();
- however returns null and undefined into their namesakes string values

<br>

### Implicit

<br>

##### ${Template literals}

- Inside template literals JavaScript implicitly coerces interpolation expressions to string values.