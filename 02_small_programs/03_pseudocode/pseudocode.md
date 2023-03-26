d# Pseudocode

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

The question calls for a 'method' which is typically a function stored as a property value inside of an object's key/value pair sequence. I will assume for now that the term 'method' in this instance is a loose reference to a function definition/expression.

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
- increment the increment operator by +2 in the loop to read every other value e.g. index: 0, 2, 4, 6
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

/*

Pseudocode:

Informal:

- given a string 
- and a specified char
- the function should work out the indexOf the third occurrence 
- of the given char within the string
- and return that index
- if the char does not appear 3 or more times
- return null

INPUT: char string[] = "helloeveryone";
INPUT: char character = 'e';
OUTPUT: 7 (the third occurrence features at indexOf: 7)


Formal:

- START
- SET a function thirdOccurrence(){}
- PASS string, char to the function and receive as parameter values
- DECLARE and SET a counter variable to 0;
- LOOP over the string characters for string.length
- IF current string character === char, count++
- IF the count === 3, return index of current string character
- When the loop completes, if count < 3, return null;
- PRINT index returned (if any) at the function call;
- END

Code with intent:
Convert to code

```JavaScript
function thirdOccurrence (string, char) {

	let count = 0;

	for (let i = 0; i < string.length; i++) {
		if (string[i] === char){
			count++;
			if (count === 3) {
				return i;
			}
		}
	}
	if (count < 3) {
		return null;
	}
}

console.log(thirdOccurrence("axbxcdxex", "x"));
console.log(thirdOccurrence("axbxcde", "x"));
```
*/

<br>

#### 5. A function that takes two arrays of numbers and returns the result of merging the arrays. The elements of the first array should become the elements at the even indexes of the returned array, while the elements of the second array should become the elements at the odd indexes. For instance:

```JavaScript
merge([1, 2, 3], [4, 5, 6]); // => [1, 4, 2, 5, 3, 6]
```

/*

Pseudocode
Informal:

INPUT: 2 arrays: [1, 2, 3], [4, 5, 6]
OUTPUT: merged array values: [1, 4, 2, 5, 3, 6]

Create a function that accepts two arrays.
The function will return the result of merging the two arrays.
The elements in array1 will be at even index positions in the newArray.
the elements in array2 will be at odd index positions in the newArray.

We can create an newEmptyArray and push values to it to populate it and merge the arrays.
The firstArrayElements will be at newEmptyArrayIndex positions: 0, 2, 4
The second will be at newEmptyArrayIndex positions: 1, 3, 5

We will simply create a loop for the length of the first array seen as both arrays are the same length. Then we will push array1 element at index 0 and straight after will we push array2 element at index 0 and then continue the loop. This means the newArray will receive array1 element [0] at its position of [0] and then array2 element[0] at newArray[1] and so on as the loop continues. 

newArray index:

0: 1
1: 4
2: 2
3: 5
4: 3
5: 6


Formal:
- START
- SET a new function
- receive 2 array as parameters
- SET an empty array inside at the top level
- Create a FOR loop at index = 0, for array1.length, index++
- newArray.push array1[i], array2[i]
  - array1[0], array2[0]
  - array1[1], array2[1]
  - array1[2], array2[2]

- Layout:
- newArray = [array1[0], array2[0], array1[1], array2[1], array1[2], array2[2]]
- RETURN newArray;
- PRINT newArray
- END


Convert to code with purpose:
```JavaScript
function merge (array1, array2) {

	let newArray = [];

	for (let i = 0; i < array1.length; i++) {
		newArray.push(array1[i]);
		newArray.push(array2[i]);
}
return newArray;
}

console.log(merge([1, 2, 3], [4, 5, 6])); // => [1, 4, 2, 5, 3, 6]
```
*/
