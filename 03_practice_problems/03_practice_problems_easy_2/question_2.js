// The Array.prototype.reverse method reverses the order of elements in an array, and Array.prototype.sort can rearrange the elements in a variety of ways, including descending. Both of these methods mutate the original array as shown below. Write two distinct ways of reversing the array without mutating the original array. Use reverse for the first solution, and sort for the second.

// REVERSE
let numbers = [1, 2, 3, 4, 5];
// numbers.reverse(); // destructive method
console.log(numbers); // [ 5, 4, 3, 2, 1 ]
[...numbers].reverse(); // non destructive method
console.log(numbers); // confirm non-destructiveness
let saveReversed = [...numbers].reverse(); // save return from non destructive method
console.log(saveReversed,"\n"); // output reverse



//SORT
numbers = [1, 2, 3, 4, 5];
// numbers.sort((num1, num2) => num2 - num1); // destructive method
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers.slice().sort((number1, number2)=>{ // non destructive method
  return number2 - number1;
}); 
console.log(numbers) // confirm non-destructiveness
let saveSorted = numbers.slice().sort((number1, number2)=>{ // non destructive method
  return number2 - number1;
}); 
console.log(saveSorted,"\n"); // output sorted



// Bonus Question: Can you do it using the Array.prototype.forEach() method?
numbers = [1, 2, 3, 4, 5]; // reset array order
console.log(numbers);  // confirm reset array order: 

let reversed = []; // empty array declared
numbers.forEach((number, index)=>{ // use index values of each element
  reversed.push(numbers[numbers.length - 1 - index]); // push to 
})
console.log(reversed) // output reversed
console.log(numbers) // confirm non-destructiveness



// Bonus Question: Can you do it using the Array.prototype.forEach() method?
numbers = [1, 2, 3, 4, 5]; // reset array order
console.log(numbers);  // confirm reset array order: 

let reversedAgain = []; // empty array declared
numbers.forEach((number)=>{
  reversedAgain.unshift(number); // take number from end of array
});
console.log(reversedAgain) // output reversedAgain
console.log(numbers) // confirm non-destructiveness