const { questionInt, question } = require('readline-sync');

function again() {
  console.log('Ops, digite um número inteiro maior que 0');
}

function quit() {
  const answer = question(
    'Deseja fazer um novo cálculo? "s" para sim, "n" para não '
  );
  return answer === 's' && logFibonacci();
}

function calcElement(n) {
  let lastNumber = 1;
  let penultimateNumber = 1;

  let i = 0;
  while (n >= 0) {
    n--;

    if (penultimateNumber) console.log(penultimateNumber);

    const temp = lastNumber;
    lastNumber += penultimateNumber;

    penultimateNumber = temp;
  }
  console.log(penultimateNumber);
  return penultimateNumber;
}

function getFibonacci(n) {
  if (n <= 0) return again();
  return calcElement(n - 2);
}

function logFibonacci() {
  const n = questionInt('Digite um número ');
  getFibonacci(n);
  quit();
}

logFibonacci();

// Ref:
// https://pt.wikipedia.org/wiki/Sequ%C3%AAncia_de_Fibonacci
