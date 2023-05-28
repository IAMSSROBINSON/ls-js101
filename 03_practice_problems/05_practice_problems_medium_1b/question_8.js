// One day, Spot was playing with the Munster family's home computer, and he wrote a small program to mess with their demographic data:

let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}

// After writing this function, he typed the following code:
console.log(messWithDemographics(munsters));
// Before Grandpa could stop him, Spot hit the Enter key with his tail. Did the family's data get ransacked? Why or why not?


/*

OUTPUT: 
Yes.

WHY:
The object passed by reference to the function never gets reassigned to a new object and thus the mutations that occur within the function occur on the original object thus changing the original values. 

*/