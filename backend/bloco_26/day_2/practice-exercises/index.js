function returnPromise(a, b, c) {
  return new Promise((resolve, reject) => {
    const condition = [...arguments].some((arg) => typeof arg === 'string');
    if (condition) reject(new Error('Informe apenas números'));

    const calcResult = (a + b) * c;

    if (calcResult < 50) reject(new Error('Valor muito baixo'));

    resolve(calcResult);
  });
}

function getRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

const num1 = getRandomNumber();
const num2 = getRandomNumber();
const num3 = getRandomNumber();

returnPromise(num1, num2, num3)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
