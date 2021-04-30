// Crie um objeto player contendo as variáveis listadas abaixo.

let player = {
  name: "Marta",
  lastName: "Silva",
  age: 34,
  medals: { golden: 2, silver: 3 },
};

// Acesse a chave name , lastName e age . Concatene as informações para fazer um console.log no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".

player.name;
player.lastName;
player.age;

console.log(
  "A jogadora " +
    player.name +
    " " +
    player.lastName +
    " tem " +
    player.age +
    " anos de idade."
);

// Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

// Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

let numBestInTheWorld = player.bestInTheWorld.length;
console.log(
  "A jogadora " +
    player.name +
    " " +
    player.lastName +
    " foi a melhor do mundo por " +
    numBestInTheWorld +
    " vezes."
);

// Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".

let qtdMedalGolden = player.medals.golden;
let qtdMedalSilver = player.medals.silver;

console.log('A jogadora possui ' + qtdMedalGolden + ' medalhas de ouro e ' + qtdMedalSilver + ' medalhas de prata.');
