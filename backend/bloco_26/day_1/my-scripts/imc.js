const { questionFloat } = require('readline-sync');

const WEIGHT = questionFloat('Qual o seu peso? (em kg)  ');
const HEIGHT = questionFloat('Qual a sua altura em metros? (em metros) ');

function classifyImc(imc) {
  switch (true) {
    case imc >= 18.5 && imc <= 24.9:
      return 'Peso normal';
    case imc >= 25.0 && imc <= 24.9:
      return 'Acima do peso (sobrepeso)';
    case imc >= 30.0 && imc <= 34.9:
      return 'Obesidade grau I';
    case imc >= 35.0 && imc <= 39.9:
      return 'Obesidade grau II';
    case imc >= 40.0:
      return 'Obesidade graus III e IV';
    default:
      return 'Abaixo do peso (magreza)';
  }
}

function getImc(weight, height) {
  const imc = (weight / height ** 2).toFixed(2);
  const classification = classifyImc(imc);

  console.log(`Peso: ${weight}kg, Altura: ${height}m`);
  console.log(`IMC: ${imc} - ${classification}`);
  return imc;
}

getImc(WEIGHT, HEIGHT);
