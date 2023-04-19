// Alyssa was asked to write an implementation of a rolling buffer. You can add and remove elements from a rolling buffer. However, once the buffer becomes full, any new elements will displace the oldest elements in the buffer.

// She wrote two implementations of the code for adding elements to the buffer. In presenting the code to her team leader, she said "Take your pick. Do you prefer push() or concat() for modifying the buffer?".

// Is there a difference between these implementations, other than the method she used to add an element to the buffer? You may assume that newElement will always be a primitive value.

let buffer = [1, 2, 3];

function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}
// .push() will add elements to the end of an array and modify said array destructively. So the array returned is the original array with the new values pushed to it.

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

console.log("2", addToRollingBuffer2(buffer, 4, 10));
console.log("2", buffer);

console.log("1", addToRollingBuffer1(buffer, 4, 10));
console.log("1", buffer);


// .concat() will combine values to output a new array and the original array remains non mutated. So the array returned is a new array with the values pushed to it and the original array maintains its original values.