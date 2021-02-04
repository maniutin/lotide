const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    
    results.push(callback(item));
    
  }
  return results;
}
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

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
const results2 = map(words, word => word + "ay ");
const results3 = map(words, word => word.length);
assertArraysEqual((results1), [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual((results2), [ "grounday ", "controlay ", "toay ", "majoray ", "tomay "]);
assertArraysEqual((results3), [ 6, 7, 2, 5, 3]);
