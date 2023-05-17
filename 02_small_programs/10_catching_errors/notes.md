# Catching Errors

JSON.parse method takes a valid String argument in JSON format and converts it into an object.
JSON.parse will throw an exception if the string is not valid JSON value format.

JSON strings look like object literals - the difference is that the keys are double quoted and the whole literal value is inside a string: 

```JavaScript
// JSON:
let json = `{"name" : "Stephen", "age" : 19}`;

// OBJECT:
let object = {name : "Stephen", age : 19};
```

<br>

## Try/Catch/Finally block

Instead of avoiding some errors we can let the error be thrown and catch it at that point in time with a try/catch/finally block (similar to if/else if/ else block in syntax layout).

<br>

```JavaScript
try{
  // try to do this thing, if might fail however
} catch(error) {
  // if above fails then catch the 'error' error object
  // print out the: error.name from the error Object
  // print out the: error.message from the error Object

  // do this thing instead
} finally {
  // do this thing even if above code throws an error regardless
}
```

<br>

## When to use try/catch/finally

- When a built in JavaScript function/method can throw some kind of error and you need to handle/prevent it
- When a Guard Clause is not possible or practical to prevent the error