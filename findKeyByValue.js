function findKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

module.exports = findKeyByValue;
