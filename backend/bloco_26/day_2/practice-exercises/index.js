function returnPromise(a, b, c) {
  return new Promise((resolve, reject) => {
    const condition = [...arguments].some((arg) => typeof arg === 'string');
    if (condition) reject(new Error('Informe apenas números'));

    const calcResult = (a + b) * c;

    if (calcResult < 50) reject(new Error('Valor muito baixo'));

    resolve(calcResult);
  });
}
