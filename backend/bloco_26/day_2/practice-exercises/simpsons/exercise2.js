const fs = require('fs').promises;
const { questionInt } = require('readline-sync');

const fileName = './simpsons.json';

async function getCharacterById(simpsonId) {
  const simpsons = await fs.readFile(fileName, 'utf8').then((fileContent) => {
    return JSON.parse(fileContent);
  });

  const simpsonData = simpsons.find(
    ({ id }) => Number(id) === Number(simpsonId)
  );

  if (!simpsonData) {
    throw new Error('id não encontrado');
  }
  console.log(simpsonData);
  return simpsonData;
}

const simpsonId = questionInt('Digite o Id do Personagem, de 1 a 10 ');
getCharacterById(simpsonId);
