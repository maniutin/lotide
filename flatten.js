
const eqArrays = function(input, compared) {
  return input.length === compared.length &&
  input.every((value, index) => value === compared[index]);
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const flatten = function(arrayToFlat) {
  if (Array.isArray(arrayToFlat)) {
    return Array.prototype.concat.apply([], arrayToFlat);
  }
};


console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]