// Further Exploration
// You may have noticed that the solution continues iterating until index points to the last character in the string, which means that text[index + 1] is beyond the end of the string during the last iteration. Why does it do this? What happens if we stop iterating when index is equal to text.length - 1?

// It's also possible to solve this using regular expressions. For a nice challenge, give this a try with regular expressions. Can you think of any other solutions that don't use regular expressions?


// ANSWER:
// Strings are character arrays, and the final character in a character array is always the null character: '\0'. The null character tells the compiler that there are no more characters to read, and that the string has ended.

// When iterating through a string, the final iteration appears to look beyond the end of the string because strings (being arrays) start indexing characters at index 0. Therefore, the length of a string (the number of characters in a string) is always +1 greater than the number of indexes used to reference each character. For example, the string "hi" has a length of 2 characters, but character 'h' is referenced at index 0 (the starting index), and character 'i' is referenced at index 1 (the next sequential index number, which is +1 greater than the previous index).

// Using bracket notation on a string indicates that you are referencing the characters by index, and as the final character in a string will have an index 1 less than the length, accessing the index + 1 will allow you to access the very last character when iterating through the entire string but the length of a string is always equal to the number of characters in the string.