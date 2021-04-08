const assert = require("assert");

const greet = (username, message = "Hi") => {
  return `${message} ${username}`;
};

assert.strictEqual(greet("John"), "Hi John");
assert.strictEqual(greet("John", "Good morning"), "Good morning John");
assert.strictEqual(greet("Isabela", "Oi"), "Oi Isabela");
