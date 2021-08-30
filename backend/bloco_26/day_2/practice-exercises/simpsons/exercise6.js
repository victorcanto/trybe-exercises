const fs = require('fs').promises;

const fileName = './simpsonFamily.json';

async function replaceNelson() {
  const simpsonFamily = await fs
    .readFile(fileName, 'utf8')
    .then((fileContent) => JSON.parse(fileContent));

  const maggieData = { id: '8', name: 'Maggie Simpson' };
  const newArr = [...simpsonFamily];
  const index = simpsonFamily.findIndex((s) => s.id === '8');
  newArr.splice(index, 1, maggieData);

  await fs.writeFile(fileName, JSON.stringify(newArr));
}

replaceNelson();
