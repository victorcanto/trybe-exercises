const math = require("./Math");

test("#subtrair R1", () => {
  math.subtrair = jest.spyOn(math, 'subtrair');

  math.subtrair(5, 3);
  expect(math.subtrair).toHaveBeenCalled();
});

test("#multiplicar R2", () => {
  math.multiplicar = jest.fn().mockReturnValue(10);

  math.multiplicar(7, 9);
  expect(math.multiplicar).toHaveBeenCalled();
  expect(math.multiplicar(7, 9)).toBe(10);
});

test("#somar R3", () => {
  math.somar = jest.spyOn(math, "somar").mockImplementation((a, b) => a + b);

  math.somar(7, 3);
  expect(math.somar).toHaveBeenCalled();
  expect(math.somar(7, 3)).toBe(10);
  expect(math.somar).toHaveBeenCalledWith(7, 3);
});

test("#dividir R4", () => {
  math.dividir = jest
    .fn()
    .mockReturnValue(15)
    .mockReturnValueOnce(2)
    .mockReturnValueOnce(5);

  expect(math.dividir).toHaveBeenCalledTimes(0);

  expect(math.dividir(6, 2)).toBe(2);
  expect(math.dividir).toHaveBeenCalledTimes(1);

  expect(math.dividir(6, 2)).toBe(5);
  expect(math.dividir).toHaveBeenCalledTimes(2);

  expect(math.dividir(6, 2)).toBe(15);
  expect(math.dividir).toHaveBeenCalledTimes(3);

  math.dividir(8, 4);
  expect(math.dividir).toHaveBeenCalledWith(8, 4);
});

describe("#subtrair R5", () => {
  it("mockSubtrair", () => {
    const mockSubtrair = (math.subtrair = jest
      .spyOn(math, "subtrair")
      .mockReturnValue(20));

    expect(mockSubtrair).toHaveBeenCalledTimes(1);
    expect(mockSubtrair).toHaveReturned();
    expect(mockSubtrair(3, 2)).toBe(20);
  });

  it("math.subtrair implementation original", () => {
    math.subtrair.mockRestore();

    const expected = math.subtrair(5, 2);
    expect(expected).toBe(3);
  });
});
