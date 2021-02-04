const eqArrays = function(input, compared) {
  return input.length === compared.length && input.every((value, index) => value === compared[index]);
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
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

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "2" };
assertEqual(eqObjects(ab, ba), false); // => false

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const bca = { b: "2", c: "3", a: "1",  };
assertEqual(eqObjects(bca, abc), true); // => true

const abcd = { a: "1", b: "2", c: "3", d: "4"};
assertEqual(eqObjects(abc, abcd), false); // => false