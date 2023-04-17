// Consider the following object:

let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
// Create an array from this object that contains only two elements: Barney's name and Barney's number:
// [ 'Barney', 2 ]

// let barneysDetails = Object.entries(flintstones)[2]
// console.log(barneysDetails);

console.log(Object.entries(flintstones).filter((element)=>{
  return (element[0] === 'Barney');
}).shift());

