// Welcome Stranger
// Create a function that takes 2 arguments, an array and an object. The array will contain 2 or more elements that, when combined with adjoining spaces, will produce a person's name. The object will contain two keys, "title" and "occupation", and the appropriate values. Your function should return a greeting that uses the person's full name, and mentions the person's title.

// Example:

// console.log(
//   greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
// );
// // logs Hello, John Q Doe! Nice to have a Master Plumber around.

function greetings (array, object) {

	let firstName = array[0];
	let initial = array[1];
	let lastName = array[2];
	let title = object.title;
	let occupation = object.occupation;

	 return (`Hello, ${firstName} ${initial} ${lastName}! Nice to have a ${title} ${occupation} around.`)
}

console.log(greetings(["John", "Q", "Doe"], {title: "Master", occupation: "Plumber"}));
// "Hello, John Q Doe! Nice to have a Master Plumber around."


/*

Pseudocode:
Informal:
- create a function 
- the function will accept 2 arguments as parameters 
	-  one array with strings as elements that form a name
- the function needs to access the array elements and object values to return a string using the values
		- access the array values via indexing of use .join() to turn array into a string separated by pattern specified (" "), the default if nothing is specified is to separate, with, commas,
	- one object with key value pairs
		- use dot notation to access the keys values
		- use bracket notation to access the the objects keys values


INPUT: 
	Array: ["John", "Q", "Doe"]
	Object: { title: "Master", occupation: "Plumber" }

OUTPUT:
	logs: "Hello, John Q Doe! Nice to have a Master Plumber around."

Formal:
	- START
	- SET a function greetings () {}
	- RECEIVE the 2 arguments: greetings (["John", "Q", "Doe"], {title: "Master", occupation: "Plumber"}) {}
	- CHECK you can access the contents by console.logging using array indexing and dot notation and via using .join(" ") to combine array into one string separating elements by an empty string character to use in final string. If accessing the object via bracket notation remember to enclose the ["key"] inside double quotes.
	- IF you can access the correct values required to produce the final string value then save all relevant values to variables and use string interpolation to construct final string value
	RETURN final string 
	PRINT final string to confirm
	- END

Flowchart:

Convert to code:

*/

