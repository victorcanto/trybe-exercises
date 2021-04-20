const myFizzBuzz = require("../src/myFizzBuzz");

describe("myFizzBuzz", () => {
  it("Número divisível por 3 e 5, a função retorna fizzbuzz", () => {
    expect("fizzbuzz").toBe(myFizzBuzz(15));
  });
  it("Número divisível por 3, a função retorna fizz", () => {
    expect("fizz").toBe(myFizzBuzz(9));
  });
  it("Número divisível por 5, função retorna buzz", () => {
    expect("buzz").toBe(myFizzBuzz(25));
  });
  const num = 7;
  it("Número que não é divisível por 3 e 5, a função retorna o próprio número", () => {
    expect(num).toBe(myFizzBuzz(num));
  });
  it("Parametro diferente de number, a função retorna false", () => {
    expect(false).toBe(myFizzBuzz("7"));
  });
});
