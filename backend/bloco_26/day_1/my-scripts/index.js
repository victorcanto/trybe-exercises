const { questionInt } = require('readline-sync');

const arrScripts = [
  { id: 1, name: 'Calcular IMC', src: './imc.js' },
  { id: 2, name: 'Calcular Velocidade Média', src: './velocidade.js' },
  { id: 3, name: 'Jogo da Adivinhação', src: './sorteio.js' },
  { id: 4, name: 'Calcular Fatorial', src: './fatorial.js' },
  { id: 5, name: 'Calcular Fibonacci', src: './fibonacci.js' },
];

function getScript(scriptId) {
  const [selectedScript] = arrScripts.filter(({ id }) => id === scriptId);
  return selectedScript;
}

function showList() {
  return arrScripts.map(({ id, name }) => console.log(`${id} - ${name}`));
}

function handleScripts() {
  showList();

  const scriptId = questionInt(
    'Qual script deve ser executado? Escolha pelo número da lista ou aperte "0" para cancelar '
  );

  if (scriptId === 0) return;

  const { src } = getScript(scriptId);
  require(src);
}

handleScripts();
