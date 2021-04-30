const encode = require("../src/encode");

describe("encode", () => {
  it("encode é uma função", () => {
    expect("function").toBe(typeof encode);
  });
  it("A conversão de aeiou é 12345", () => {
    expect("12345").toBe(encode("aeiou"));
  });
  const letters = "bcdfghjklmnpqrstvwxyz";
  it("As demais letras não são convertidas em numeros", () => {
    expect(letters).toBe(encode(letters));
  });
  const str = "aeiou";
  it("A string recebida tem o mesmo tamanho da string retornada", () => {
    expect(str.length).toBe(encode(str).length);
  });
});
