# Pseudocode

Programming language agnostic description / instructions for attempting to solve a problem (this can be considered part of the 'PEDAC' process for solving problems, inclusive of the Data Structures & Algorithms sections).

<br>

## Descriptive keywords

|Keyword						|Meaning																|
|:------------------|:--------------------------------------|
|START							|Start of the program										|
|SET								|Set a variable that we can use later		|
|GET								|Retrieve input from user								|
|PRINT							|Display output													|
|READ								|Retrieve value from variable						|
|IF/ELSE IF/ELSE		|Start of the program										|
|WHILE							|Looping logic													|
|END								|End of program													|

<br>

## Attempts at Pseudocode

<br>

#### 1. A function that returns the sum of two numbers:

- START
- SET 2 int variables with values or GET values from user input
- pass variables to function called: sum()
- READ the values passed into the function
- IF the values are not integers: return, END
- ELSE add values and return result to the caller
- SET result from caller to a variable
- PRINT result  
- END

<br>

#### 2. A function that takes an array of strings, and returns a string that is all those strings concatenated together:

<br>

#### 3. A method that takes an array of integers, and returns a new array with every other element from the original array, starting with the first element. For instance:

```JavaScript
everyOther([1,4,7,2,5]); // => [1,7,5]
```

<br>

#### 4. A function that determines the index of the 3rd occurrence of a given character in a string. For instance, if the given character is 'x' and the string is 'axbxcdxex', the function should return 6 (the index of the 3rd 'x'). If the given character does not occur at least 3 times, return null:

<br>

#### 5. A function that takes two arrays of numbers and returns the result of merging the arrays. The elements of the first array should become the elements at the even indexes of the returned array, while the elements of the second array should become the elements at the odd indexes. For instance:

```JavaScript
merge([1, 2, 3], [4, 5, 6]); // => [1, 4, 2, 5, 3, 6]
```
