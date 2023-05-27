// Write three different ways to remove all of the elements from the following array:

let numbers = [1, 2, 3, 4];

// Loop and pop() from the end
// while (numbers.length > 0) {
//   numbers.pop();
// }
// console.log(numbers);

// splice from index position 0 length of array, or leave blank for default eoa
// numbers.splice(0, numbers.length);
// console.log(numbers);


// reassign property length to 0
numbers.length = 0;
console.log(numbers);
