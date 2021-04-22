const searchEmployee = require("../src/searchEmployee");

describe("searchEmployee", () => {
  it("Verifica se a função searchEmployee existe", () => {
    expect("function").toBe(typeof searchEmployee);
  });
  it("Verifica se retorna um erro caso o Id não seja identificado", () => {
    expect(() => searchEmployee("1234", "firstName")).toThrow(
      "ID não identificada"
    );
  });
  it("Verifica se retorna um erro caso a informação disponível não exista", () => {
    expect(() => searchEmployee("8579-6", "fullName")).toThrow(
      "Informação indisponível"
    );
  });
  it("Verifica se a função retorna o esperado corretamente", () => {
    expect(["Backend"]).toEqual(searchEmployee("4678-2", "specialities"));
  });
});
