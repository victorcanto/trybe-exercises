const assert = require('assert');

function secondThirdSmallest(array) {
  let results = []
  array.sort(function (x, y) {
      return x - y;
  });
  results.push(array[1], array[2]);
  return results;
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];
const actual = secondThirdSmallest(parameter);

assert.strictEqual(typeof secondThirdSmallest, 'function');
assert.deepStrictEqual(actual, result);