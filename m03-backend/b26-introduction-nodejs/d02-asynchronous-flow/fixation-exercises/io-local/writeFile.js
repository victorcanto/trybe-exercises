const fs = require('fs').promises;

// fs.writeFile('./meu-arquivo.txt', 'Meu novo texto...')
//   .then(() => {
//     console.log('Arquivo escrito com sucesso!');
//   })
//   .catch((err) => {
//     console.error(`Erro ao escrever o arquivo: ${err.message}`);
//   });

// Async/Await

// async function main() {
//   try {
//     await fs.writeFile('./meu-arquivo.txt', 'Meu novo texto *-*');
//     console.log('Arquivo escrito com sucesso!');
//   } catch (err) {
//     console.error(`Erro ao escrever o arquivo: ${err.message}`);
//   }
// }

// main();

// // A flag wx abre o arquivo para escrita **apenas** caso ele não exista. Caso o contrário, um erro será lançado
// fs.writeFile('./meu-arquivo.txt', 'Eu estive aqui :eyes:', { flag: 'wx' })
//   .then(() => {
//     console.log('Arquivo salvo');
//   })
//   .catch((err) => {
//     // Se o arquivo existir, um erro é retornado
//     console.error(err);
//   });

// Usando Promise.all

Promise.all([
  fs.readFile('file1.txt'),
  fs.readFile('file2.txt'),
  fs.readFile('file3.txt'),
])
  .then(([file1, file2, file3]) => {
    const fileSizeSum = file1.byteLength + file2.byteLength + file3.byteLength;
    console.log(`Lidos 3 arquivos totalizando ${fileSizeSum} bytes`);
  })
  .catch((err) => {
    console.error(`Erro ao ler arquivos: ${err.message}`);
  });
