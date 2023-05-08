function capitalize (names) {
  for (let index = 0; index < names.length; index++) {
    names[index] = names[index][0].toUpperCase() + names[index].slice(1); // function affects original object
  }
}

let names = ["chris", "kevin", "stephane"];
capitalize(names);
console.log(names); // ["Chris", "Kevin", "Stephane"]