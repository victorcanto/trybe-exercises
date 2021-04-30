const decode = require("../src/decode");

describe("decode", () => {
  it("decode é uma função", () => {
    expect("function").toBe(typeof decode);
  });
  it("A conversão de 12345 é aeiou", () => {
    expect("aeiou").toBe(decode("12345"));
  });
  const numbers = "6789";
  it("Os demais numeros não são convertidas em letras", () => {
    expect(numbers).toBe(decode(numbers));
  });
  const str = "6789BcD";
  it("A string recebida tem o mesmo tamanho da string retornada", () => {
    expect(str.length).toBe(decode(str).length);
  });
});
