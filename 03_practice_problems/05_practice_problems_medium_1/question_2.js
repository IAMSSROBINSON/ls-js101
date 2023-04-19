// Starting with the string:

let munstersDescription = "The Munsters are creepy and spooky.";

// Return a new string that swaps the case of all of the letters:
// `tHE mUNSTERS ARE CREEPY AND SPOOKY.`

let oppositeCase = [];

// for (let index = 0; index < munstersDescription.length; index++) {
//   if (munstersDescription[index] === munstersDescription[index].toUpperCase()) {
//     oppositeCase.push(munstersDescription[index].toLowerCase());
//   } else {
//     oppositeCase.push(munstersDescription[index].toUpperCase());
//   }
// }
// console.log(oppositeCase.join(""))


for (let index = 0; index < munstersDescription.length; index++) {
  
  munstersDescription[index] === munstersDescription[index].toUpperCase() ? oppositeCase.push(munstersDescription[index].toLowerCase()) : oppositeCase.push(munstersDescription[index].toUpperCase());
}
console.log(oppositeCase.join(""))