function calculate(a, b, c) {
  return new Promise((resolve, reject) => {
    const condition = [...arguments].some((arg) => typeof arg === 'string');
    if (condition) reject(new Error('Informe apenas números'));

    const calcResult = (a + b) * c;

    if (calcResult < 50) reject(new Error('Valor muito baixo'));

    resolve(calcResult);
  });
}

function callCalculate() {
  const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);

  calculate(...randomNumbers)
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
}

callCalculate();

function getRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}
