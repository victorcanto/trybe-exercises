const fileName = './simpsons.json';

async function deleteCharactersFromFile() {
  const simpsons = await fs
    .readFile(fileName, 'utf8')
    .then((fileContent) => JSON.parse(fileContent));

  const newArr = simpsons.filter((s) => s.id !== '10' && s.id !== '6');

  await fs.writeFile(fileName, JSON.stringify(newArr));
}

deleteCharactersFromFile();
