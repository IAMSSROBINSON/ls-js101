// UTF-16 String Value
// Write a function that determines and returns the UTF-16 string value of a string passed in as an argument. The UTF-16 string value is the sum of the UTF-16 values of every character in the string. (You may use String.prototype.charCodeAt() to determine the UTF-16 value of a character.)


function utf16Value(string){
	let sum = 0;
	
	for (let i = 0; i < string.length; i++) {
		
		sum += string[i].charCodeAt()
	
	}
	return sum;
}

console.log(utf16Value('Four score'));         // 984
console.log(utf16Value('Launch School'));      // 1251
console.log(utf16Value('a'));                  // 97
console.log(utf16Value(''));                   // 0

// // The next three lines demonstrate that the code
// // works with non-ASCII characters from the UTF-16
// // character set.

const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA));                  // 937
console.log(utf16Value(OMEGA + OMEGA + OMEGA));  // 2811


/*

Pseudocode:

Informal:

INPUT: "string"
OUTPUT: int (utf-16 sum value of all string characters)

A utf-readable string/value will get passed into the function
each char/symbol will have a utf-16 value: use prototype.charCodeAt()
	- can be used on individual chars
loop over each char in the string and save the value (adding to the sum on each char)
	- string[i] === currentChar
	- string[i].charCodeAt() === utf-16Value

Formal:
- START
- SET function utf16Value(){}
- receive string/value to function parameter
- loop over the string characters for string.length
- if string is empty (.length === 0) return 0;
- for each character sum += charValue
- when loop is finished return sum
- END

Convert to code:
*/