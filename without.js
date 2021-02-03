
const eqArrays = function(input, compared) {
  return input.length === compared.length &&
  input.every((value, index) => value === compared[index]);
};

const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const without = function(source, itemsToRemove) {
  source = source.filter(value => !itemsToRemove.includes(value));
  return source;
};

assertArraysEqual(eqArrays(without([1, 2, 3], [1]), [2, 3]), true); // => [2, 3]
assertArraysEqual(eqArrays(without(["1", "2", "3"], [1, 2, "3"]), ['1', '2']), true); // => ["1", "2"]