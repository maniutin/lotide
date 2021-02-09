const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;