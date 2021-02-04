
const eqArrays = function(input, compared) {
  return input.length === compared.length && 
  input.every((value, index) => value === compared[index])
};

const assertArraysEqual = function(actual, expected) {
 if (eqArrays(actual, expected)) {
  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
 } else {
  console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
 }
};

assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])// => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3])// => false