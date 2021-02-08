const eqArrays = require('./eqArrays');

const flatten = function(arrayToFlat) {
  if (Array.isArray(arrayToFlat)) {
    return Array.prototype.concat.apply([], arrayToFlat);
  }
};

module.exports = flatten;