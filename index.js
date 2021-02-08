const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const flatten = require('./flatten');
const findKeyByValue = require('./findKeyByValue');
const findKey = require('./findKey');
const eqObjects = require('./eqObjects');
const eqArrays = require('./eqArrays');
const countOnly = require('./countOnly');
const countletters = require('./letterPositions');
const letterPositions = require('./letterPositions');
const assertObjectsEqual = require('./assertObjectsEqual');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const without = require('./without');
const takeUntil = require('./takeUntil');
const map = require('./map');

module.exports = {
head,
tail,
middle,
flatten,
findKeyByValue,
findKey,
eqObjects,
eqArrays,
countOnly,
countletters,
countindex,
assertObjectsEqual,
assertEqual,
assertArraysEqual,
without,
takeUntil,
map
};