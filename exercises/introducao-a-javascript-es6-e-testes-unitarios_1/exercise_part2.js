// PartII.1
const getFactorial = (n) =>
  n < 0
    ? console.log("Número menor que zero!")
    : n === 0
    ? 1
    : n * getFactorial(n - 1);

console.log(getFactorial(7));

// PartII.2

const biggestWord = (phrase) => {
  let bigWord = "";
  const arrPharse = phrase.split(" ");
  for (let index = 0; index < arrPharse.length; index += 1) {
    if (arrPharse[index].trim().length > bigWord.length) {
      bigWord = arrPharse[index].trim();
      console.log(bigWord);
    }
  }
};
biggestWord("Antônio foi no banheiro e não sabemos o que aconteceu");

// PartII.3
let clickCount = 0;
const countClicks = () => {
  clickCount += 1;
  count.value = clickCount;
};

// PartII.4 Funcao 1

const strX = (str) => {
  const strDet = "Tryber x aqui!";
  const newStr = strDet.replace("x", str);
  return newStr;
};

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Raciocínio Lógico",
  "Computer Science",
];

// PartII.4 Funcao 2

const showMessage = (str) => {
  const sort = skills.sort();
  const newMessage = `${strX(str)} Minhas cinco principais habilidades são: ${sort} #goTrybe.`;
  return newMessage;
};

console.log(showMessage("Victor"));
