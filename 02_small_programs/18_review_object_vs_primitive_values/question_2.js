// Question 2
// What will the following code log to the console and why? 
// Don't run it until you have tried to answer.

let myWord = 'Hello';
myWord.repeat(3);
console.log(myWord);
myWord.replace('H', 'J');
console.log(myWord);
myWord.toUpperCase();
console.log(myWord);

/*

variable declare and initialized to string value (primitive)
string method.repeat(3) performed on variable returning new string (not saved)
console.log prints original variable value 'Hello'
string method.replace perform on variable returning new string (not saved)
console.log prints original variable value 'Hello'
string method.toUpperCase() performed returning new string (not saved)
console.log prints original variable value 'Hello'



*/