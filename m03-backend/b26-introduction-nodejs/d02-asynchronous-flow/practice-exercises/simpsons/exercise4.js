const fs = require('fs').promises;

const fileName = './simpsons.json';
const newFileName = './simpsonFamily.json';

async function createSimpsonFamily() {
  const simpsons = await fs
    .readFile(fileName, 'utf8')
    .then((filecContent) => JSON.parse(filecContent));

  const arrayOfIdsRef = ['1', '2', '3', '4'];

  const simpsonFamily = simpsons.filter((s) => arrayOfIdsRef.includes(s.id));

  await fs.writeFile(newFileName, JSON.stringify(simpsonFamily));
}

createSimpsonFamily();
