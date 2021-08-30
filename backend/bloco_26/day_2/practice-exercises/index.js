const { questionInt } = require('readline-sync');

const arrScripts = [
  { id: 1, name: 'Calcular', src: './calculate.js' },
  { id: 2, name: 'Mostrar Simpsons', src: './simpsons/exercise1.js' },
  { id: 3, name: 'Mostrar Simpson por id', src: './simpsons/exercise2.js' },
  {
    id: 4,
    name: 'Deletar Simpsons com id 10 e 6',
    src: './simpsons/exercise3.js',
  },
  {
    id: 5,
    name: 'Cria novo arquivo chamado simpsonsFamily.json',
    src: './simpsons/exercise4.js',
  },
  {
    id: 6,
    name: 'Adiciona o personagem Nelson para o arquivo simpsonsFamily.json',
    src: './simpsons/exercise5.js',
  },
  {
    id: 7,
    name: 'Substitui Nelson por Maggie Simpson',
    src: './simpsons/exercise6.js',
  },
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
