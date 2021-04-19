const assert = require("assert");

const findTheNeedle = (words, name) => {
  let result = -1;

  words.forEach((word, index) => {
    if (word === name) result = index;
  });
  return result;
};

let words = ["house", "train", "slide", "needle", "book"];
let expected = 3;
let output = findTheNeedle(words, "needle");
assert.strictEqual(output, expected);

words = ["plant", "shelf", "arrow", "bird"];
expected = 0;
output = findTheNeedle(words, "plant");
assert.strictEqual(output, expected);

words = ["plant", "shelf", "arrow", "bird"];
expected = -1;
output = findTheNeedle(words, "plat");
assert.strictEqual(output, expected);