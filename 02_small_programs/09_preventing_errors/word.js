function lowerInitial(word) {
  if (word.trimStart().length === 0) {
    return "-";
  }
  return word[0].toLowerCase();
}

console.log(lowerInitial("Joe")); // "j"
console.log(lowerInitial("Karen")); // "k"
console.log(lowerInitial("")); //
