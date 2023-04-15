

function addNames (arr, name) {
  arr.push(name);
}

let names = ["Stephane", "Emily"];
addNames(names, "Deborah"); // permanently changes the original array = Destructive
console.log(names); // [ 'Stephane', 'Emily', 'Deborah' ]

