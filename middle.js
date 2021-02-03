const eqArrays = function(input, compared) {
  return input.length === compared.length &&
  input.every((value, index) => value === compared[index]);
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const middle = function(array) {
  let middleNumber = [];
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      let middle = array[Math.round((array.length - 1) / 2)];
      middleNumber.push(middle - 1, middle);
    } else {
      let middle = array[Math.round((array.length - 1) / 2)];
      middleNumber.push(middle);
    }
  }
  return middleNumber;
};

assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4]), [2]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 5]); // => [3, 4]