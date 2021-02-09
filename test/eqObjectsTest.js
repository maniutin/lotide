const eqObjects = require('../eqObjects');
const assert = require('chai').assert;


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "2" };
const abc = { a: "1", b: "2", c: "3" };
const bca = { b: "2", c: "3", a: "1",  };
const abcd = { a: "1", b: "2", c: "3", d: "4"};


describe("#eqObjects", () => {
  it ("returns true for eqObjects(cd, dc)", () => {
    assert.strictEqual(eqObjects(cd, dc), true);
  });
  it ("returns false for eqObjects(cd, cd2)", () => {
    assert.strictEqual(eqObjects(cd, cd2), false);
  });
  it ("returns false for eqObjects(ab, ba)", () => {
    assert.strictEqual(eqObjects(ab, ba), false);
  });
  it ("returns false for eqObjects(ab, abc)", () => {
    assert.strictEqual(eqObjects(ab, abc), false);
  });
  it ("returns true for eqObjects(bca, abc)", () => {
    assert.strictEqual(eqObjects(bca, abc), true);
  });
  it ("returns false for eqObjects(abc, abcd)", () => {
    assert.strictEqual(eqObjects(abc, abcd), false);
  });
});