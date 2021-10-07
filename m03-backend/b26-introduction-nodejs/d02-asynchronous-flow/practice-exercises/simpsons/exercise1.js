const fs = require('fs').promises;

const fileName = './simpsons.json';

fs.readFile(fileName, 'utf8')
  .then((fileContent) => {
    return JSON.parse(fileContent);
  })
  .then((simpsons) => {
    return simpsons.map(({ id, name }) => `${id} - ${name}`);
  })
  .then((string) => {
    return console.log(string);
  })
  .catch((err) => {
    console.log(err);
  });
