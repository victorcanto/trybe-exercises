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

test("Verifica a chamda, o retorno esperado e os paramentros passados", () => {
  math.somar = jest.spyOn(math, "somar").mockImplementation((a, b) => a + b);

  math.somar(7, 3);
  expect(math.somar).toHaveBeenCalled();
  expect(math.somar(7, 3)).toBe(10);
  expect(math.somar).toHaveBeenCalledWith(7, 3);
});

test("Verifica a chamada, o retorno, os parametros e quantidade de vezes que foi chamada", () => {
  math.dividir = jest
    .fn()
    .mockReturnValue(15)
    .mockReturnValueOnce(2)
    .mockReturnValueOnce(5);

  expect( math.dividir).toHaveBeenCalledTimes(0);

  expect(math.dividir(6, 2)).toBe(2);
  expect(math.dividir).toHaveBeenCalledTimes(1);
  
  expect(math.dividir(6, 2)).toBe(5);
  expect(math.dividir).toHaveBeenCalledTimes(2);

  expect(math.dividir(6, 2)).toBe(15);
  expect(math.dividir).toHaveBeenCalledTimes(3);

  math.dividir(8, 4);
  expect(math.dividir).toHaveBeenCalledWith(8, 4);

});
