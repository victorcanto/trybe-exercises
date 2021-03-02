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

// SEGUNDO PROGRAMA - REFATORADO

function maiorNumero(a, b) {
  if (a > b) {
    return a;
  } else if (a < b) {
    return b;
  } else {
    return "São iguais";
  }
}

// // TERCEIRO PROGRAMA - REFATORADO

function maiorDe3Numeros(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (a === b && a === c) {
    return "São iguais";
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}

// // QUARTO PROGRAMA - REFATORADO

function checkPositiveNumber(a) {
  if (a > 0) {
    return "positive";
  } else if (a === 0) {
    return "zero";
  } else {
    return "negative";
  }
}

// // QUINTO PROGRAMA - REFATORADO

function checkTriangle(a1, a2, a3) {
  let somaAngulos = a1 + a2 + a3;
  if (somaAngulos === 180) {
    return true;
  } else if (somaAngulos < 0) {
    return "Error";
  } else {
    return false;
  }
}

// // SEXTO PROGRAMA - REFATORADO

function checkMovePartChess(partName) {
  let semAcento = partName.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  let convertPartName = semAcento.toLowerCase();

  switch (convertPartName) {
    case "rei":
      console.log("Move-se em qualquer direção, uma casa por vez");
      break;

    case "dama":
      console.log(
        "Move-se em qualquer direção, porém quantas casa quiser, desde que estejam livres"
      );
      break;

    case "torre":
      console.log(
        "Move-se em linha reta, na vertical e horizontal, quantos casas quiser"
      );
      break;

    case "bispo":
      console.log("Move-se na diagonal, quantas casas quiser");
      break;

    case "cavalo":
      console.log("Movimento em L");
      break;

    case "peao":
      console.log("Move-se sempre uma casa a frente");
      break;

    default:
      console.log("error, part is invalid");
  }
}

// // SÉTIMO PROGRAMA - REFATORADO

function checkNote(nota) {
  if (nota >= 90 && nota <= 100) {
    console.log("A");
  } else if (nota >= 80 && nota < 90) {
    console.log("B");
  } else if (nota >= 70 && nota < 80) {
    console.log("C");
  } else if (nota >= 60 && nota < 70) {
    console.log("D");
  } else if (nota >= 50 && nota < 60) {
    console.log("F");
  } else {
    console.log("Error, is invalid nota");
  }
}

// // OITAVO PROGRAMA - REFATORADO

function checkNumbersPar(n1, n2, n3) {
  let somaModule = (n1 % 2) + (n2 % 2) + (n3 % 2);
  if (somaModule !== 3) {
    console.log(true); //Par
  } else {
    console.log(false); //Impar
  }
}

// // NONO PROGRAMA - REFATORADO

function checkNumbersImpar(number1, number2, number3) {
  let somaModuleNumber = (number1 % 2) + (number2 % 2) + (number3 % 2);
  if (somaModuleNumber !== 0) {
    console.log(true); //Impar
  } else {
    console.log(false); //Par
  }
}

// // DÉCIMO PROGRAMA - REFATORADO

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
