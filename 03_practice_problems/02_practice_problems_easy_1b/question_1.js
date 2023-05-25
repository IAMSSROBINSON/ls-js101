// Will the code below raise an error?

let numbers = [1, 2, 3];
numbers[6] = 5;
console.log(numbers)
numbers.forEach((number)=>{
  console.log(number)
})
console.log(numbers.length)
console.log(numbers[4])

/*

ANSWER:
No.

WHY:
The second line of code references the 'numbers array' by name and uses bracket notation to access the array property index position: 6 and assign the value there to the number: 5. This will not raise an error as it is valid JavaScript code. The index position stated will be assigned the value stated and every index property in-between will be assigned an empty space with no value. The properties will return: undefined when referenced but they are devoid of value and are not counted as a valid data type when iterating over as an element and will be ignored.

*/