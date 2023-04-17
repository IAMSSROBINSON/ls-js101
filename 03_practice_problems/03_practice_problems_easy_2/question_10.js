// Write a one-line expression to count the number of lower-case t characters in each of the following strings:

let statement1 = "The Flintstones Rock!";
// let statement2 = "Easy come, easy go.";


let letters = 0;

for (let index = 0; index < statement1.length; index++) {
  if(statement1[index] === 't') letters++
  
}
console.log(letters)


console.log(statement1.split('').filter((letter)=> letter === 't').length);