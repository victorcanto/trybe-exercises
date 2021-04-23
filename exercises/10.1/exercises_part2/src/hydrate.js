const hydrate = (string) => {
// source : https://www.horadecodar.com.br/2020/10/14/como-obter-apenas-os-numeros-de-uma-string-em-javascript/
  const numbers = string
    .replace(/[^0-9]/g, "")
    .split("")
    .map((number) => parseInt(number))
    .reduce((acc, number) => acc + number);
    if(numbers === 1) return `${numbers} copo de água`;
  return `${numbers} copos de água`;
};

module.exports = hydrate;
