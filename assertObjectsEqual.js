const eqArrays = function(input, compared) {
  return input.length === compared.length && input.every((value, index) => value === compared[index]);
};

const eqObjects = function(object1, object2) {
  // Object.keys returns an ARRAY of keys
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  // Loop over each key in Object.keys array
  for (const key of Object.keys(object1)) {
    // object1[key] is accesssing value inside object
    // checks if a value is an array
   if (!Array.isArray(object1[key]) && !Array.isArray(object2[key])) {
      // checks if keys from object1 are present in object2
      if (!Object.keys(object2).includes(key)) {
        return false;
      }
      // checks if values from object1 are NOT the same as in object2
      if (object1[key] !== object2[key]) {
        return false;
      }
   } else {
     // compares two arrays if both values are arrays
     return eqArrays(object1[key], object2[key]);
   }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
   console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
   console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
 };

assertObjectsEqual({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }); // => true

assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "1" }); // => true

assertObjectsEqual({ b: "2", c: "3", a: "1",  }, { a: "1", b: "2", c: "9"}); // => true
