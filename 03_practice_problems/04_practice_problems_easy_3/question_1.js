// Write three different ways to remove all of the elements from the following array:

let numbers = [1, 2, 3, 4];


console.log(numbers.splice());

console.log(numbers.slice(numbers.length));

while(numbers.length){
  numbers.pop();
}
console.log(numbers);

numbers.length = 0;
console.log(numbers);
