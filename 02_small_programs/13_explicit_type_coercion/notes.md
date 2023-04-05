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

- ParseInt(); Converts strings to integers (whole numbers)
  - As long as the string begins with a digit or digit preceded by - or +
  - Can also parse binary string with radix base number e.g. `parseInt("10101", 2); // 21`
- ParseFloat(); Converts strings to floating point numbers



### Implicit