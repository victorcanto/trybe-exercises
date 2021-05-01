const math = require("./Math");

test("Verifica se a funcção mockada foi chamada", () => {
  math.subtrair = jest.fn();

  math.subtrair(5, 3);
  expect(math.subtrair).toHaveBeenCalled();
});
