function capitalize (names) {
  return names.map((name) => {
    return name[0].toUpperCase() + name.slice(1);
  });
}

let names = ["stephane", "nassima", "emily"];
console.log(capitalize(names)); // [ 'Stephane', 'Nassima', 'Emily' ]
console.log(names);             // [ 'stephane', 'nassima', 'emily' ]