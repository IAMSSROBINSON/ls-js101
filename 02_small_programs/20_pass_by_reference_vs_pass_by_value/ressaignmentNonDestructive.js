

function addNames (arr, name) {
  arr = arr.concat([name]); // .concat() concatenates 2 arrays but is non destructive to original arr out side the function
}

let names = ["Stephane", "Emily"];
addNames(names, "Deborah"); // permanently changes the original array = Destructive
console.log(names); // [ 'Stephane', 'Emily', 'Deborah' ]

