const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const element of Object.keys(object1)) {
    if (!Object.keys(object2).includes(element)) {
      return false;
    }
    if (object1[element].length !== object2[element].length) {
      return false;
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
