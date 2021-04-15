const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

assert.strictEqual(sum(4, 5), 9, 'A soma de 4 e 5 é igual a 9');
assert.strictEqual(sum(0, 0), 0, 'Somar zero a qualquer outro número, o resultado será o próprio número');
assert.throws(() => {
  sum(4, '5');
});
assert.throws(() => {
  sum(4, '5');
}, /^Error: parameters must be numbers$/);