const assert = require('assert');

const getLargestNumber = (array) => {
  let largestNumber = 0;
  for (let index = 0; index < array.length; index += 1) {
      if (array[index] > array[index - 1]) {
          largestNumber = array[index];
      }
  }
  return largestNumber;
}

const parameter = [45, 8, 2, 50, 1, 7, 99];
const result = 99;
const actual = getLargestNumber(parameter);

assert.strictEqual(typeof getLargestNumber, 'function');
assert.deepStrictEqual(actual, result);