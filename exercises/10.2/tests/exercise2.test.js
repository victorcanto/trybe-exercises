const { getUserName } = require("../src/exercise2");

describe("getUserName", () => {
  it("caso em que o usuário é encontrado", () => {
    expect.assertions(1);
    return getUserName(4).then((data) => expect(data).toEqual("Mark"));
  });
  it("caso em que o usuário não é encontrado", () => {
    expect.assertions(1);
    return getUserName(6).catch((e) =>
      expect(e).toEqual({ error: "User with " + 6 + " not found." })
    );
  });
});
