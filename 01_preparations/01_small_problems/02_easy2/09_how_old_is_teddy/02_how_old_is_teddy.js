// Alternative

function getTeddyAge (min, max) {
 
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let age = getTeddyAge(20, 120);
console.log(`Teddy is ${age} Years old!`);