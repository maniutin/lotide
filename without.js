const eqArrays = function(input, compared) {
  return input.length === compared.length && 
  input.every((value, index) => value === compared[index])
};

const assertArraysEqual = function(arr1, arr2) {
 if (eqArrays(arr1, arr2)) {
  console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
 } else {
  console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
 }
};

const without = function(source, itemsToRemove) {
  source = source.filter(value => !itemsToRemove.includes(value));
  return source;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ['1', 2])
assertArraysEqual(without([1, 2, 3], [1]), [2, 3])