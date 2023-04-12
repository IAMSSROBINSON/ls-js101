// Question 6
// What will the following code log to the console and why? Don't run it until you have tried to answer.

let num = 1;

while (num < 3) {
  num += 1;
}

console.log(num);

/*

let num = 1, global scope
while loop accesses num and uses it in condition
num reassigned while true
value of num increased by +1 to: 2
2 is still less than 3
while loop accessed
value of num increased by +1 to: 3
num now = 3 and while loop condition is false
console.log prints value of num: 3



*/