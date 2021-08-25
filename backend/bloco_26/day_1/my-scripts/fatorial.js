const { questionInt, question } = require('readline-sync');

function again() {
  console.log('Ops, digite um número inteiro positivo');
  logFactorial();
}

function quit() {
  const answer = question(
    'Deseja fazer um novo cálculo? "s" para sim, "n" para não '
  );
  return answer === 's' && logFactorial();
}

function factorial(n) {
  if (n < 0) return again();
  return n === 0 ? 1 : n * factorial(n - 1);
}

function logFactorial() {
  const n = questionInt('Digite um número ');
  const result = factorial(n);
  console.log(result);
  quit();
}

logFactorial();
