const { getUserName } = require("../src/exercise2");

describe("getUserName", () => {
  it("caso em que o usuário é encontrado", async () => {
    expect.assertions(1);
    const data = await getUserName(4);
    expect(data).toEqual("Mark");
  });
  it("caso em que o usuário não é encontrado", async () => {
    expect.assertions(1);
    try {
      await getUserName(6);
    } catch (e) {
      expect(e).toEqual({ error: "User with " + 6 + " not found." });
    }
  });
});
