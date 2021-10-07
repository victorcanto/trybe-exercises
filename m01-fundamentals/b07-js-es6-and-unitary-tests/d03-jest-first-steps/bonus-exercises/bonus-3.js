const assert = require('assert');

const removeMiddle = (words) => {
  const index = Math.floor(words.length / 2)
  const middleItem = [words[index]];
  words.splice(index, 1);
  return middleItem;
}

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.strictEqual(typeof removeMiddle, 'function');
assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);