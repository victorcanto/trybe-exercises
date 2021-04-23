const uppercase = require("../src/exercise1");

test("Verifica se uppercase retorna TEST após passar a string test", (done) => {
  uppercase("test", (str) => {
    expect('TEST').toBe(str);
    done();
  });
});
