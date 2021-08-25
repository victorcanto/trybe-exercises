const { questionInt, question } = require('readline-sync');

function getRandomArbitrary(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}

function checkEntryNumber(entryNumber, correctNumber) {
  const result = entryNumber === correctNumber;

  if (result) return console.log('Parabéns, número correto!');
  return console.log(`Opa, não foi dessa vez. O número era ${correctNumber}`);
}

function playAgain() {
  const playAgain = question(
    'Deseja jogar novamente? Digite "s" para sim, ou "n" para não: '
  );

  if (playAgain === 's') return runGuessingGame();
  return;
}

function runGuessingGame() {
  const minNumber = 0;
  const maxNumber = 10;

  const entryNumber = questionInt('Digite um número entre 0 e 10: ');

  const correctNumber = getRandomArbitrary(minNumber, maxNumber);
  checkEntryNumber(entryNumber, correctNumber);
  playAgain();
}

runGuessingGame();
