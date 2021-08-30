const fs = require('fs').promises;

const fileName = './simpsonFamily.json';

async function addNelsonToFamily() {
  const simpsonsFamily = await fs
    .readFile(fileName, 'utf8')
    .then((fileContent) => JSON.parse(fileContent));

  const nelsonData = { id: '8', name: 'Nelson Muntz' };
  simpsonsFamily.push(nelsonData);

  await fs.writeFile(fileName, simpsonsFamily);
}

addNelsonToFamily();
