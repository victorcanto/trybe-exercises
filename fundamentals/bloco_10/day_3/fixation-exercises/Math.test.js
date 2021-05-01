const math = require("./Math");

test("Verifica se a funcção mockada foi chamada", () => {
  math.subtrair = jest.fn();

  math.subtrair(5, 3);
  expect(math.subtrair).toHaveBeenCalled();
});

test("Verifica a chamada e o retorno da função multiplicar", () => {
  math.multiplicar = jest.fn().mockReturnValue(10);

  math.multiplicar(7, 9);
  expect(math.multiplicar).toHaveBeenCalled();
  expect(math.multiplicar(7, 9)).toBe(10);
});
