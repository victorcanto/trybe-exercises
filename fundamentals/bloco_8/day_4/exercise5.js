const assert = require("assert");

const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];

function containsA() {
  const namesReduce = names.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  const splitNames = namesReduce.split("");
  const qtdeOfAs = splitNames.reduce((total, letter) => {
    return letter === "A" || letter === "a" ? total + 1 : total;
  }, 0);
  return qtdeOfAs;
}

assert.deepStrictEqual(containsA(), 20);
