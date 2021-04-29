const Animals = [
  { name: "Dorminhoco", age: 1, type: "Dog" },
  { name: "Soneca", age: 2, type: "Dog" },
  { name: "Preguiça", age: 5, type: "Cat" },
];

const findAnimalByName = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const animal = Animals.find((animal) => animal.name === name);
      if (animal) {
        return resolve(animal);
      } else {
        const error = "Nenhum animal com esse nome!";
        return reject(error);
      }
    }, 100);
  });
};

const getAnimal = (name) => {
  return findAnimalByName(name).then((animal) => animal);
};

const findAnimalByAge = (age) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimal = Animals.filter((animal) => animal.age === age);
      const error = "Nenhum animal com essa idade!";
      if (arrayAnimal.length !== 0) {
        return resolve(arrayAnimal);
      } else {
        return reject(error);
      }
    }, 100);
  });
};

const getAnimalByAge = (age) => {
  return findAnimalByAge(age).then((arrayAnimal) => arrayAnimal);
};

module.exports = {
  getAnimal,
  getAnimalByAge,
};
