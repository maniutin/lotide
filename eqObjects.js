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
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const element of Object.keys(object1)) {
    if (!Array.isArray(object1[element]) && !Array.isArray(object2[element])) {
      if (!Object.keys(object2).includes(element)) {
        return false;
      }
      if (object1[element].length !== object2[element].length) {
        return false;
      }
    } else {
      return eqArrays(object1[element], object2[element]);
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
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const bca = { b: "2", c: "3", a: "1",  };
assertEqual(eqObjects(bca, abc), true); // => true

const abcd = { a: "1", b: "2", c: "3", d: "4"};
assertEqual(eqObjects(abc, abcd), false); // => false