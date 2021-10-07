/* Crie uma função que lê e escreve vários arquivos ao mesmo tempo.
Utilize o Promise.all para manipular vários arquivos ao mesmo tempo.
Dado o seguinte array de strings: ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'] Faça com que sua função crie um arquivo contendo cada string, sendo o nome de cada arquivo igual a file<index + 1>.txt . Por exemplo, para a string "Finalmente", o nome do arquivo é file1.txt .
Programe sua função para que ela faça a leitura de todos os arquivos criados no item anterior, armazene essa informação e escreva em um arquivo chamado fileAll.txt .
O conteúdo do arquivo fileAll.txt deverá ser Finalmente estou usando Promise.all !!!. */

const fs = require('fs').promises;

async function readStringsToFile() {
  const filesNames = [
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    'file5.txt',
  ];

  const fileContents = await Promise.all(
    filesNames.map((fileName) => fs.readFile(fileName, 'utf-8'))
  );

  const finalContent = fileContents.join(' ');

  return finalContent;
}

async function writeStringsToFile() {
  const arrOfStrings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

  const createFiles = arrOfStrings.map((str, index) => {
    fs.writeFile(`file${index + 1}.txt`, str);
  });

  await Promise.all(createFiles);

  const fileAll = './fileAll.txt';

  const fileContents = await readStringsToFile();

  await fs.writeFile(fileAll, fileContents);
}

writeStringsToFile();
