function changeName (name) {
  name = "bob"; // local scope
}

function anotherFunction () {

  let name = 'jim'; // local scope
  changeName(name);
  console.log(name); // output: 'jim'
}

anotherFunction();