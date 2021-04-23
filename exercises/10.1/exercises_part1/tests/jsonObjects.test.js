const isEquivalent = require("../src/jsonObjects");

const arr = [
  {
    title: "My Title",
    description: "My Description",
  },
  {
    description: "My Description",
    title: "My Title",
  },
  {
    title: "My Different Title",
    description: "My Description",
  },
];

describe("isEquivalent", () => {
  it("obj1 e obj2 são iguais", () => {
    expect(true).toEqual(isEquivalent(arr[0], arr[1]));
  });
  it("obj1 e obj3 são diferentes", () => {
    expect(false).toEqual(isEquivalent(arr[0], arr[2]));
  });
  it("obj2 e obj3 são diferentes", () => {
    expect(false).toEqual(isEquivalent(arr[1], arr[2]));
  });
});
