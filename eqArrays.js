const assertEqual = require('./assertEqual');

const eqArrays = function(input, compared) {
  return input.length === compared.length && input.every((value, index) => value === compared[index])
};

module.exports = eqArrays;