// Pegue cada um dos exercícios da primeira parte das nossas aulas de JavaScript e faça com que todos eles sejam funções de um mesmo arquivo. As variáveis que você define no começo de cada arquivo devem ser removidas e transformadas em parâmetros das funções.

// PRIMEIRO PROGRAMA - REFATORADO

function soma(a, b) {
  return a + b;
}

function substracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  return a / b;
}

function modulo(a, b) {
  return a % b;
}

console.log(soma(5, 3));
console.log(substracao(8, 10));
console.log(multiplicacao(9, 7));
console.log(divisao(20, 2));
console.log(modulo(5, 2));

// SEGUNDO PROGRAMA -REFATORADO

function maiorNumero(a, b) {
  if (a > b) {
    return a;
  } else if (a < b) {
    return b;
  } else {
    return "São iguais";
  }
}

// // TERCEIRO PROGRAMA

// if (a > b && a > c) {
//   console.log(a);
// } else if (a === b && a === c) {
//   console.log("São iguais");
// } else if (b > a && b > c) {
//   console.log(b);
// } else {
//   console.log(c);
// }

// // QUARTO PROGRAMA

// let valorDef = 7;
// if (valorDef > 0) {
//   console.log("positive");
// } else if (valorDef < 0) {
//   console.log("negative");
// } else {
//   console.log("zero");
// }

// // QUINTO PROGRAMA

// let a1 = 30;
// let a2 = 50;
// let a3 = 100;

// let somaAngulos = a1 + a2 + a3;

// if (somaAngulos === 180) {
//   console.log(true);
// } else if (somaAngulos < 0) {
//   console.log("Error");
// } else {
//   console.log(false);
// }

// // SEXTO PROGRAMA

// let partName = "rei";
// let semAcento = partName.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
// let convertPartName = semAcento.toLowerCase();

// switch (convertPartName) {
//   case "rei":
//     console.log("Move-se em qualquer direção, uma casa por vez");
//     break;

//   case "dama":
//     console.log(
//       "Move-se em qualquer direção, porém quantas casa quiser, desde que estejam livres"
//     );
//     break;

//   case "torre":
//     console.log(
//       "Move-se em linha reta, na vertical e horizontal, quantos casas quiser"
//     );
//     break;

//   case "bispo":
//     console.log("Move-se na diagonal, quantas casas quiser");
//     break;

//   case "cavalo":
//     console.log("Movimento em L");
//     break;

//   case "peao":
//     console.log("Move-se sempre uma casa a frente");
//     break;

//   default:
//     console.log("error, part is invalid");
// }

// // SÉTIMO PROGRAMA

// nota = 97;

// if (nota >= 90 && nota <= 100) {
//   console.log("A");
// } else if (nota >= 80 && nota < 90) {
//   console.log("B");
// } else if (nota >= 70 && nota < 80) {
//   console.log("C");
// } else if (nota >= 60 && nota < 70) {
//   console.log("D");
// } else if (nota >= 50 && nota < 60) {
//   console.log("F");
// } else {
//   console.log("Error, is invalid nota");
// }

// // OITAVO PROGRAMA

// let n1 = 2;
// let n2 = 2;
// let n3 = 2;
// let modulen1 = n1 % 2;
// let modulen2 = n2 % 2;
// let modulen3 = n3 % 2;

// somaModule = modulen1 + modulen2 + modulen3;

// if(somaModule !== 3) {
//   console.log(true); //Par
// } else {
//   console.log(false); //Impar
// }

// // NONO PROGRAMA

// let number1 = 2;
// let number2 = 2;
// let number3 = 2;
// let moduleNumber1 = number1 % 2;
// let moduleNumber2 = number2 % 2;
// let moduleNumber3 = number3 % 2;

// somaModuleNumber = moduleNumber1 + moduleNumber2 + moduleNumber3;

// if(somaModuleNumber !== 0) {
//   console.log(true); //Impar
// } else {
//   console.log(false); //Par
// }

// // DÉCIMO PROGRAMA

// let productCost = 1000;
// let saleValue = 1200;
// let tax = 20 / 100;

// let valueCostTotal = productCost + tax;
// let benefit = saleValue - valueCostTotal;

// if(productCost >= 0 && saleValue >= 0) {
//   console.log(benefit);
// } else {
//   console.log('Error, enter valid values');
// }
