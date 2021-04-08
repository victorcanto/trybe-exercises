const assert = require("assert");

const arrays = [["1", "2", "3"], [true], [4, 5, 6]];

function flatten() {
  const result = arrays.reduce((acc, currentValue) => {
    return acc.concat(currentValue);
  }, []);
  return result;
}

assert.deepStrictEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);
