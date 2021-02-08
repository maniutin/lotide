const eqArrays = require('./eqArrays')
const assertArraysEqual = require('./assertArraysEqual')
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

module.exports = middle;
