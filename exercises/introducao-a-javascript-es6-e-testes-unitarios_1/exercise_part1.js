// PartI.1
const testingScope = (escopo) => {
  let ifScope = "Ótimo, fui utilizada no escopo !";
  let elseScope = "Não devo ser utilizada fora do meu escopo";
  escopo === true ? console.log(ifScope) : console.log(elseScope);
};

testingScope(true);

// PartI.2
const oddsAndEvens = [13, 3, 4, 10, 7, 2].sort((a, b) => a - b);

console.log(oddsAndEvens);
