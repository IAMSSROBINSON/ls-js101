// Given a string, return a new string that replaces every occurrence of the word "important" with "urgent":

let advice = "Few things in life are as important as house training your pet dinosaur important."
let newString = advice.split(' ').map((word)=>{
  if (word.match(/important/) !== null){
    return 'urgent';
  }
  return word;
})

console.log(newString.join(' '));
