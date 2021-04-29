const { getAnimal, getAnimalByAge } = require("../src/exercise6");

describe("Testando promise - findAnimalByName", () => {
  describe("Quando existe o animal com o nome procurado", () => {
    test("Retorne o objeto do animal", () => {
      expect.assertions(1);
      return getAnimal("Dorminhoco").then((animal) => {
        expect(animal).toEqual({ name: "Dorminhoco", age: 1, type: "Dog" });
      });
    });
  });

  describe("Quando não existe o animal com o nome procurado", () => {
    test("Retorna um erro", () => {
      expect.assertions(1);
      return getAnimal("Bob").catch((error) =>
        expect(error).toEqual("Nenhum animal com esse nome!")
      );
    });
  });
});

describe("Testando promise - findAnimalByAge", () => {
  describe("Quando existe o animal com a idade procurada", () => {
    test("Retorne um array de objetos", () => {
      expect.assertions(1);
      return getAnimalByAge(1).then((animal) => {
        expect(animal).toEqual([{ name: "Dorminhoco", age: 1, type: "Dog" }]);
      });
    });
  });

  describe("Quando não existe o animal com a idade procurada", () => {
    test("Retorna uma mensagem de erro", () => {
      expect.assertions(1);
      return getAnimalByAge(7).catch((e) =>
        expect(e).toEqual("Nenhum animal com essa idade!")
      );
    });
  });
});
