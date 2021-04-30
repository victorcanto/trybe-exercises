const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}
const expected = myRemoveWithoutCopy([1, 2, 3, 4], 3);
const expected2 = myRemoveWithoutCopy([1, 2, 3, 4], 5);
const array = [1, 2, 3, 4];

assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), expected);
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);
myRemoveWithoutCopy(array, 1);
assert.strictEqual(array.length, 3);
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), expected2);
