const assert = require("assert");

const verify = (password) => {
  if (password == null) return false;
  else if (password.length <= 8) return false;
  else if (
    !/[A-Z]/.test(password) ||
    !/[a-z]/.test(password) ||
    !/[0-9]/.test(password)
  ) {
    return false;
  }
  return true;
};

assert.strictEqual(typeof verify, "function");
assert.strictEqual(verify("12345678"), false);
assert.strictEqual(verify(null), false);
assert.strictEqual(verify("victortrybestudent"), false);
assert.strictEqual(verify("VICTORTRYBESTUDENT"), false);
assert.strictEqual(verify("VictorTrybeStudent"), false);
assert.strictEqual(verify("V1c70r7rybe574den7"), true);
