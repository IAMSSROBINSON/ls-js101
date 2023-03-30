

try {
  let data1 = 'not valid JSON';
  console.log(JSON.parse(data1));
} catch (error) {
  console.log("There was an", error.name, "parsing JSON data:", error.message);
} finally {
  console.log("Finally: Finished parsing data.");
}

// JSON.parse method takes valid String argument in JSON format and
// converts it into an object
// JSON.parse throws an exception as the string is not valid JSON value format

console.log("\n");
let data2 = `{"name1" : "Kernighan", "name2" : "Ritchie"}`;
console.log("K&R: ", JSON.parse(data2));
console.log("typeof: ", typeof data2);
console.log("\n");

let json = `{"name" : "Stephen", "age" : 19}`;
console.log("JSON.parse() output: ", JSON.parse(json));
console.log("typeof JSON.parse(json): ",typeof JSON.parse(json));
console.log("typeof variableName passed in: ", typeof json);
console.log("\n");

// valid JSON string with double quoted keys and
// `whole literal value inside a string`


let object1 = {"name" : "Stephen", "age" : 19};
let object2 = {name : "Stephen", age : 19};
// quotes properties are redundant in objects but still work

console.log("Object1 variable: ", object1);
console.log("Object2 variable: ", object2);
console.log("typeof variableName: ", typeof object1);
console.log("typeof variableName: ", typeof object2);
console.log("\n");
