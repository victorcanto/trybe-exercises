const { getUserName } = require("../src/exercise2");

describe("getUserName", () => {
  it("caso em que o usuário é encontrado", () => {
    expect.assertions(1);
    return getUserName(4).then((data) => expect(data).toEqual("Mark"));
  });
});
