# Pseudocode

Programming language agnostic description / instructions for attempting to solve a problem (this can be considered part of the 'PEDAC' process for solving problems, inclusive of the Data Structures & Algorithms sections).

Informal pseudocode is a relaxed talk through of the logical instructions required to solve the problem.

Formal pseudocode takes into consideration the below keywords and makes use of concrete commands and even variable naming and a step closer to solving the problem with code.

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

  ##### Informal pseudocode: 
  - Given a collection (Data Structure: array) of strings
  - Create a function that iterates over each element inside the collection (Loop)
  - The function should return 1 final string value which is the result of each string combined into one
  
	##### Formal pseudocode:
	- START
	- SET a variable that will be used to store the final value
	- DEFINE a function combineStrings()
	- The function should receive 1 argument (an array)
	- SET an empty string variable
	- CALL the function and pass in the array of strings: combineStrings(array)
	- Loop over each iteration of the array and READ the values
	- SET the empty string = to the empty string + current iteration value
	- When loop ends for length of the array
	- RETURN final string variable
	- PRINT final string value
	- END

	<br>
	
	##### Example:

	```JavaScript
	let arrayOfStrings = ["one", "two", "three", "four"];

	function combineStrings (arrayOfStrings) {
		let finalString = "";

		arrayOfStrings.forEach((string)=>{
			finalString += string;
		});

	return finalString;
	}

	console.log(combineStrings(arrayOfStrings));
	
	```

<br>

#### 3. A method that takes an array of integers, and returns a new array with every other element from the original array, starting with the first element. For instance:

```JavaScript
everyOther([1,4,7,2,5]); // => [1,7,5]
```

##### Informal pseudocode: 

The question calls for a 'method' which is typically a function stored as a property value inside of an object's key/value pair sequence. I will assume for now that the term 'method' is this instance is a loose reference to a function definition/expression.

- Create a function
- INPUT: The function will receive an array full of integer elements
- iterate over array elements and push every other element to new array
- OUTPUT: return a new array from function
- save new array and test result by logging contents of returned array

##### Formal pseudocode:

- START
- SET an array of integer elements: `let intArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];`
- SET a `function everyOtherElement (intArray) {}` that accepts the array in the parameter value
- READ and loop over the array elements in the function
- increment the increment operator by +2 in the loop to read every other value e.g. 0, 2, 4, 6
- SET an empty array
- IF value at current index is 'every other' PUSH to empty array
- return that new array
- PRINT values in new array to confirm
- END

<br>

##### Translating to code:

```JavaScript
console.log(everyOther([1,4,7,2,5])); // => [1,7,5]

function everyOther (array) {

	let newArray = [];

	for (let i = 0; i < array.length; i = i + 2) {
		newArray.push(array[i]);
	}

	return newArray
}
```

<br>

#### 4. A function that determines the index of the 3rd occurrence of a given character in a string. For instance, if the given character is 'x' and the string is 'axbxcdxex', the function should return 6 (the index of the 3rd 'x'). If the given character does not occur at least 3 times, return null:

<br>

#### 5. A function that takes two arrays of numbers and returns the result of merging the arrays. The elements of the first array should become the elements at the even indexes of the returned array, while the elements of the second array should become the elements at the odd indexes. For instance:

```JavaScript
merge([1, 2, 3], [4, 5, 6]); // => [1, 4, 2, 5, 3, 6]
```
